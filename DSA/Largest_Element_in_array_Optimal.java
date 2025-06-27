import java.util.Scanner;


class SolutionOptimal {
    // Optimal Approach
    public int largestOptimal(int[] arr) {
        int n = arr.length; // Get the length of the array
        int max = arr[0]; // Initialize max with the first element

        // Iterate through the array
        for (int i = 0; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i]; // Update max if current element is greater
            }
        }
        return max; // Return the largest element
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

        System.out.println("Largest element: " + new SolutionOptimal().largestOptimal(arr));
    }
}
 