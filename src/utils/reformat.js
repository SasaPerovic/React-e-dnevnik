/* eslint-disable */

// Dodaje '/' kosu crtu ispred url-a
export function reformatUrl(restOfUrl = '') {
  return '/'.concat(restOfUrl)
}
