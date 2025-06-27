#include <iostream>
#include <algorithm>

using namespace std;

// Optimal Approach 
int GcdOptimal(int a, int b) {
    // Continue loop as long as b is greater than 0
    while (b != 0) {
        int temp = b; // Store the value of b
        b = a % b; // Update b to the remainder of a divided by b
        a = temp; // Update a to the previous value of b
    }

    return a; // Return gcd
}

int main() {
    int n1, n2;
    
    // Read the two numbers from user
    cout << "Enter two numbers: ";
    cin >> n1 >> n2;

    int gcdOptimal = GcdOptimal(n1, n2);
    cout << "GCD of " << n1 << " and " << n2 << " is: " << gcdOptimal << endl;

    return 0;
}
