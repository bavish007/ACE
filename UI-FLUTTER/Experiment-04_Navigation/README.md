# Experiment 04: Navigation

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment demonstrates intra-app navigation using Flutter’s imperative routing APIs. By instantiating a nested `Navigator` directly within the widget tree, the exercise highlights how routes can be generated dynamically without relying on the app-level navigator. The goal is to show how user interactions translate into push/pop transitions, reinforcing mental models for managing navigation stacks in modular UI components.

## 2. Key Implementation Details
- `Navigator` is embedded at the page level with a custom `onGenerateRoute`, demonstrating manual route resolution.
- `MaterialPageRoute` wraps each screen to supply platform-consistent transitions and handles lifecycle management.
- `FirstScreen` and `SecondScreen` are `StatelessWidget`s composed of centered `ElevatedButton`s that invoke `Navigator.pushNamed` and `Navigator.pop` respectively, showcasing push/pop semantics.
- `RouteSettings` inspection allows the generator to switch between default and named routes, illustrating pattern matching for navigation flows.

## 3. Source Code Analysis
`Exp4Page.build` returns a `Navigator` whose `onGenerateRoute` callback captures every navigation request. When the incoming route name equals `/second`, the callback returns a `MaterialPageRoute` that loads `SecondScreen`; otherwise it defaults to `FirstScreen`. `FirstScreen` presents a button that pushes `/second` onto the stack, while `SecondScreen` exposes a button that simply pops the route. Because both screens are stateless, navigation state is maintained entirely by the navigator stack rather than by widget-level state management.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-04_Navigation/exp_4.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
