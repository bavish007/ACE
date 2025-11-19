# Experiment 02: Layouts Widgets

**Developer:** Bavish Reddy | **Roll No:** 23AG1A0542

## 1. Overview
This experiment investigates how foundational Flutter layout primitives arrange heterogeneous content on a single screen. `exp_2a.dart` demonstrates the composition of text, remote imagery, and decorated containers using a vertically aligned `Column`, illustrating how padding, spacing, and theming cascade through the widget tree. `exp_2b.dart` extends the exercise by juxtaposing `Row`, `Column`, and `Stack` constructs so learners can observe how axis constraints and overlay semantics impact rendering. Together, the samples reinforce how layout decisions dictate readability, emphasis, and spatial organization in Flutter applications.

## 2. Key Implementation Details
- `Column`, `Row`, and `Stack` widgets serve as the primary layout algorithms, showcasing vertical sequencing, horizontal distribution, and layered overlays respectively.
- `Text`, `Image.network`, and `Container` illustrate core content primitives, with `BoxDecoration`, `padding`, and `borderRadius` to highlight styling controls.
- `SizedBox`, `Padding`, and `EdgeInsets` manage inter-widget spacing, reinforcing predictable rhythm within the columnar flow.
- `Expanded`, `Align`, and `CircleAvatar` inside the stack example emphasize how positioning widgets can anchor children to centers and corners without disturbing surrounding layout.

## 3. Source Code Analysis
`exp_2a.dart` builds a `Column` that prints a heading, fetches an image via `Image.network`, and ends with a styled `Container`, relying solely on declarative widget composition with no mutable state. `exp_2b.dart` places the user journey within another `Column`, first rendering a `Row` of `Icon` widgets spaced evenly, then a nested column of text entries, and finally an `Expanded` `Stack` that layers colored `Container` widgets plus an `Align`ed star icon. Both files emphasize static layout declarations, so state management is unnecessary; the focus remains on how Flutter resolves constraints and paints each subtree.

## 4. Execution
To execute this experiment, run the following command(s) in your terminal:
- `flutter run lib/Experiment-02_Layouts-Widgets/exp_2a.dart`
- `flutter run lib/Experiment-02_Layouts-Widgets/exp_2b.dart`


---
**Academic Verification:**
This project is implemented as part of the UI Engineering Laboratory curriculum.
&copy; 2025 Bavish Reddy. All Rights Reserved.
