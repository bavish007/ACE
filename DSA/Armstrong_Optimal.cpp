#include <iostream>
#include <cmath> // cmath for pow function
using namespace std;

// Optimal approach
bool isArmstrongOptimal(int num) {
    // Calculate the no.of digits in the number
    int k = 0;
    int n = num;
    while (n != 0) {
        n /= 10;
        k++;
    }

    n = num; // Reset n to the original number
    int powers[10]; // Array to store precomputed powers of digits 0-9

    // Precompute powers of each digit
    for (int i = 0; i <= 9; i++) {
        powers[i] = pow(i, k);
    }

    int sum = 0; // Initialize the sum

    // Iterate through each digit of the number
    while (n > 0) {
        int ld = n % 10; // Extract the last digit
        sum += powers[ld]; // Add the precomputed power to the sum
        n /= 10; // Remove the last digit
    }

    return sum == num; // Check if the sum equals the original number
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number; // user input

    cout << number << " is " << (isArmstrongOptimal(number) ? "an Armstrong" : "not an Armstrong") << " number." << endl;

    return 0;
}
