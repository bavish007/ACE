#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

//BruteForce Approach
int reverseNumberBruteForce(int x) {
    // Convert the integer to a string
    string str = to_string(x);

    // Reverse the string manually
    reverse(str.begin(), str.end());

    // Convert the reversed string back to an integer
    int rev = stoi(str);

    return rev; // Returns the reversed number
}

int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable

    int revBruteForce = reverseNumberBruteForce(x);
    cout << "Reverse of the given number : " << revBruteForce << endl;

    return 0;
}
