export const isoToLocale = function (isoString) {
  return new Date(isoString).toLocaleDateString();
};
/**
 * compare whether two dates are in the same date
 * @param {Date | string} date1
 * @param {Date | string} date2
 * @returns {boolean} if so, return true
 */
export const inSameDate = function (date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

/**
 * whether date1 is after date2
 * @param {Date | string} date1
 * @param {Date | string} date2
 * @returns {boolean} whether date1 is after date2
 */
export function isAfter(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 >= d2;
}
