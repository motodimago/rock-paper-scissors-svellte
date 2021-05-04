import Hand, { HandKind, ALL_HandKind } from "./Hand";

export default class Enemy {
  private hand: Hand;

  constructor() {
    this.hand = new Hand();
  }
  getHand(): HandKind {
    return this.hand.get();
  }
  setHand(hand: HandKind): void {
    this.hand.set(hand);
  }
}
