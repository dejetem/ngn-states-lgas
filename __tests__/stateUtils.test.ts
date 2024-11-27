import { getStates, getLgas } from '../src';
import * as fs from 'fs';

// Mock the data import
jest.mock('../src/data.json', () => {
  return {
    "Federal Capital Territory": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
    "Lagos": ["Agege", "Alimosho", "Ikeja", "Surulere"]
  };
});

// Tests for getStates
describe('getStates', () => {
  it('should return all state names', () => {
    const states = getStates();
    expect(states).toEqual(["Federal Capital Territory", "Lagos"]);
  });
});

// Tests for getLgas
describe('getLgas', () => {
  it('should return correct LGAs for a valid state', () => {
    const lgas = getLgas('fct');
    expect(lgas).toEqual(["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]);
  });

  it('should return correct LGAs for a valid state with mixed case input', () => {
    const lgas = getLgas('Federal Capital Territory');
    expect(lgas).toEqual(["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]);
  });

  it('should return correct LGAs for another valid state', () => {
    const lgas = getLgas('lagos');
    expect(lgas).toEqual(["Agege", "Alimosho", "Ikeja", "Surulere"]);
  });

  it('should throw an error for a non-existent state', () => {
    expect(() => getLgas('UnknownState')).toThrow('State "UnknownState" not found.');
  });

  it('should throw an error for invalid input', () => {
    expect(() => getLgas('1234')).toThrow('State "1234" not found.');
  });
});
