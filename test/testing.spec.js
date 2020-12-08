const { expect } = require('chai');
const wrap = require('../wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('cannot be undefined', () => {
    expect(wrap('This is a test', 10)).to.not.equal(undefined);
  });
  it('less than 10', () => {
    const response = wrap('This is a longer test', 10);
    const arr = response.split('\n');
    const lengthGreaterThan10 = arr.filter((item) => item.length > 10).length;
    expect(lengthGreaterThan10).to.equal(0);
    //console.log(lengthGreaterThan10);
  });
});
