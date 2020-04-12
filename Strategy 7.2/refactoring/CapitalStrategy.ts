import RiskFactor from "./RiskFactor";
import UnusedRiskFactors from "./UnusedRiskFactors";
import Loan from "./Loan";
export default abstract class CapitalStrategy {
  private readonly MILLIS_PER_DAY: number = 86400000;
  private readonly DAYS_PER_YEAR: number = 365;
  /**
   * capital
   */
  public abstract capital(loan: Loan);

  public duration(loan: Loan) {
    return this.yearsTo(loan.getExpiry(), loan);
  }

  private yearsTo(endDate: Date, loan: Loan) {
    const beginDate =
      loan.getToday() === null ? loan.getStart() : loan.getToday();
    return (
      (endDate.getTime() - beginDate.getTime()) /
      this.MILLIS_PER_DAY /
      this.DAYS_PER_YEAR
    );
  }

  protected riskFactorFor(loan: Loan) {
    return RiskFactor.getFactors().forRating(loan.getRiskRating());
  }

  protected unusedRiskFactorFor(loan: Loan) {
    return UnusedRiskFactors.getFactors().forRating(loan.getRiskRating());
  }
}
