// ---------------------------------------------------------------------------
// File:       exp_6b.dart
// Author:     Bavish Reddy Muske (23AG1A0542)
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------

// Importing Flutter's Material package
// It gives access to ThemeData, Colors, InputDecorationTheme, etc.
import 'package:flutter/material.dart';

// ==============================
// 🎨 APP THEME CONFIGURATION
// ==============================
//
// 'ThemeData' defines the global styling for your entire Flutter app.
// You can control the color scheme, brightness, text styles, buttons,
// cards, inputs, etc., from a single place.
//
// We create a variable 'appTheme' that will be used in main.dart
// inside MaterialApp(theme: appTheme)
/// Global theme configuration applied across the Flutter experiment app.
final ThemeData appTheme = ThemeData(
  // ----------------------------
  // PRIMARY COLOR SWATCH
  // ----------------------------
  // This sets the main color for the app (used for AppBar, buttons, etc.)
  primarySwatch: Colors.indigo,

  // ----------------------------
  // BRIGHTNESS MODE
  // ----------------------------
  // Brightness.light = light mode (white background)
  // Brightness.dark = dark mode (black background)
  brightness: Brightness.light,

  // ----------------------------
  // DEFAULT BACKGROUND COLOR
  // ----------------------------
  // Scaffold is the main screen container.
  // This color becomes the background for most pages.
  scaffoldBackgroundColor: Colors.grey.shade100, // light grey background
  // ----------------------------
  // CARD THEME (for all Card widgets)
  // ----------------------------
  // This applies default styling to every Card in the app.
  cardTheme: const CardTheme(
    // Rounded corners for a softer look
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.all(Radius.circular(12)),
    ),
    // Adds a soft drop shadow effect under cards
    elevation: 4,
  ),

  // ----------------------------
  // INPUT FIELD THEME (for TextFields, Forms, etc.)
  // ----------------------------
  // This controls how input boxes (like login forms) look.
  inputDecorationTheme: const InputDecorationTheme(
    // Rounded borders around the input box
    border: OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(8)),
    ),
    // Makes text fields have a filled white background
    filled: true,
    fillColor: Colors.white,
  ),
);
