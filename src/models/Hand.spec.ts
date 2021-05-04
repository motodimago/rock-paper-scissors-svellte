import Hand from './Hand';

describe('Hand', () => {
  it('get current hand.', () => {
    const hand = new Hand();
    expect(hand.get()).toEqual('rock');
  });
  it('change hand.', () => {
    const hand = new Hand();
    hand.set('paper');
    expect(hand.get()).toEqual('paper');
  });
});
