#include <bits/stdc++.h>
using namespace std;

// Brute Force Approach
class Solution {
  public:
    // Function to count the number of digits in n that evenly divide n
    int evenlyDivides(int n) {
        int original = n; // Store the original number
        int count = 0; // Initialize the count to 0
        
        while (n > 0) {
            int digit = n % 10; // Get the last digit
            // Check if digit is non-zero and divides the original number evenly
            if (digit != 0 && original % digit == 0) {
                count++; // Increment the count
            }
            n = n / 10; // Remove the last digit
        }
        
        return count; // Return the count of digits that divide the number evenly
    }
};

int main() {
    int x; // Declaration of a variable
    cout << "Enter number: ";
    cin >> x; // Read the input from user and store it in variable 

    Solution sol;
    // Call the brute force function and print the result
    int resultBruteForce = sol.evenlyDivides(x);
    cout << "Number of digits in " << x << " that divide it evenly : " << resultBruteForce << endl;

    
    return 0;
}
