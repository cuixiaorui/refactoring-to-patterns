import CapitalStrategy from "./CapitalStrategy";
import CapitalStrategyTermLoan from "./CapitalStrategyTermLoan";
import CapitalStrategyAdvisedLine from "./CapitalStrategyAdvisedLine";

export default class Loan {
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
  private capitalStrategy: CapitalStrategy;

  public static newTermLoan(commitment, start, maturity, riskRating) {
    return new Loan(
      commitment,
      commitment,
      start,
      null,
      maturity,
      riskRating,
      new CapitalStrategyTermLoan()
    );
  }

  public static newRevolver(commitment, start, expiry, riskRating) {
    return new Loan(
      commitment,
      0,
      start,
      expiry,
      null,
      riskRating,
      new CapitalStrategyAdvisedLine()
    );
  }

  public static newAdvisedLine(commitment, start, expiry, riskRating) {
    if (riskRating > 3) return null;

    const advisedLine = new Loan(
      commitment,
      0,
      start,
      expiry,
      null,
      riskRating,
      new CapitalStrategyAdvisedLine()
    );

    advisedLine.setUnusedPercentage(0.1);
    return advisedLine;
  }

  private constructor(
    commitment,
    outstanding,
    start,
    expiry,
    maturity,
    riskRating,
    capitalStrategy
  ) {
    this.commitment = commitment;
    this.outstanding = outstanding;
    this.start = start;
    this.expiry = expiry;
    this.maturity = maturity;
    this.riskRating = riskRating;
    this.capitalStrategy = capitalStrategy;
  }

  public capital() {
    return this.capitalStrategy.capital(this);
  }

  public duration() {
    return this.capitalStrategy.duration(this);
  }

  /**
   * 未用额度
   */
  public getUnusedPercentage() {
    return 1;
  }

  public setUnusedPercentage(val) {}

  /**
   * 未用风险金额
   */
  public unusedRiskAmount() {
    return this.commitment - this.outstanding;
  }
  /**
   * 未清风险金额
   */
  public outstandingRiskAmount() {
    return this.outstanding;
  }

  /**
   * getExpiry
   *
   */
  public getExpiry() {
    return this.expiry;
  }

  public getMaturity() {
    return this.maturity;
  }
  public getCommitment() {
    return this.commitment;
  }

  public getRiskRating(): any {
    return this.riskRating;
  }

  public getStart() {
    return this.start;
  }
  public getToday() {
    return this.today;
  }
}
