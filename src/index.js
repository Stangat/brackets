module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];

  const BRACKETS_PAIR = {
    [")"]: "(",
    ["}"]: "{",
    ["]"]: "[",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let currSymb = str[i];
    if (
      OPEN_BRACKETS.includes(currSymb) &&
      (stack[stack.length - 1] !== "|" || currSymb !== "|") &&
      (stack[stack.length - 1] !== "7" || currSymb !== "7") &&
      (stack[stack.length - 1] !== "8" || currSymb !== "8")
    ) {
      stack.push(currSymb);
    } else {
      let stackTopElement = stack[stack.length - 1];
      if (BRACKETS_PAIR[currSymb] === stackTopElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
