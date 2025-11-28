/**
 * capitalize the first letter of a word
 * @param {string} str origin string
 * @returns {string}
 */
export function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * simplify a title by removing it's description part, for example,
 * content after a "-" or "("
 * @param {string} str
 * @returns {string}
 */
export function simplifyTitle(str) {
  return str.split("- ")[0].split("(")[0].trim();
}
