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
   * 
   *1997 no es bisiesto (no es divisible por 4)
   1996 es bisiesto (divisible por 4)
   1600 es bisiesto (divisible por 400)
   1800 no es bisiesto (divisible por 4, divisible por 100, NO divisible por 400)
 */

describe ('Test que valida año bisiesto', () => { 
   const leap_year = new LeapYear();

   test ('test que devuelve false si el año no es divisible por 4',()=> {
      const year = 1997;
      const respuesta_esperada = false;
      const respuesta_recibida = leap_year.  leapYearInOneFunction  (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })

   test ('test que devuelve true si el año es divisible por 4',()=> {
      const year = 1996;
      const respuesta_esperada = true;
      const respuesta_recibida = leap_year.  leapYearInOneFunction  (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })
  
   test ('test que devuelve true si el año es divisible por 400',()=> {
      const year = 1600;
      const respuesta_esperada = true;
      const respuesta_recibida = leap_year.  leapYearInOneFunction  (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })

   test ('Test que devuelve false si el año es divisible por 100 pero no por 400',()=> {
      const year = 1800;
      const respuesta_esperada = false;
      const respuesta_recibida = leap_year.  leapYearInOneFunction  (year);
      expect (respuesta_recibida).toBe(respuesta_esperada);
   })

});