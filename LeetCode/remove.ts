let removeElement = (nums: number[], val: number): number => {
    let k: number = 0
    let i: number = 0

    while(i < nums.length) {
        if(nums[i] === val) {
            nums.splice(i, 1)
        }
        else {
            k++
            i++
        }
    }
    return k
}