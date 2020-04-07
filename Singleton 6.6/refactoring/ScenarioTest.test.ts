import ConsoleSingleton from "./ConsoleSingleton";
import TestAlwaysHitResponse from "./TestAlwaysHitResponse";
import Blackjack from "./Blackjack";
describe("ScenarioTest", () => {
  test("test dealer stands when player busts", () => {
    ConsoleSingleton.setPlayerResponse(new TestAlwaysHitResponse());
    const deck = [10, 9, 7, 2, 6];
    const blackjack = new Blackjack(deck);
    blackjack.play();

    expect("dealer wins").toBeTruthy(blackjack.didDealerWin())
    expect("player loses").toBeTruthy(!blackjack.didPlayerWin())
    expect(11).toEqual(blackjack.getDealerTotal())
    expect(23).toEqual(blackjack.getPlayerTotal())
  });
});
