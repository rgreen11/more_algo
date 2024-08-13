// export default 
var two_crystal_balls = function (breaks) {
    var jumpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        console.log({ i: i });
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpAmount;
    for (var j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
};
var idx = Math.floor(Math.random() * 10);
var data = new Array(10).fill(false);
for (var i = idx; i < 10; ++i) {
    data[i] = true;
}
console.log(data);
console.log(two_crystal_balls(data));
