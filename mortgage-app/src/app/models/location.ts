export class Location{
    province: string;
    city: string;
    street: string;

    constructor(province:string, city: string, street: string){
        this.province = province;
        this.city = city;
        this.street = street;
    }
}