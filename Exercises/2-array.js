'use strict';

const array = () => {
  const arr = [];
  function obj(i) {
    return arr[i];
  }
  obj.push = (val) => arr.push(val);
  obj.pop = () => arr.pop();
  return obj;
};

module.exports = { array };
