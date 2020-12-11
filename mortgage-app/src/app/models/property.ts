import { Amenities } from './amenities';
import { PropertyType } from './property-enum';
import { Provinces } from './province-enum';

export class Property{
    id: string;
    location: Location;
    description: string;
    img: string[];
    price: number;
    area: number;
    bedrooms: number;
    washrooms: number;
    amenities: Amenities[];
    

    constructor(id: string, location: Location, description: string, img: string[], price: number, area: number, bedrooms: number,
                    washrooms:number, amenities: Amenities[]){
            this.id = id;
            this.location = location;
            this.description = description;
            this.img = img;
            this.price = price;
            this.area = area;
            this.bedrooms = bedrooms;
            this.washrooms = washrooms;
            this.amenities = amenities;
    }

    
}