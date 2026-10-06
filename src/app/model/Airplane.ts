import { Airline } from "./Airline";
import { AirplaneType } from "./airplaneType";

export class Airplane{
    airplaneId: number;
    capacity: number; 
    type: AirplaneType;
    airline: Airline;

    constructor(airplaneId: number, capacity: number, type: AirplaneType, airline: Airline){
        this.airplaneId = airplaneId;
        this.capacity = capacity;
        this.type = type;
        this.airline = airline;
    }
}