const wrap = (line = '', maxLen = 0) => {
  if (line === '') {
    return '';
  }
  const arr = line.split(' ');
  const answer = [];
  let temp = '';
  while (arr.length > 0) {
    while (temp.length + arr[0].length + 2 < maxLen) {
      temp += `${arr.shift()} `;
      if (arr.length === 0) {
        break;
      }
    }
    answer.push(temp);
    temp = '';
  }

  return answer.join('\n');
};

console.log(wrap('this is a test how long can it gor couple words', 20));

module.exports = wrap;
