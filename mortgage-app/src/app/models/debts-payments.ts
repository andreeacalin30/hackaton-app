export class DebtPayments{
    creditCard: number;
    carPayment: number;
    otherLoanExpenses: number;

    constructor(creditCard: number, carPayment: number, otherLoanExpenses: number){
        this.creditCard = creditCard;
        this.carPayment = carPayment;
        this.otherLoanExpenses = otherLoanExpenses;
    }
}