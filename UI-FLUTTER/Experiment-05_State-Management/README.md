# Experiment 05: State Management

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment contrasts two foundational state management strategies in Flutter: ephemeral widget state controlled via `setState`, and shared application state managed through the `provider` package. By presenting both counters on the same screen, learners can observe how rebuilds propagate, how local state is encapsulated inside a `StatefulWidget`, and how global listeners react to `ChangeNotifier` updates. The exercise underscores the trade-offs between scoped, component-level updates and cross-widget data sharing within a single declarative UI.

## 2. Key Implementation Details
- `ChangeNotifierProvider` from the `provider` package injects a `CounterModel` into the widget tree for dependency-aware state sharing.
- `StatefulCounter` leverages `StatefulWidget`, a private `_StatefulCounterState`, and `setState` to mutate an integer stored inside the widget’s own lifecycle.
- `ConsumerCounter` accesses the shared `CounterModel` via `context.watch`, demonstrating reactive rebuilds when `notifyListeners` fires.
- Layout scaffolding uses a `Column`, `Text`, `Divider`, and `ElevatedButton` widgets to present each counter stack vertically with clear labeling.

## 3. Source Code Analysis
`Exp5Page.build` wraps its content in `ChangeNotifierProvider`, supplying a `CounterModel` instance for descendants. The `Column` then renders two sections: the `StatefulCounter`, which keeps `_tapCount` as a private field and calls `setState` when the increment button is pressed, and the `ConsumerCounter`, which watches the provider-backed model and invokes `increment()` directly on the shared object. Because `CounterModel` extends `ChangeNotifier`, every call to `increment()` triggers `notifyListeners()`, causing the consumer to rebuild with the latest `count`. This arrangement cleanly demonstrates both localized and shared state lifecycles without additional routing or persistence logic.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-05_State-Management/exp_5.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
