#include <stdio.h>

int main() {
    int x; // Declaration of a variable
    printf("Enter number: ");
    scanf("%d",&x); // Read the input from user and store it in variable 
    
    int rev  = 0; // Initialization of a variable to 0
    
    // Loop until the number becomes 0
    while(x!=0){
        int digit = x % 10; // Extracts last digit of the number
        x = x / 10; // Removes the last digit from the number
        rev = rev * 10 + digit; // Adds the extracted digit to the reversed number
    }
    
    // Prints the reversed number
    printf("Reverse of a given number: %d",rev);
    return rev; // Returns the reversed number
}
