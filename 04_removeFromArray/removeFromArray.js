const removeFromArray = function (arr, ...items) {
  let returnArray = [];
  arr.forEach((item) => {
    if (!items.includes(item)) returnArray.push(item);
  });
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
