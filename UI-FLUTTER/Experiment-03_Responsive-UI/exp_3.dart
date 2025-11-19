// ---------------------------------------------------------------------------
// File:       exp_3.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
import 'package:flutter/material.dart';

/// Demonstrates a responsive layout that adapts to the screen width.
class Exp3Page extends StatelessWidget {
  const Exp3Page({super.key});

  /// Builds the responsive UI that toggles presentation based on screen size.
  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    final Size screenSize = MediaQuery.of(context).size;
    final bool isLargeScreen = screenSize.width > 600;

    return Center(
      child: Container(
        padding: const EdgeInsets.all(20),
        color: isLargeScreen ? Colors.green[200] : Colors.blue[200],
        child: Text(
          isLargeScreen
              ? 'Large Screen Layout (${screenSize.width}px)'
              : 'Small Screen Layout (${screenSize.width}px)',
          style: const TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}