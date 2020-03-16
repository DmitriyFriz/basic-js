module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.keys(date).length) throw new Error('Not Date');
  let season = date.getMonth();
  if (season < 2 || season == 11) return 'winter';
  if (season < 5) return 'spring';
  if (season < 8) return 'summer';
  if (season< 11) return 'autumn';
};
