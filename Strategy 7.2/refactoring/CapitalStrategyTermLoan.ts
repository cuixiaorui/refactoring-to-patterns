import CapitalStrategy from "./CapitalStrategy";
import Loan from "./Loan";

export default class CapitalStrategyTermLoan extends CapitalStrategy {
  public capital(loan: Loan) {
    return loan.getCommitment() * loan.duration() * this.riskFactorFor(loan);
  }

  public duration(loan: Loan){
      return this.weightedAverageDuration();
  }

  private weightedAverageDuration() {
    return 1;
  }
}
