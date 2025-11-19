// ---------------------------------------------------------------------------
// File:       exp_7a.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------

// Import the Flutter material package which contains all
// the widgets and UI elements like TextField, Button, etc.
import 'package:flutter/material.dart';

// Import the file where we created our custom validator class.
// This file (form_validation.dart) contains functions that check
// if user inputs like name, email, and age are valid.
import 'form_validation.dart';

// -------------------------------------------------------------
// 1️⃣  This is our main FormPage widget.
// -------------------------------------------------------------
/// Demonstrates a simple validated form using custom validators.
class FormPage extends StatefulWidget {
  const FormPage({super.key});

  // The createState() method creates the mutable (changeable) part of the widget.
  /// Creates the mutable form state that manages validation and controllers.
  @override
  State<FormPage> createState() => _FormPageState();
}

// -------------------------------------------------------------
// 2️⃣  The _FormPageState class holds all the logic and UI for our form.
// -------------------------------------------------------------
class _FormPageState extends State<FormPage> {
  // This key helps Flutter uniquely identify our Form widget
  // and access its state (like checking if the form is valid).
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  // These are controllers for each input field.
  // They help us read and control the text that the user types.
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _ageController = TextEditingController();

  // dispose() is called automatically when the widget is removed from the screen.
  // We use it to clean up (free memory) by disposing controllers.
  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _ageController.dispose();
    super.dispose();
  }

  // -------------------------------------------------------------
  // 3️⃣  The build() method — this creates the visible UI.
  // -------------------------------------------------------------
  /// Builds the validated form layout with submit and reset actions.
  @override
  Widget build(BuildContext context) {
    debugPrint('[AUTH] Executing: Bavish Reddy Muske - 23AG1A0542');
    return Padding(
      // Add space (16 pixels) around the form
      padding: const EdgeInsets.all(16),

      // The Form widget is a special container that groups together
      // multiple input fields and allows us to validate them all at once.
      child: Form(
        key: _formKey, // Connect this form with our _formKey defined above
        // We use a ListView so the screen can scroll if content overflows
        child: ListView(
          children: <Widget>[
            // ---------------------------
            // Full Name Input Field
            // ---------------------------
            TextFormField(
              controller: _nameController, // connect controller to get user text
              decoration: const InputDecoration(
                labelText: 'Full Name', // shows a label inside the box
              ),
              validator: Validators.name, // call name validation function
            ),

            // Small space between fields
            const SizedBox(height: 12),

            // ---------------------------
            // Email Input Field
            // ---------------------------
            TextFormField(
              controller: _emailController,
              decoration: const InputDecoration(labelText: 'Email'),
              validator: Validators.email, // use email validator
              keyboardType:
                  TextInputType.emailAddress, // show @ keyboard on mobile
            ),

            const SizedBox(height: 12),

            // ---------------------------
            // Age Input Field
            // ---------------------------
            TextFormField(
              controller: _ageController,
              decoration: const InputDecoration(labelText: 'Age'),
              validator: Validators.age, // use age validator
              keyboardType: TextInputType.number, // open numeric keyboard
            ),

            const SizedBox(height: 20),

            // ---------------------------
            // Buttons Row (Submit & Reset)
            // ---------------------------
            Row(
              children: <Widget>[
                // ✅ Submit Button
                ElevatedButton(
                  onPressed: () {
                    // When pressed, we check if the form is valid.
                    // validate() runs all the validators inside FormFields.
                    // It returns true only if all validators return null (no error).
                    final bool isValidForm =
                        _formKey.currentState?.validate() ?? false;

                    if (isValidForm) {
                      debugPrint('Form validation succeeded.');
                      // If the form is valid, we show a small popup message
                      // (called SnackBar) at the bottom of the screen.
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content:
                              Text('Form submitted: ${_nameController.text}'),
                        ),
                      );
                    } else {
                      debugPrint('Form validation failed.');
                    }
                  },
                  child: const Text('Submit'),
                ),

                const SizedBox(width: 12),

                // 🔄 Reset Button
                OutlinedButton(
                  onPressed: () {
                    // Reset all validations and clear text fields
                    _formKey.currentState?.reset();
                    _nameController.clear();
                    _emailController.clear();
                    _ageController.clear();
                  },
                  child: const Text('Reset'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
