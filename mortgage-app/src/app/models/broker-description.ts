import { BrokerMortgages } from "./broker-mortgages";

export class BrokerDescription{
    name: string;
    company: string;
    img: string;
    about: string;
    mortgages: BrokerMortgages[];

    constructor(name: string, company: string, img: string, about: string, mortgages: BrokerMortgages[]){
        this.name = name;
        this.company = company;
        this.img = img;
        this.about = about;
        this.mortgages = mortgages;
    }
}