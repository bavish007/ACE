// ---------------------------------------------------------------------------
// File:       exp_4.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
import 'package:flutter/material.dart';

/// Demonstrates nested navigation with push and pop flows.
class Exp4Page extends StatelessWidget {
  const Exp4Page({super.key});

  /// Builds the Navigator that manages route generation for the experiment.
  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    return Navigator(
      onGenerateRoute: (RouteSettings routeSettings) {
        if (routeSettings.name == '/second') {
          return MaterialPageRoute<void>(
            builder: (BuildContext routeContext) => const SecondScreen(),
          );
        }
        return MaterialPageRoute<void>(
          builder: (BuildContext routeContext) => const FirstScreen(),
        );
      },
    );
  }
}

/// First screen that navigates forward to the second screen.
class FirstScreen extends StatelessWidget {
  const FirstScreen({super.key});

  /// Builds the UI that navigates to the second screen when tapped.
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => Navigator.pushNamed(context, '/second'),
        child: const Text('Go to Second Screen'),
      ),
    );
  }
}

/// Second screen that pops back to the first screen.
class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  /// Builds the UI that returns to the first screen when tapped.
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
        onPressed: () => Navigator.pop(context),
        child: const Text('Back'),
      ),
    );
  }
}