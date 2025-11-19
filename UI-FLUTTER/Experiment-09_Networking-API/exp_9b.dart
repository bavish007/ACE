// ---------------------------------------------------------------------------
// File:       exp_9b.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------

// Importing Flutter's core Material Design package for UI widgets
import 'package:flutter/material.dart';

// Importing a local file that contains the function to fetch data from an API
import 'fetch_data.dart';

// A stateless widget that displays data fetched from an API
/// Renders a list of posts retrieved asynchronously from the API layer.
class ApiPage extends StatelessWidget {
  const ApiPage({
    super.key,
  }); // Constructor with an optional key (for widget identification)

  /// Builds a Future-backed list interface that displays fetched posts.
  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    // FutureBuilder is used to handle asynchronous data fetching (like API calls)
    return FutureBuilder<List<Post>>(
      // 'fetchPosts(6)' is a function that returns a Future<List<Post>> with 6 posts
      future: fetchPosts(6),

      // The builder function runs every time the Future changes its state
      builder: (BuildContext buildContext, AsyncSnapshot<List<Post>> snapshot) {
        // 1️⃣ While waiting for the data (loading state)
        if (snapshot.connectionState == ConnectionState.waiting) {
          // Show a loading spinner in the center of the screen
          return const Center(child: CircularProgressIndicator());
        }
        // 2️⃣ If there is an error while fetching data
        else if (snapshot.hasError) {
          // Display an error message with retry button
          return Center(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                mainAxisSize:
                    MainAxisSize.min, // Column takes minimum vertical space
                children: <Widget>[
                  const Text(
                    'Failed to load posts',
                    style: TextStyle(fontSize: 16),
                  ),
                  const SizedBox(height: 8), // Adds small vertical spacing
                  // Display the error details (for debugging or user info)
                  Text(snapshot.error.toString()),

                  const SizedBox(height: 12),

                  // Button to retry fetching data by reloading the widget
                  ElevatedButton(
                    onPressed: () => (buildContext as Element).reassemble(),
                    // 'reassemble()' forces widget tree to rebuild
                    child: const Text('Retry'),
                  ),
                ],
              ),
            ),
          );
        }
        // 3️⃣ When data is successfully fetched
        else {
          // Retrieve the list of posts from snapshot, use empty list if null
          final List<Post> postList = snapshot.data ?? <Post>[];

          // Display the list of posts using ListView.separated for dividers
          return ListView.separated(
            itemCount: postList.length, // Number of items in the list
            // Adds a divider line between each list item
            separatorBuilder: (BuildContext _, int __) => const Divider(height: 1),

            // Builds each list item (ListTile)
            itemBuilder: (BuildContext itemContext, int postIndex) {
              final Post post = postList[postIndex]; // Get each individual Post object

              return ListTile(
                // Circle avatar showing post ID
                leading: CircleAvatar(child: Text('${post.id}')),

                // Post title (only one line, with ellipsis if too long)
                title: Text(
                  post.title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),

                // Post body (two lines, truncated if too long)
                subtitle: Text(
                  post.body,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),

                // On tap, open a dialog box showing full details of the post
                onTap: () {
                  showDialog(
                    context: itemContext,
                    builder: (BuildContext dialogContext) => AlertDialog(
                      title: Text(post.title), // Show post title
                      content: SingleChildScrollView(
                        child: Text(post.body), // Full post content
                      ),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () => Navigator.of(dialogContext).pop(),
                          child: const Text('Close'),
                        ),
                      ],
                    ),
                  );
                },
              );
            },
          );
        }
      },
    );
  }
}
