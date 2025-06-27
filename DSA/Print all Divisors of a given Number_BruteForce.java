import java.util.Scanner;

public class Main {
    // Brute Force Approach
    public static int[] printDivisorsBruteForce(int n) {
        int count = 0;

        // First, count the number of divisors
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }

        int[] divisors = new int[count]; // Allocate array based on count of divisors
        int index = 0;

        // Populate the divisors array
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisors[index++] = i;
            }
        }

        return divisors; // Return the array of divisors
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int n = scanner.nextInt(); // Read the number from the user

        // Brute Force Approach
        int[] divisorsBruteForce = printDivisorsBruteForce(n);
        System.out.print("Divisors (Brute Force): ");
        for (int divisor : divisorsBruteForce) {
            System.out.print(divisor + " "); // Print each divisor
        }
        System.out.println();

        scanner.close();
    }
}
