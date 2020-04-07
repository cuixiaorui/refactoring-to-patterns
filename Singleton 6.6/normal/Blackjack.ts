import ConsoleSingleton from "./ConsoleSingleton";
import HitStayResponse from "./HitStayResponse";

export default class Blackjack {
  private player: any;
  private dealer: any;

  constructor(params) {
      
  }

  public play() {
    this.deal();

    this.writeln(this.player.getHandAsString());
    this.writeln(this.dealer.getHandAsStringWithFirstCardDown());

    let hitStayResponse;

    do {
      this.write("H)it or S)stay:");
      hitStayResponse = ConsoleSingleton.obtainHitStayResponse();
      this.write(hitStayResponse.toString());
      if (hitStayResponse.shouldHit()) {
        this.dealCardTo(this.player);
        this.writeln(this.dealer.getHandAsStringWithFirstCardDown());
      }
    } while (this.canPlayerHit(hitStayResponse));
  }

  private dealCardTo(object: any) {}
  private deal() {}
  private writeln(object: any) {}
  private write(str: string) {}
  private canPlayerHit(hitStayResponse: HitStayResponse) {
    return true;
  }
}
