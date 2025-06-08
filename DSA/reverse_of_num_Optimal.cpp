#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

//Optimal Approach
int reverseNumberOptimal(int x) {
    int rev = 0; // Initialization of a variable to store reversed number
    
    // Loop until the number becomes 0
    while (x != 0) {
        int digit = x % 10; // Extracts the last digit of the number
        x = x / 10; // Removes the last digit from the number
        rev = rev * 10 + digit; // Adds the extracted digit to the reversed number
    }
    
    return rev; // Returns the reversed number
}


int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable 

    int revOptimal = reverseNumberOptimal(x);
    cout << "Reverse of the given number : " << revOptimal << endl;
    

    return 0;
}
