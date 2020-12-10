import { PropertyType } from './property-enum';
import { Provinces } from './province-enum';

export class Property{
    id: string;
    province: Provinces;
    city: string;
    street: string;
    streetNumber: string;
    postalCode: string;
    nrOfBaths: number;
    propertyType: PropertyType;
    sqFeet: number;
    price: number;

    constructor(id: string, province: Provinces, city: string, street: string, streetNumber: string, postalCode: string,
        nrOfBaths: number, propertyType: PropertyType, sqFeet: number, price: number){
            this.id = id;
            this.province = province;
            this.city = city;
            this.street = street;
            this.streetNumber = streetNumber;
            this.postalCode = postalCode;
            this.nrOfBaths = nrOfBaths;
            this.propertyType = propertyType;
            this.sqFeet = sqFeet;
            this.price = price;
    }

    
}