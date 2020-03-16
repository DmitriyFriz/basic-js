module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  for (let item of members) {
    if (typeof item == 'string') teamName.push(item.trim()[0].toUpperCase());
  }
  if (!teamName.length) return false;

  teamName.sort();
  return teamName.join('');
};
