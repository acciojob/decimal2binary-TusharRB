function threeSum(arr, target) {
  const result = [];

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicates
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
