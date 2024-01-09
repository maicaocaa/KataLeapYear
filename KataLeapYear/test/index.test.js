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

describe ('Test que valida año bisiesto', () => { 
   const leap_year = new LeapYear();

   test ('test que devuelve false si el año no es divisible por 4',()=> {
      const year = 1995;
      const respuesta_esperada = false;
      const respuesta_recibida = leap_year.divisibleBy4 (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })

   test ('test que devuelve true si el año  es divisible por 4',()=> {
      const year = 2000;
      const respuesta_esperada = true;
      const respuesta_recibida = leap_year.divisibleBy4 (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })
  
   test ('test que devuelve true si el año  es divisible por 400',()=> {
      const year = 2000;
      const respuesta_esperada = true;
      const respuesta_recibida = leap_year.divisibleBy4 (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })


});