# Experiment 10: Testing Debugging

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment demonstrates how lightweight Flutter widgets can be used to surface automated test feedback and observe rebuild diagnostics directly within the UI layer. `exp_10a.dart` executes assertion-based smoke tests, aggregates their outcomes, and presents the textual summaries to highlight the workflow of instrumenting logic checks inside a widget tree. `exp_10b.dart` complements that by emitting timestamped `debugPrint` statements during every build so developers can trace widget lifecycle events while the screen renders static guidance. Together they show how testing and debugging hooks can coexist with production widgets to shorten feedback loops during development.

## 2. Key Implementation Details
- `package:flutter/material.dart` provides `StatelessWidget`, `ListView`, `Padding`, `Text`, `Center`, and theming primitives used by both demos.
- Assertions (`assert`) and try/catch blocks in `TestResultsPage.runTests` verify conditions and capture failures without crashing release builds.
- `debugPrint` is leveraged for both logging test failures and tracking rebuild timestamps in `DebugPage` for console-based observation.
- Layout composition relies on `ListView` with padding/mapped children to render bullet-style summaries, while `Center` + `Text` form the static debug instructions.
- Utility APIs like `DateTime.now()` demonstrate how runtime diagnostics can be embedded into log statements for profiling rebuild frequency.

## 3. Source Code Analysis
`TestResultsPage` exposes a `runTests()` helper that executes assertions (e.g., `1 + 1 == 2`), records pass/fail strings in a list, and returns them to `build`, which maps each result into padded `Text` widgets within a `ListView` to present the outcomes. Because the widget is stateless, the tests run on every build, ensuring up-to-date feedback while keeping the UI simple. `DebugPage` is another `StatelessWidget` whose `build` method logs an identifying message and the current timestamp via `debugPrint`, then renders centered guidance telling the developer to inspect the console, effectively illustrating how to trace widget lifecycles even when there is no interactive state to display.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-10_Testing-Debugging/exp_10a.dart`
- `flutter run lib/Experiment-10_Testing-Debugging/exp_10b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
