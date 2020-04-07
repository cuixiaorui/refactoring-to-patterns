import HitStayResponse from "./HitStayResponse";

export default class Blackjack {
  private player: any;
  private dealer: any;

  private hitStayResponse = new HitStayResponse();
  public obtainHitStayResponse(input?) {
    this.hitStayResponse.readFrom(input);
    return this.hitStayResponse;
  }

  public setPlayerResponse(newHitStayResponse) {
    this.hitStayResponse = newHitStayResponse;
  }

  constructor(params) {}

  public play() {
    this.deal();

    this.writeln(this.player.getHandAsString());
    this.writeln(this.dealer.getHandAsStringWithFirstCardDown());

    let hitStayResponse;

    do {
      this.write("H)it or S)stay:");
      hitStayResponse = this.obtainHitStayResponse();
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
