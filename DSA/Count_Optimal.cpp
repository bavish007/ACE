#include <bits/stdc++.h>
using namespace std;

// Optimal Approach
// Function to count the number of digits in a number 'n'
int countDigits(int n) {
    // Calculate the count of digits in 'n' using logarithmic operation log10(n) + 1
    int cnt = (int)(log10(n) + 1);

    // The expression (int)(log10(n) + 1) calculates the number of digits in 'n'
    // and casts it to an integer.

    // Return the count of digits in 'n'
    return cnt;
}

int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable 


    int resultOptimal = countDigits(x);
    cout << "Count of digits in " << x << ": " << resultOptimal << endl;

    return 0;
}
