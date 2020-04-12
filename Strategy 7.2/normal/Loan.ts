import RiskFactor from "./RiskFactor";
import UnusedRiskFactors from "./UnusedRiskFactors";

class Loan {
  private commitment: any;
  private outstanding: any;
  private expiry: any;
  private maturity: any;
  private today: any;
  private start: any;
  private readonly MILLIS_PER_DAY;
  private readonly DAYS_PER_YEAR: number;
  private riskRating: any;
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

  private unusedRiskAmount() {
    return this.commitment - this.outstanding;
  }
  private outstandingRiskAmount() {
    return this.outstanding;
  }
}
