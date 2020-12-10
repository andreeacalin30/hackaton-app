import { ThrowStmt } from '@angular/compiler';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { NumberValueAccessor } from '@angular/forms';
import { PropertyType } from './property-enum';
import { Provinces } from './province-enum';
import { OwnershipType } from './ownership-enum'
import { DebtPayments } from './debts-payments';
import { OtherExpenses } from './other-expenses';

export class UniversalModel{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hasFinishedQuestioneer: boolean;
    phoneNumber: string;
    anualIncome: number;
    downPayment: number;
    debtPayments: DebtPayments
    otherExpenes: OtherExpenses;
    estimatedRemainingCash: number;
    otherHousingCosts: number;
    propertyType: PropertyType;
    nrOfBaths: string;
    nrOfRooms: string;
    desiredOwnershipType: OwnershipType;
    desiredAddresses: string[];
    generatedMaximumAffordability: number;
    mortgagePayment: number;
   

    constructor(id: string, firstName: string, lastName: string, email: string, password: string, hasFinishedQuestioneer: boolean, phoneNumber: string,
        annualIncome: number, downPayment: number, debtPayments:DebtPayments, otherExpenses: OtherExpenses, estimatedRemainingCash: number,
        propertyType: PropertyType, nrOfBaths: string, nrOfRooms: string, desiredOwnershipType: OwnershipType, desiredAddresses: string[],
         generatedMaximumAffordability: number, mortgagePayment: number, otherHousingCosts: number){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.hasFinishedQuestioneer = hasFinishedQuestioneer;
            this.phoneNumber = phoneNumber;
            this.anualIncome = annualIncome;
            this.downPayment = downPayment;
            this.debtPayments = debtPayments;
            this.otherExpenes = otherExpenses;
            this.otherHousingCosts = otherHousingCosts;
            this.propertyType = propertyType;
            this.nrOfBaths = nrOfBaths;
            this.nrOfRooms = nrOfRooms;
            this.desiredOwnershipType = desiredOwnershipType;
            this.desiredAddresses = desiredAddresses;
            this.generatedMaximumAffordability = generatedMaximumAffordability;
            this.mortgagePayment = mortgagePayment;
            this.otherHousingCosts = otherHousingCosts;
    }

    get getId(): string{
        return this.id;
    }

    get getFirstName(): string{
        return this.firstName
    }

    get getLastName(): string{
        return this.lastName
    }

    get getEmail(): string{
        return this.email;
    }

    get getPassword(): string{
        return this.password;
    }

    get getPhoneNumber(): string{
        return this.phoneNumber;
    }

    get getAnnualIncome(): number{
        return this.anualIncome;
    }

    get getPropertyType(): PropertyType{
        return this.propertyType;
    }

    get getNrOfBaths(): string{
        return this.nrOfBaths;
    }

}