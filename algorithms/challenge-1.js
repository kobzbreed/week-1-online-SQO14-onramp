function countTruthy(arr) {
    let count = 0;
    arr.forEach(element => element? count++: null)
    return count
}
module.exports = countTruthy