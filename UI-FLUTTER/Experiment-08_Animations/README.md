# Experiment 08: Animations

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment explores Flutter’s imperative animation APIs by wiring animation controllers to visual transitions. `exp_8a.dart` focuses on a single fade loop that demonstrates how `AnimationController` values can directly drive opacity. `exp_8b.dart` layers a slide tween and a repeating fade on the Flutter logo to highlight how independent controllers coordinate simultaneous effects. The pair shows how mixing ticker providers with transitions yields smooth, resource-conscious motion primitives suitable for more complex UI choreography.

## 2. Key Implementation Details
- `package:flutter/material.dart` supplies `StatefulWidget`, theming, and transition widgets such as `FadeTransition` and `SlideTransition`.
- `SingleTickerProviderStateMixin` (exp 8a) and `TickerProviderStateMixin` (exp 8b) feed vsync signals to `AnimationController` instances for efficient frame scheduling.
- `AnimationController` drives opacity directly in the fade demo, while a `Tween<Offset>` combined with `CurvedAnimation` translates the logo from off-screen to center.
- Visual elements include `Container` with `BoxDecoration`, `FlutterLogo`, `Center`, and sizing constants to keep layouts minimal and focused on motion.
- Control patterns showcase `.repeat(reverse: true)` loops, `.forward()` one-shot entrance animations, and proper use of `dispose()` to release controllers.

## 3. Source Code Analysis
In `AnimationDemo`, `initState` instantiates a single controller with a two-second duration, immediately starts a reversing loop, and the `build` method wraps a colored `Container` in `FadeTransition` so opacity oscillates between 0 and 1; disposal stops the ticker when the widget unmounts. `SlideFadeDemo` creates two controllers—one 800 ms slide that plays forward once, and one 1.4 s fade that repeats—and combines them by nesting `SlideTransition` (fed by a `Tween<Offset>` animated through `CurvedAnimation`) around a `FadeTransition` containing the `FlutterLogo`. Both widgets keep their mutable state confined to the controller lifecycle, with the rest of the UI declaratively expressing how the animation values map to position and alpha.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-08_Animations/exp_8a.dart`
- `flutter run lib/Experiment-08_Animations/exp_8b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
