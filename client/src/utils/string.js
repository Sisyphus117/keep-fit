export function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function simplifyTitle(str) {
  return str.split("- ")[0].split("(")[0].trim();
}
