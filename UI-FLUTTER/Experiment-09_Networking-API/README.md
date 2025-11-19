# Experiment 09: Networking API

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment demonstrates how Flutter clients consume REST endpoints, transform JSON payloads into strongly typed models, and surface asynchronous state in the UI. `exp_9a.dart` bootstraps a Material app that calls JSONPlaceholder via the `http` package, converts each post into a `Post` object, and renders the results with `FutureBuilder`. `exp_9b.dart` isolates the networking logic behind a helper and shows how a stateless widget can still respond to async updates through `FutureBuilder` by rebuilding on completion, error, or retry. Together they showcase latency handling, error surfacing, and optimistic UI patterns common to mobile networking layers.

## 2. Key Implementation Details
- `dart:async`, `dart:convert`, and `package:http/http.dart` power asynchronous GET requests, request timeouts, and JSON decoding.
- Data classes: `Post` model with `fromJson`, plus `PostApiService`/`fetchPosts` helpers that enforce limits, build `Uri` objects, and wrap errors.
- UI structure: `MaterialApp`, `Scaffold`, `AppBar`, `FutureBuilder`, `ListView.builder`, `ListView.separated`, `Card`, `ListTile`, `CircleAvatar`, `AlertDialog`, and `SnackBar`-style error widgets.
- State patterns: `StatefulWidget` (`PostsPage`) caches a `Future<List<Post>>`, while `ApiPage` remains `StatelessWidget` yet reacts to future states provided to `FutureBuilder`.
- Error and loading indicators: `CircularProgressIndicator`, custom `_ErrorMessage` widget, retry button calling `Element.reassemble()`, and guarded access to `AsyncSnapshot` properties.

## 3. Source Code Analysis
`NetworkingExperimentApp` configures theming and routes users to `PostsPage`, whose `_PostsPageState` initializes a `_postsFuture` by invoking `PostApiService.fetchPosts` with a server-side `_limit` query parameter. Inside `build`, `FutureBuilder` inspects the future’s connection state: it shows a spinner while waiting, delegates to `_ErrorMessage` on exceptions, or maps the resulting `Post` list into `Card`/`ListTile` rows with IDs, titles, and bodies. The service itself awaits `http.get`, parses JSON via `jsonDecode`, converts maps to `Post` objects, and throws contextual errors for timeouts, formatting issues, or HTTP failures so the UI can respond. In `exp_9b.dart`, `ApiPage` follows the same FutureBuilder pattern but adds a retryable error column and `showDialog` interactions when list tiles are tapped, illustrating how networking results can drive richer detail experiences without additional stateful scaffolding.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-09_Networking-API/exp_9a.dart`
- `flutter run lib/Experiment-09_Networking-API/exp_9b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
