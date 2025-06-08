import java.util.Scanner;

class Solution {
    // Brute Force Approach
    public int largestBruteForce(int[] arr) {
        int n = arr.length; // Get the length of the array
        int maxElement = arr[0]; // Initialize maxElement with the first element

        // Compare each element with every other element
        for (int i = 0; i < n; i++) {
            boolean isMax = true;
            for (int j = 0; j < n; j++) {
                if (arr[i] < arr[j]) {
                    isMax = false; // arr[i] is not the max element
                    break;
                }
            }
            if (isMax) {
                maxElement = arr[i]; // Update maxElement
            }
        }
        return maxElement; // Return the largest element
    }
}


public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read the number of elements from the user
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();

        // Declare an array to store the elements
        int[] arr = new int[n];
        
        // Read the elements from the user
        System.out.println("Enter the elements: ");
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        System.out.println("Largest element: " + new Solution().largestBruteForce(arr));
    }
}
 