/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */
const isFlobbyBird = (isRed, isSpotted) => isRed && isSpotted;
const isBloggyBird = (isRed, isSpotted) => isRed && !isSpotted;
const isFlibbleBird = (isRed, isSpotted) => !isRed && isSpotted;
const isGlobbyBird = (isRed, isSpotted) => !isRed && !isSpotted;

const eatsWorms = (isRed, isSpotted) => isRed || isSpotted;
const eatsNuts = (isRed, isSpotted) => isRed || !isSpotted;
const eatsFish = (isRed, isSpotted) => !isRed || isSpotted;
const eatsMice = (isRed, isSpotted) => !isRed || !isSpotted;

const isRed = (s1) => {
  return s1=== 'Flobby' || s1 === 'Bloggy';
}
const isSpotted = (s1) => {
  return s1 === 'Flobby' || s1 === 'Flibble'
}
const isNotRed = (s1) => {
  return s1=== 'Flibble' || s1 === 'Globby'
}
const isNotSpotted =(s1) => {
  return s1 === 'Bloggy' || s1 === 'Globby'
}
/save