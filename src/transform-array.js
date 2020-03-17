module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw Error('Not Array');

  let controlSequences = {
    '--discard-next' : function(arr, i, transformArray) {
      if (i < arr.length - 1) i++;
      return [i, transformArray];
    },

    '--discard-prev' : function(arr, i, transformArray) {
      if (i) transformArray.pop();
      return [i, transformArray]
    },

    '--double-next' : function(arr, i, transformArray) {
      if (i < arr.length - 1) transformArray.push(arr[i+1]);
      return [i, transformArray]
    },

    '--double-prev' : function(arr, i, transformArray) {
      if (i) transformArray.push(arr[i-1]);
      return [i, transformArray]
    }
  }

  let transformArray = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] in controlSequences) {
      [i, transformArray] = controlSequences[arr[i]](arr, i, transformArray);
      continue;
    }
    transformArray.push(arr[i]);
  }

  return transformArray;
};
