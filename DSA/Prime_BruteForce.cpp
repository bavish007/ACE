#include <iostream>
#include <cmath> // Include cmath for sqrt function
using namespace std;

// Brute Force Approach
bool checkPrimeBruteForce(int n) {
    int cnt = 0; // Initialize a counter variable 

    // Loop through numbers from 1 to n
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) { // If n is divisible by i exactly
            cnt++; // Increment the counter
        }
    }

    // If the no.of factors is exactly 2
    if (cnt == 2) {
        return true; // Return true, indicating that the number is prime
    } else {
        return false; // Return false, indicating that the number is not prime
    }
}


int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number; // Read the number from the user

    // Brute Force Approach
    if (checkPrimeBruteForce(number)) {
        cout << number << " is a prime number (Brute Force)." << endl;
    } else {
        cout << number << " is not a prime number (Brute Force)." << endl;
    }

    return 0;
}
