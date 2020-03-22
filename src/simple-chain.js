const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if ((value === undefined)) {
      this.arr.push('()') ;
    } else this.arr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error('Error');
    }
    this.arr.splice(position-1, 1)
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    return `( ${(this.arr.splice(0, this.arr.length)).join(' )~~( ')} )`
  },

};

module.exports = chainMaker;
