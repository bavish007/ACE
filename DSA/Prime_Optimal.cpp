#include <iostream>
#include <cmath> // Include cmath for sqrt function
using namespace std;


// Optimal Approach
bool checkPrimeOptimal(int n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    // Loop through numbers from 1 to the square root of n
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) { // If n is divisible by i without any remainder
            return false; // Return false, indicating that the number is not prime
        }
    }

    return true; // Return true, indicating that the number is prime
}


int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number; // Read the number from the user

    if (checkPrimeOptimal(number)) {
        cout << number << " is a prime number (Optimal)." << endl;
    } else {
        cout << number << " is not a prime number (Optimal)." << endl;
    }

    return 0;
}
