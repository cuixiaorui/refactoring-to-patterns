import CapitalStrategy from "./CapitalStrategy";
import Loan from "./Loan";

export default class CapitalStrategyRevolver extends CapitalStrategy {
  public capital(loan: Loan) {
    return (
      loan.duration() *
      loan.getCommitment() *
      loan.getUnusedPercentage() *
      this.riskFactorFor(loan)
    );
  }
}
