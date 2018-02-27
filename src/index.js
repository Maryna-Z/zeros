module.exports = function getZerosCount(number) {
    var zero = 0;
    do {
        zero = zero + Math.floor(number/5);
        number = Math.floor(number/5);
        } while (number != 0);
    return zero;
}
