import java.util.Scanner;

public class Main {
   
    // Optimal Approach
    public static int[] findDivisorsOptimal(int n) {
        int[] tempDivisors = new int[n]; // Temporary array to store divisors
        int count = 0; // Count the number of divisors
        int sqrtN = (int) Math.sqrt(n); // Calculate the square root of n

        // Find divisors and their counterparts
        for (int i = 1; i <= sqrtN; ++i) {
            if (n % i == 0) {
                tempDivisors[count++] = i; // Add divisor i
                if (i != n / i) {
                    tempDivisors[count++] = n / i; // Add counterpart divisor
                }
            }
        }

        // Copy the divisors to an appropriately sized array
        int[] divisors = new int[count];
        System.arraycopy(tempDivisors, 0, divisors, 0, count);

        return divisors; // Return the array of divisors
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = scanner.nextInt(); // Read the number from the user

        // Optimal Approach
        int[] divisorsOptimal = findDivisorsOptimal(n);
        System.out.print("Divisors (Optimal): ");
        for (int divisor : divisorsOptimal) {
            System.out.print(divisor + " "); // Print each divisor
        }
        System.out.println();

        scanner.close();
    }
}
