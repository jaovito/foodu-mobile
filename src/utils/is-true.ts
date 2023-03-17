/**
 *
 * Convert booleans values, considering the cases that I understand how true and false.
 * Exemple: Empty arrays and objects, we consider false.
 *
 * @param  param - Can be any value
 *
 * @returns if `value` it isn't an empty array, returns true
 * @returns if `value` it isn't an empty object, returns true
 * @returns if `value` it isn't an empty string, returns true
 * @returns if `value` it isn't null, returns true
 * @returns if `value` it's a non-zero number, returns true
 */
export const isTrue = (param: any): boolean => {
  if (typeof param === 'object') {
    if (param === null) {
      return false;
    } else if (param instanceof Array) {
      return param.length === 0 ? false : true;
    } else {
      return Object.entries(param).length === 0 ? false : true;
    }
  }

  return !!param;
};
