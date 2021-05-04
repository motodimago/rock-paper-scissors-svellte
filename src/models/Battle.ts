import type { HandKind } from './Hand';

export const All_Battle_Result = ['win', 'lose', 'draw'] as const;
type battleResultTuple = typeof All_Battle_Result;
export type BattleResultKind = battleResultTuple[number];

export default function battle(playerHand: HandKind, enemyHand: HandKind): BattleResultKind {
  if (playerHand == enemyHand) {
    return 'draw';
  }
  if (playerHand == 'rock') {
    return enemyHand == 'scissors' ? 'win' : 'lose';
  }
  if (playerHand == 'paper') {
    return enemyHand == 'rock' ? 'win' : 'lose';
  }
  if (playerHand == 'scissors') {
    return enemyHand == 'paper' ? 'win' : 'lose';
  }
}
