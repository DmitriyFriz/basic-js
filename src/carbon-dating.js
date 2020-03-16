const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let value = parseFloat(sampleActivity);
  if (! ('string' == typeof sampleActivity && value)) return false;
  if (sampleActivity <= 0 || sampleActivity > 15) return false;
  let k = 0.693  / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / value) / k);
};
