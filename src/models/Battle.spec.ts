import battle, { All_Battle_Result } from './Battle';

describe('Battle', () => {
  it('return draw hand is same.', () => {
    expect(battle('rock', 'rock')).toEqual('draw');
    expect(battle('paper', 'paper')).toEqual('draw');
    expect(battle('scissors', 'scissors')).toEqual('draw');
  });
  it('rock win to scissors and lose to paper.', () => {
    expect(battle('rock', 'scissors')).toEqual('win');
    expect(battle('rock', 'paper')).toEqual('lose');
  });
  it('paper win to rock and lose to scissors.', () => {
    expect(battle('paper', 'rock')).toEqual('win');
    expect(battle('paper', 'scissors')).toEqual('lose');
  });
  it('scissors win to paper and lose to rock.', () => {
    expect(battle('scissors', 'paper')).toEqual('win');
    expect(battle('scissors', 'rock')).toEqual('lose');
  });
});
