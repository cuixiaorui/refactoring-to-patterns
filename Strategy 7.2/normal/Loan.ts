import RiskFactor from "./RiskFactor";
import UnusedRiskFactors from "./UnusedRiskFactors";

class Loan {
  // 承诺金额
  private commitment: any;
  // 未偿贷款
  private outstanding: any;
  // 有效日
  private expiry: any;
  // 到期日
  private maturity: any;
  // 风险评级
  private riskRating: any;

  private today: Date;
  private start: Date;

  private readonly MILLIS_PER_DAY:number;
  private readonly DAYS_PER_YEAR: number;
  public capital() {
    if (this.expiry === null && this.maturity !== null) {
      return this.commitment * this.duration() * this.riskFactor();
    }

    if (this.expiry !== null && this.maturity === null) {
      if (this.getUnusedPercentage() !== 1) {
        return (
          this.commitment *
          this.getUnusedPercentage() *
          this.duration() *
          this.riskFactor()
        );
      } else {
        return (
          this.outstandingRiskAmount() * this.duration() * this.riskFactor() +
          this.unusedRiskAmount() * this.duration() * this.unusedRiskFactor()
        );
      }
    }
    return 0;
  }
  /**
   * 未用额度
   */
  getUnusedPercentage() {
    return 1;
  }

  public duration() {
    if (this.expiry === null && this.maturity !== null) {
      return this.weightedAverageDuration();
    } else if (this.expiry !== null && this.maturity === null) {
      return this.yearsTo(this.expiry);
    }
    return 0;
  }

  private yearsTo(endDate: Date) {
    const beginDate = this.today === null ? this.start : this.today;
    return (
      (endDate.getTime() - beginDate.getTime()) /
      this.MILLIS_PER_DAY /
      this.DAYS_PER_YEAR
    );
  }

  private riskFactor() {
    return RiskFactor.getFactors().forRating(this.riskRating);
  }

  private unusedRiskFactor() {
    return UnusedRiskFactors.getFactors().forRating(this.riskRating);
  }

  private weightedAverageDuration() {
    return 1;
  }

  /**
   * 未用风险金额
   */
  private unusedRiskAmount() {
    return this.commitment - this.outstanding;
  }
  /**
   * 未清风险金额
   */
  private outstandingRiskAmount() {
    return this.outstanding;
  }
}
