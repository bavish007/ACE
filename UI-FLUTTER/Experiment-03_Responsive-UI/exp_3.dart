// ---------------------------------------------------------------------------
// File:       exp_3.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
import 'package:flutter/material.dart';

class Exp3Page extends StatelessWidget {
  const Exp3Page({super.key});

  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    var size = MediaQuery.of(context).size;
    bool isLarge = size.width > 600;

    return Center(
      child: Container(
        padding: const EdgeInsets.all(20),
        color: isLarge ? Colors.green[200] : Colors.blue[200],
        child: Text(
          isLarge
              ? "Large Screen Layout (${size.width}px)"
              : "Small Screen Layout (${size.width}px)",
          style: const TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}