import { identifierModuleUrl } from '@angular/compiler'
import { BrokerDescription } from './broker-description';

export class Broker{
    id: string;
    description: BrokerDescription;
    brokerType: string;
    fk_propertyId: string

    constructor(id: string, description: BrokerDescription, brokerType: string, fk_propertyId: string){
        this.id = id;
        this.description = description;
        this.brokerType = brokerType;
        this.fk_propertyId = fk_propertyId;
    }
}