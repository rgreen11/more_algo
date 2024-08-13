// export default 
const two_crystal_balls = (breaks: boolean[]): number => {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jumpAmount;

    for(; i < breaks.length; i += jumpAmount){
        // This loop is jumping the square root of the array's length
        // Ex -> arr length 10 sq root is 3, and were going up by the square root
        // i = 3 then 6 then 9 etc. 
        // If we find something before the length of the array we break
        console.log({i})
        if (breaks[i]){
            break;
        }
    }
    i -= jumpAmount;
    console.log({i, jumpAmount})
// j is only going up to the jumpamount, kinda like the sliding window
// we're still using i to check from the current point to the length where we break
    for(let j = 0; j <= jumpAmount && i < breaks.length; j++, i ++){
        console.log({j, i})
        if (breaks[i]){
            return i;
        }
    }

    return -1

}
let idx = Math.floor(Math.random() * 10);
const data = new Array(10).fill(false);

for (let i = idx; i < 10; ++i) {
    data[i] = true;
}
console.log(data);

console.log(two_crystal_balls(data))