module.exports = function repeater( str, options ) {

  function repeatStr (str, repeatTimes, separator) {
    let arr = []
    for (let i = 0 ; i < repeatTimes; i++) {
      arr.push(str);
    }
    return arr.join(separator);
  }

  str = String(str);
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let separator = options.separator === undefined ? '+' : options.separator;
  let additionRepeatTimes = options.additionRepeatTimes === undefined ?  1 : options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  if (!(options.addition === undefined)) {
    let addition = String(options.addition);
    str += repeatStr (addition, additionRepeatTimes, additionSeparator);
  }

  return repeatStr(str, repeatTimes, separator);
};


