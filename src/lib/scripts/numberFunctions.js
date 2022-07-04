// @ts-nocheck
// takes in a number and puts in commas(,) in the appropriate positions.
// returns a string
function formatNum(num) {
  // return the params passed if it's less than 1000 or it is undefined
  if (num < 1000 || num == undefined) {
    return num;
  }
  // change number to string
  let currentVal = num.toString();
  let length = currentVal.length;
  let final = [];
  // split to an array of individual character
  currentVal = currentVal.split("");
  // for 1,000 - 9,999
  if (length == 4) {
    currentVal.forEach((val, index) => {
      if (index == 0) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 10,000 - 99,999
  else if (length == 5) {
    currentVal.forEach((val, index) => {
      if (index == 1) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 100,000 - 999,999
  else if (length == 6) {
    currentVal.forEach((val, index) => {
      if (index == 2) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 1,000,000 - 9,999,999
  else if (length == 7) {
    currentVal.forEach((val, index) => {
      if (index == 0 || index == 3) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 10,000,000 - 99,999,999
  else if (length == 8) {
    currentVal.forEach((val, index) => {
      if (index == 1 || index == 4) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 100,000,000 - 999,999,999
  else if (length == 9) {
    currentVal.forEach((val, index) => {
      if (index == 2 || index == 5) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 1,000,000,000 - 9,999,999,999
  else if (length == 10) {
    currentVal.forEach((val, index) => {
      if (index == 0 || index == 3 || index == 6) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 10,000,000,000 - 99,999,999,999
  else if (length == 11) {
    currentVal.forEach((val, index) => {
      if (index == 1 || index == 4 || index == 7) {
        val = val + ",";
      }
      final = [...final, val];
    });
  }
  // for 100,000,000,000 - 999,999,999,999
  else if (length == 12) {
    currentVal.forEach((val, index) => {
      if (index == 2 || index == 5 || index == 8) {
        val = val + ",";
      }
      final = [...final, val];
    });
  } else {
    return num;
  }
  // return the new value as a string
  return final.join("");
}
function formatNumCurrency(num) {
  num = parseInt(num);
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "XAF",
  });
}
export default {
  formatNum,
  formatNumCurrency,
};
