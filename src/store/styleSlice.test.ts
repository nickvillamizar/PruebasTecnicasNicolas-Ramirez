import styleReducer, { nextStyle } from './styleSlice';

describe('styleSlice', () => {
  it('debe cambiar de estilo cíclicamente', () => {
    const initial = { currentStyle: 0 };
    const state1 = styleReducer(initial, nextStyle());
    expect(state1.currentStyle).toBe(1);
    const state2 = styleReducer(state1, nextStyle());
    expect(state2.currentStyle).toBe(2);
    const state3 = styleReducer(state2, nextStyle());
    expect(state3.currentStyle).toBe(0);
  });
});
