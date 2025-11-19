// ---------------------------------------------------------------------------
// File:       exp_2a.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
import 'package:flutter/material.dart'; // to have related flutter components

class Exp2aPage extends StatelessWidget {
  const Exp2aPage({super.key});

  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "Hello Flutter!",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.blue,
            ),
          ),
          const SizedBox(height: 20),
          Image.network(
            "https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg",
            height: 150,
          ),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color.fromARGB(255, 161, 122, 4),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Text("This is inside a Container widget."),
          ),
        ],
      ),
    );
  }
}