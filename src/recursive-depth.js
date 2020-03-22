module.exports = class DepthCalculator {
    constructor() {
      this.i = 0;
    }

    calculateDepth(arr) {
      this.i++;
      this.x = false;
      arr = arr.reduce( (level, el) => {
          if(Array.isArray(el)) {
          level.push(...el);
          this.x = true;
          }
          return level;
      }, []);
      if (this.x) return this.calculateDepth(arr);
      let result = this.i ;
      this.i = 0;
      return result;
    }
};
