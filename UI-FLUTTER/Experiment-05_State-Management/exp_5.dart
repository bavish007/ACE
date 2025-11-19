// ---------------------------------------------------------------------------
// File:       exp_5.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

/// Demonstrates state management via both setState and Provider patterns.
class Exp5Page extends StatelessWidget {
  const Exp5Page({super.key});

  /// Builds the dual-counter experience backed by local state and Provider.
  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    return ChangeNotifierProvider(
      create: (BuildContext providerContext) => CounterModel(),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: const <Widget>[
          Text('Stateful Example with setState:'),
          StatefulCounter(),
          Divider(),
          Text('Provider Example:'),
          ConsumerCounter(),
        ],
      ),
    );
  }
}

/// Displays a counter powered by local State and setState.
class StatefulCounter extends StatefulWidget {
  const StatefulCounter({super.key});

  /// Creates the mutable state that stores the counter value.
  @override
  State<StatefulCounter> createState() => _StatefulCounterState();
}

class _StatefulCounterState extends State<StatefulCounter> {
  int _tapCount = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text('Count: $_tapCount'),
        ElevatedButton(
          onPressed: () => setState(() => _tapCount++),
          child: const Text('Increment'),
        ),
      ],
    );
  }
}

/// Holds the Provider-backed counter and exposes mutation helpers.
class CounterModel extends ChangeNotifier {
  int _count = 0;

  /// Current count value consumed by listening widgets.
  int get count => _count;

  /// Increments the count and notifies observers.
  void increment() {
    _count++;
    notifyListeners();
  }
}

/// Displays the Provider-driven counter and mutation trigger.
class ConsumerCounter extends StatelessWidget {
  const ConsumerCounter({super.key});

  /// Builds the counter UI bound to the Provider ChangeNotifier.
  @override
  Widget build(BuildContext context) {
    final CounterModel counterModel = context.watch<CounterModel>();
    return Column(
      children: <Widget>[
        Text('Count: ${counterModel.count}'),
        ElevatedButton(
          onPressed: counterModel.increment,
          child: const Text('Increment'),
        ),
      ],
    );
  }
}