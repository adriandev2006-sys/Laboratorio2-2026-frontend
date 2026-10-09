export class AirplaneType {
    typeId: number;
    identifier: string;
    description: string;

    constructor(typeId: number, identifier: string, description: string) {
        this.typeId = typeId;
        this.identifier = identifier;
        this.description = description;
    }
}