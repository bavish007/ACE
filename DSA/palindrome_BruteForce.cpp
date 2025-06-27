#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Brute Force Approach
bool isPalindromeBruteForce(int x) {
    if (x < 0) return false; // -ve numbers are not palindromes

    // Convert the number to a string
    string original = to_string(x);

    // Create a reversed copy of the original string
    string reversed = original;
    reverse(reversed.begin(), reversed.end());

    // Compare the original string with the reversed string
    return original == reversed;
}

int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable

    bool resultBruteForce = isPalindromeBruteForce(x);
    cout << "Is the number a palindrome ? " << (resultBruteForce ? "Yes" : "No") << endl;

 
    return 0;
}
