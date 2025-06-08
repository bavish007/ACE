#include <iostream>
#include <cmath> // cmath for pow function
using namespace std;

// Brute force approach
bool isArmstrongBruteForce(int num) {
    int k = to_string(num).length(); // Calculate the no.of digits
    int sum = 0; // Initialize the sum
    int n = num; // Copy the input number to a temporary variable

    // Iterate through each digit of the number
    while (n > 0) {
        int ld = n % 10; // Extract the last digit
        sum += pow(ld, k); // Add the digit raised to the power of k to the sum
        n /= 10; // Remove the last digit
    }

    return sum == num; // Check if the sum equals the original number
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number; // user input

    cout << number << " is " << (isArmstrongBruteForce(number) ? "an Armstrong" : "not an Armstrong") << " number." << endl;
    
    return 0;
}
