#include <iostream>
#include <string>
#include <algorithm>
using namespace std;


// Optimal Approach
bool isPalindromeOptimal(int x) {
    if (x < 0) return false; // Negative numbers are not palindromes

    long int revNum = 0;
    int dup = x;
    while (x > 0) {
        int temp = x % 10; // Extract the last digit
        revNum = (revNum * 10) + temp; // Build the reversed number
        x = x / 10; // Remove the last digit
    }
    // Check if the reversed number is equal to the original number
    return dup == revNum;
}

int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable


    bool resultOptimal = isPalindromeOptimal(x);
    cout << "Is the number a palindrome ? " << (resultOptimal ? "Yes" : "No") << endl;

    return 0;
}
