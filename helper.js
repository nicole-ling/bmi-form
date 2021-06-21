exports.calculateBMI = (weight, height) => {
    height = (height/100) ** 2;
    return Math.round((weight/height) * 10) / 10;
}

exports.validate = (n) => {
    return isNaN(n) || n < 1 ? false : true;
}