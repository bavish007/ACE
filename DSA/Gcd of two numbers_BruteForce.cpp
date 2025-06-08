#include <iostream>
#include <algorithm>

using namespace std;

// Brute Force Approach
int GcdBruteForce(int n1, int n2) {
    int gcd = 1; // Initialize gcd to 1

    // Iterate from 1 up to the minimum of n1 and n2
    for (int i = 1; i <= min(n1, n2); i++) {
        // Check if i is a common factor of both n1 and n2
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i; // Update gcd to the current common factor i
        }
    }

    return gcd; // Return gcd
}

int main() {
    int n1, n2;
    
    // Read the two numbers from user
    cout << "Enter two numbers: ";
    cin >> n1 >> n2;

    int gcdBruteForce = GcdBruteForce(n1, n2);
    cout << "GCD of " << n1 << " and " << n2 << " is: " << gcdBruteForce << endl;
    
    return 0;
}
