import { reducer } from './spinner.reducer';

describe('Reducer: Spinner', () => {
  it('should have initial state of isOn false', () => {
    const expected = { isOn: false };
    const action = { type: 'foo' } as any;
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should have a isOn set to true', () => {
    const state = { isOn: false };
    const action = { type: 'startSpinner' };
    const expected = { isOn: true };
    expect(reducer(state, action)).toEqual(expected);
  });
});