function showMinNumber(n1) {
    let num = n1
    let min = num[0]

    for (let item of num) {
        if(item < min) {
          min = item; 
        }
      }
 console.log(min);
}
  
 showMinNumber([1,-1,2])


function sort(nums) {
    let numbers = nums.length;
    for (let i = 0; i < numbers - 1; i++) {
      for (let k = 0; k < numbers - 1 - i; k++) {
        if (nums[k + 1] < nums[k]) {
          let t = nums[k + 1];
          nums[k + 1] = nums[k];
          nums[k] = t;
        }
      }
    }
    console.log(nums.at(-1));
    return nums; 
  }

  sort([4,1,7,-8,10])