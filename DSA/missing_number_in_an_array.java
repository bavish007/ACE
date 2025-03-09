class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length; // Get the length of the array
        int expectedSum = n * (n + 1) / 2; // Calculate the expected sum of numbers from 0 to n
        int actualSum = 0; // Initialize the actual sum of elements in the array
        
        // Calculate the actual sum of the elements in the array
        for (int num : nums) {
            actualSum += num;
        }
        
        // The missing number is the difference between the expected sum and the actual sum
        return expectedSum - actualSum;
    }
}
