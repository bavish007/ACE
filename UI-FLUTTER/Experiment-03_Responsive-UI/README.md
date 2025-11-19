# Experiment 03: Responsive UI

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment examines how a Flutter widget can introspect device characteristics and adapt its presentation accordingly. By sampling runtime metrics from `MediaQuery`, the interface discriminates between compact and expansive viewports and adjusts its visual treatment. The goal is to demonstrate the foundational principles of responsive design within a single widget tree, highlighting how small layout decisions communicate context to users.

## 2. Key Implementation Details
- `MediaQuery` provides the `Size` object that captures live screen width for breakpoint evaluation.
- A `StatelessWidget` (`Exp3Page`) wraps the layout logic, emphasizing declarative composition without stateful controllers.
- `Center` and `Container` coordinate padding and background color adjustments to keep the message prominently aligned.
- Conditional styling logic toggles between `Colors.green[200]` and `Colors.blue[200]`, tying color to the large/small classification.

## 3. Source Code Analysis
`Exp3Page.build` executes once per frame and begins by querying `MediaQuery.of(context).size` to capture the current viewport. A Boolean `isLargeScreen` compares the width against a 600-pixel threshold to decide which branch to render. The widget tree itself is a `Center` containing a padded `Container` whose `color` and `Text` content both reflect the computed screen class, resulting in a concise demonstration of conditional UI without mutable state or complex navigation.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-03_Responsive-UI/exp_3.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
