const {expect} = require ("@jest/globals");
const LeapYear = require ("../LeapYear.js");

/**
 * método que compruebe si un año es bisiesto
    * deben cumplirse las siguientes normas
    * Un año no es bisiesto si no es divisible por 4
    * Un año es bisiesto si es divisible por 4
    * Un año es bisiesto si es divisible por 400
    * Un año no es bisiesto si es divisible por 100 pero no por 400  
    * true si es bisiesto y false si no lo es 
 */