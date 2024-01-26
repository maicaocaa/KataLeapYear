class LeapYear {
    // divisibleBy4 (num) {
    //     return num % 4 === 0 ;
    // }

    //  divisibleBy400(num) {
    //      return num % 400 === 0;
    //  }

    // divisibleBy100and400 (num) {
    //    return num % 100 === 0 ? this.divisibleBy400(num): false;
    // }

    leapYearInOneFunction (num) { 
       return (num % 4 === 0 && num % 100 !==0) || (num %400 === 0)?true:false;
              
       }
     }
    

module.exports = LeapYear;