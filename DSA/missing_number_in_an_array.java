class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length; // length of the array
        int expectedSum = n * (n + 1) / 2; // expected sum of numbers from 0 to n
        int actualSum = 0; 
        
        // Calculates actual sum of the elements in the array
        for (int num : nums) {
            actualSum += num;
        }
        
        // missing number is the diff b.n the expected sum & the actual sum
        return expectedSum - actualSum;
    }
}
