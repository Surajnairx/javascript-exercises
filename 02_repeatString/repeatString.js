const repeatString = function (str, count) {
  if (count >= 0) {
    let string = "";
    for (let i = 0; i < count; i++) {
      string = string + str;
    }
    return string;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
