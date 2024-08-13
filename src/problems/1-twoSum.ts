export default function twoSum(data: number[], target: number) {
    const numMap = new Map();

    for (let i = 0; i < data.length; ++i) {
        let numToFind = target - nums[i];
        
        if (numMap.has(numToFind)) {
            return [numMap.get(numToFind), i];
        }
        numMap.set(data[i], i]);
    }
    return null;
}
