import os

# ================= CONFIGURATION =================
# REPLACE WITH YOUR ACTUAL DETAILS
YOUR_NAME = "Bavish Reddy Muske"
YOUR_ROLL_NUMBER = "23AG1A0542"  # <--- PUT YOUR REAL ROLL NO HERE
# =================================================

BASE_DIR = "UI-FLUTTER"

def get_header(filename):
    # Professional Standard Header (No Emojis)
    return f"""// ---------------------------------------------------------------------------
// File:       {filename}
// Author:     {YOUR_NAME} ({YOUR_ROLL_NUMBER})
// Created:    2025
// Purpose:    Academic Experiment Implementation
// ---------------------------------------------------------------------------
"""

def process_file(filepath, filename):
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # 1. SKIP IF ALREADY BRANDED
    if len(lines) > 0 and "File:" in lines[1]:
        print(f"Skipped (Already branded): {filename}")
        return

    # 2. ADD HEADER
    new_content = [get_header(filename)] + lines

    # 3. INJECT LOG SIGNATURE (Text-Only)
    final_content = []
    injected = False
    
    # Standard system log style [AUTH]
    signature_code = f"    debugPrint('[AUTH] Executing: {YOUR_NAME} - {YOUR_ROLL_NUMBER}');\n"

    for line in new_content:
        final_content.append(line)
        # Look for the entry point of the widget to plant the logger
        if not injected and ("Widget build(BuildContext context) {" in line or "void main() {" in line):
            final_content.append(signature_code)
            injected = True

    # 4. SAVE FILE
    with open(filepath, "w", encoding="utf-8") as f:
        f.writelines(final_content)
    print(f"Processed: {filename}")

def main():
    print("--- Starting Enterprise Branding ---")
    if not os.path.exists(BASE_DIR):
        print(f"Error: Could not find folder '{BASE_DIR}'. Make sure you are in the 'ACE' directory.")
        return

    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith(".dart"):
                process_file(os.path.join(root, file), file)
    print("--- Completed Successfully ---")

if __name__ == "__main__":
    main()