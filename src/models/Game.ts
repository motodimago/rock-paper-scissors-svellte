import battle, { BattleResultKind } from './Battle';
import { ALL_HandKind, HandKind } from './Hand';
import Player from './Player';

export default class Game {
  private player: Player;
  private enemy: Player;

  constructor() {
    this.player = new Player();
    this.enemy = new Player();
  }

  getEnemyHand(): HandKind {
    return this.enemy.getHand();
  }

  play(playerHand: HandKind): BattleResultKind {
    this.player.setHand(playerHand);
    this.enemy.setHand(this.nextHand());
    return battle(this.player.getHand(), this.enemy.getHand());
  }

  private nextHand(): HandKind {
    const kindIndex = Math.floor(Math.random() * ALL_HandKind.length);
    const newHand = ALL_HandKind[kindIndex];
    return newHand;
  }
}
