import CapitalStrategy from "./CapitalStrategy";
import Loan from "./Loan";

export default class CapitalStrategyAdvisedLine extends CapitalStrategy {
  public capital(loan: Loan) {
    return (
      loan.outstandingRiskAmount() *
        loan.duration() *
        this.riskFactorFor(loan) +
      loan.unusedRiskAmount() * loan.duration() * this.unusedRiskFactorFor(loan)
    );
  }
}
