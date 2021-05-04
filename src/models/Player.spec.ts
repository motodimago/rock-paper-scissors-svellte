import Player from "./Player";

describe("Player", () => {
  it("get hand.", () => {
    const player = new Player();
    expect(player.getHand()).toEqual("rock");
  });
  it("set hand.", () => {
    const player = new Player();
    player.setHand("scissors");
    expect(player.getHand()).toEqual("scissors");
  });
});
