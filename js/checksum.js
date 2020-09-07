function checksum(number) {
    let checksum = 0;

    while (number > 0) {
        checksum += number % 10;
        number /= 10;
        number = Math.floor(number);
    }

    return checksum;
}

module.exports = checksum;