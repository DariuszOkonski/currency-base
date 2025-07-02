import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN if input is not a number type', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-543')).toBeNaN();
    expect(convertPLNToUSD('hello')).toBeNaN();
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD({})).toBeNaN();
    expect(convertPLNToUSD(undefined)).toBeNaN();
    expect(convertPLNToUSD(null)).toBeNaN();
    expect(convertPLNToUSD(true)).toBeNaN();
  });
});
