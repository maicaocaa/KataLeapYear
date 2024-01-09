class LeapYear {
    divisibleBy4 (num) {
        return num % 4 === 0 ? true:false;
    }
    divisibleBy400 (num) {
        return num % 400 === 0 ? true:false;
    }

}

module.exports = LeapYear;