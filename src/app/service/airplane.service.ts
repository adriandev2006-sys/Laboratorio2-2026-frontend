import { HttpClient, HttpParams } from '@angular/common/http';
import { Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Airline } from '../model/Airline';
import { AirplaneType } from '../model/airplaneType';
import { Airplane } from '../model/Airplane';
import { environment } from '../../environment/environment';

//Nota: Siempre se debe poner el @service cuando es un servicio en angular
@Service()
export class AirplaneService {
    private apiUrl = `${environment.API_URL}Airplane`; //Me traigo la url de la api y le añado la palabra Airplane

    //Constructor con el HttpCliente
    constructor(private http: HttpClient) { 
    }

  
    findAirlineForType(idType: number)/* Aquí va lo que mando*/: Observable<Airplane[]> {
        const params = new HttpParams()
            .set('idType', idType.toString());
        return this.http.get<any[] | null>(this.apiUrl, { params }).pipe(
        map(response => (response ?? []).map(a =>
            new Airplane(a.airplaneId, a.capacity, a.type, a.airline) 
            //Aquí se mapea la respuesta de la api 
            //a un objeto de tipo Airplane

        ))
);
    }
}