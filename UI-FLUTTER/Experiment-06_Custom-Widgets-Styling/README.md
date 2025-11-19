# Experiment 06: Custom Widgets Styling

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment focuses on building reusable presentation components and centralizing styling so that feature screens can stay lean. `exp_6a.dart` demonstrates how to encapsulate card layouts and avatar rendering in dedicated widgets that read typography and color from the surrounding theme. `exp_6b.dart` complements that work by defining a bespoke `ThemeData` that unifies colors, elevation, and form styling across the module. Together they show how custom UI elements remain consistent when driven by a shared design system.

## 2. Key Implementation Details
- `package:flutter/material.dart` supplies Material components, theming primitives, and utility classes such as `debugPrint`.
- `CustomCard` extends `StatelessWidget`, composing `Card`, `Padding`, `Column`, `Text`, and `SizedBox` to render titles/subtitles that respect `Theme.of(context).textTheme`.
- `CustomAvatar` (also `StatelessWidget`) wraps `CircleAvatar` and `Text`, using `RegExp` helpers to derive initials and responsive `TextStyle` sizing from the provided diameter.
- `ThemeData` configuration in `exp_6b.dart` tailors `Colors.indigo` swatches, `Brightness`, `CardTheme`, and `InputDecorationTheme` to enforce rounded corners, elevations, and filled text fields globally.

## 3. Source Code Analysis
`CustomCard` receives immutable `title` and optional `subtitle` values, then builds a padded `Card` whose text widgets automatically adopt the active theme, conditionally inserting spacing and subtitle content when provided. `CustomAvatar` accepts a name and size, normalizes the string with `trim`/`split`, extracts up to two initials, and displays them inside a `CircleAvatar` whose radius and font size scale together for clarity. The complementary `appTheme` constant supplies a single source of truth for colors, brightness, card shape, elevation, and input decoration, so any screen importing it gains consistent styling without duplicating configuration.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-06_Custom-Widgets-Styling/exp_6a.dart`
- `flutter run lib/Experiment-06_Custom-Widgets-Styling/exp_6b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
