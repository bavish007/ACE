// ---------------------------------------------------------------------------
// File:       exp_9a.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------

// Core async utilities and JSON decoding helpers used by the networking demo.
import 'dart:async';
import 'dart:convert';

// Flutter material widgets for rendering UI and debugPrint.
import 'package:flutter/material.dart';

// Importing the 'http' package, which allows making network requests (GET, POST, etc.)
// The 'as http' part gives it a short alias so we can call http.get(), http.post(), etc.
import 'package:http/http.dart' as http;

/// Boots the networking experiment application.
void main() {
  runApp(const NetworkingExperimentApp());
}

// ------------------------------------------------------------
// 💡 Data Model Class — represents one "Post" object from the API
// ------------------------------------------------------------

/// Represents a single post item provided by the JSONPlaceholder API.
class Post {
  const Post({
    required this.id,
    required this.title,
    required this.body,
  });

  factory Post.fromJson(Map<String, dynamic> json) => Post(
        id: json['id'] as int,
        title: json['title'] as String,
        body: json['body'] as String,
      );

  final int id; // Unique numeric ID for each post
  final String title; // Short title or heading of the post
  final String body; // Main content or message of the post
}

/// A lightweight API service that fetches posts from JSONPlaceholder.
class PostApiService {
  const PostApiService();

  /// Fetches a list of posts with an optional [limit].
  Future<List<Post>> fetchPosts({int limit = 10}) async {
    if (limit <= 0) {
      throw ArgumentError.value(limit, 'limit', 'Must be greater than zero.');
    }

    final Uri postsUri = Uri.https(
      'jsonplaceholder.typicode.com',
      '/posts',
      <String, String>{'_limit': '$limit'},
    );

    try {
      final http.Response response = await http
          .get(postsUri)
          .timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        final List<dynamic> postData =
            jsonDecode(response.body) as List<dynamic>;

        return postData
            .map(
              (dynamic entry) =>
                  Post.fromJson(entry as Map<String, dynamic>),
            )
            .toList();
      }

      debugPrint('Non-success status: ${response.statusCode}');
      throw Exception('Server error: ${response.statusCode}');
    } on TimeoutException catch (timeoutError) {
      debugPrint('Fetch timeout: $timeoutError');
      throw Exception('Request timed out. Please try again.');
    } on FormatException catch (formatError) {
      debugPrint('Response parsing failed: $formatError');
      throw Exception('Received malformed data from server.');
    } catch (error) {
      debugPrint('Unexpected fetch failure: $error');
      rethrow;
    }
  }
}

/// Root widget that wires up the networking demo UI.
class NetworkingExperimentApp extends StatelessWidget {
  const NetworkingExperimentApp({super.key});

  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] NetworkingExperimentApp.build invoked');

    return MaterialApp(
      title: 'Networking Experiment',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
      ),
      home: const PostsPage(),
    );
  }
}

/// Displays a list of posts retrieved from the API service.
class PostsPage extends StatefulWidget {
  const PostsPage({super.key});

  @override
  State<PostsPage> createState() => _PostsPageState();
}

/// Handles fetching posts and rendering list states.
class _PostsPageState extends State<PostsPage> {
  static const int _postLimit = 5;
  final PostApiService _postApiService = const PostApiService();
  late Future<List<Post>> _postsFuture;

  @override
  void initState() {
    super.initState();
    _postsFuture = _postApiService.fetchPosts(limit: _postLimit);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('Latest Posts'),
        ),
        body: FutureBuilder<List<Post>>(
          future: _postsFuture,
          builder:
              (BuildContext context, AsyncSnapshot<List<Post>> postsSnapshot) {
            if (postsSnapshot.connectionState == ConnectionState.waiting) {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }

            if (postsSnapshot.hasError) {
              return _ErrorMessage(error: postsSnapshot.error.toString());
            }

            final List<Post> postList = postsSnapshot.data ?? <Post>[];

            if (postList.isEmpty) {
              return const Center(
                child: Text('No posts available at the moment.'),
              );
            }

            return ListView.builder(
              itemCount: postList.length,
              itemBuilder: (BuildContext context, int postIndex) {
                final Post post = postList[postIndex];
                return Card(
                  margin: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 8,
                  ),
                  child: ListTile(
                    title: Text(post.title),
                    subtitle: Text(post.body),
                    leading: CircleAvatar(
                      child: Text(post.id.toString()),
                    ),
                  ),
                );
              },
            );
          },
        ),
      );
}

class _ErrorMessage extends StatelessWidget {
  const _ErrorMessage({
    required this.error,
  });

  final String error;

  /// Displays a user-friendly error message with iconography.
  @override
  Widget build(BuildContext context) => Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              const Icon(
                Icons.wifi_off,
                size: 48,
              ),
              const SizedBox(height: 16),
              const Text(
                'Unable to load posts',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                error,
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      );
}
