export const ALL_HandKind = ["rock", "paper", "scissors"] as const;
type handKindTuple = typeof ALL_HandKind;
export type HandKind = handKindTuple[number];

export default class Hand {
  private current: HandKind = "rock";

  constructor() {}

  get(): HandKind {
    return this.current;
  }

  set(hand: HandKind): void {
    this.current = hand;
  }
}
