# Experiment 07: Form Validation

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment demonstrates how Flutter forms encapsulate data validation by coupling stateful input widgets with reusable validator logic. `exp_7a.dart` builds a scrollable data-entry screen that enforces correctness for name, email, and age before letting the user submit. `exp_7b.dart` extracts the validation rules into a dedicated helper class so that multiple screens can share the same constraints. Together they illustrate the separation of UI concerns from business rules while showcasing user feedback through snack bars and reset flows.

## 2. Key Implementation Details
- `package:flutter/material.dart` supplies `Form`, `ListView`, `TextFormField`, `SizedBox`, `Row`, `ElevatedButton`, `OutlinedButton`, `ScaffoldMessenger`, and `SnackBar` primitives.
- `StatefulWidget`/`State` pair (`FormPage` and `_FormPageState`) manage `GlobalKey<FormState>` plus `TextEditingController` instances for each input.
- `Form` + `TextFormField` widgets leverage built-in validator hooks to call custom static methods exposed by the `Validators` class.
- Input behavior customizations: `TextInputType.emailAddress` for email, `TextInputType.number` for age, padding via `EdgeInsets.all`, and layout control through `ListView` and `Row`.
- Validation helpers use `RegExp`, `int.tryParse`, and range checks to enforce domain rules without instantiating new objects (static utility pattern).

## 3. Source Code Analysis
`FormPage` instantiates controllers and a `GlobalKey<FormState>` to maintain mutable form state, disposing the controllers when the widget unmounts. Inside `build`, a padded `Form` wraps a `ListView` of `TextFormField` widgets, each wired to the corresponding controller and validator from `Validators`. Pressing the Submit button triggers `_formKey.currentState?.validate()`, and on success the app surfaces a `SnackBar` confirming submission; failures simply keep the inline error strings visible. The Reset button calls `reset()` on the form state and clears all controllers, providing a clean slate while the validators continue to guard future inputs.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-07_Form-Validation/exp_7a.dart`
- `flutter run lib/Experiment-07_Form-Validation/exp_7b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
