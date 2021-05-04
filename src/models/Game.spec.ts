import Game from "./Game";

describe("Game", () => {
  it("getEnemyHand.", () => {
    const game = new Game();
    jest.spyOn(global.Math, "random").mockReturnValue(0.7); // to create enemy hand to scissors
    game.play("rock"); // to generate enemy hand
    expect(game.getEnemyHand()).toEqual("scissors");
    jest.spyOn(global.Math, "random").mockRestore();
  });
});
