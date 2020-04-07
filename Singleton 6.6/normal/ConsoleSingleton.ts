import HitStayResponse from "./HitStayResponse";

export default class ConsoleSingleton {
  private static hitStayResponse = new HitStayResponse();

  public static obtainHitStayResponse(input?) {
    this.hitStayResponse.readFrom(input);
    return this.hitStayResponse;
  }

  public static setPlayerResponse(newHitStayResponse) {
    this.hitStayResponse = newHitStayResponse;
  }
}
