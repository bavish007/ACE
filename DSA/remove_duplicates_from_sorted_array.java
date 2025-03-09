class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0; 
        for (int j = 1; j < nums.length; j++) { // Starting second pointer j from the second element
            if (nums[j] != nums[i]) { // Check if  current element is different from the last unique element
                i++; // Move first pointer to the next position
                nums[i] = nums[j]; // Update the position with current element
            }
        }
        return i + 1; // Return new length of the array with unique elements
    }
}
