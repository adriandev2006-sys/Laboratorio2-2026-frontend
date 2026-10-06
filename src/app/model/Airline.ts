import { Airplane } from "./Airplane";

export class Airline{
    airlineId: number; 
    iata: string;
    airlineName: string;
    baseAirport: number;
    airplanes: Airplane[];

    constructor(airlineId: number, iata: string, airlineName: string, baseAirport: number){
        this.airlineId = airlineId;
        this.iata = iata;
        this.airlineName = airlineName;
        this.baseAirport = baseAirport;
        this.airplanes = [];
    }
}