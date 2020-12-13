export class UserAffordabilityDTO{
    userId: string;
    annualIncome: number;
    monthlyHousingCosts: number;
    monthlyDebtPayments: number;
    generatedMaximumAffordability: number;
    mortgagePayment: number;
    estimatedRemainingCash: number;

    constructor(userId: string, annualIncome: number, monthlyHousingCosts: number, monthlyDebtPayments: number, generatedMaximumAffordability: number,
                mortgagePayment: number, estimatedRemainingCash: number){
            this.userId = userId;
            this.annualIncome = annualIncome;
            this.monthlyHousingCosts = monthlyHousingCosts;
            this.monthlyDebtPayments = monthlyDebtPayments;
            this.generatedMaximumAffordability = generatedMaximumAffordability;
            this.mortgagePayment = mortgagePayment;
            this.estimatedRemainingCash = estimatedRemainingCash;
    }
}