const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(data) {
  const FR = 0.693;
  if (typeof data !== 'string') return false;

  let tempData = parseFloat(data);
  if (isNaN(tempData)) return false;
  if (tempData > MODERN_ACTIVITY || tempData <= 0) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / tempData) / (FR / HALF_LIFE_PERIOD),
  );
};
