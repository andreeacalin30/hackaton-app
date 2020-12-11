import { identifierModuleUrl } from '@angular/compiler'
import { BrokerDescription } from './broker-description';

export class Broker{
    id: string;
    description: BrokerDescription;
    brokerType: string;
    fkPropertyId: string

    constructor(id: string, description: BrokerDescription, brokerType: string, fkPropertyId: string){
        this.id = id;
        this.description = description;
        this.brokerType = brokerType;
        this.fkPropertyId = fkPropertyId;
    }
}