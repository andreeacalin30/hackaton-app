import { NumberValueAccessor } from '@angular/forms';

export class OtherExpenses{
    propertyTax: number;
    condoFees: number;
    heatingCosts: number;

    constructor(propertyTax: number, condoFees: number, heatingCosts: number){
        this.propertyTax = propertyTax;
        this.condoFees = condoFees;
        this.heatingCosts = heatingCosts; 
    }
}