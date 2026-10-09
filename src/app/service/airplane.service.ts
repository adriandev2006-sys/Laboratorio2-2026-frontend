import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Airline } from '../model/Airline';
import { Airplane } from '../model/Airplane';
import { environment } from '../../environment/environment';

//Nota: Siempre se debe poner el @service cuando es un servicio en angular
@Service()
export class AirplaneService {
    private apiUrl = `${environment.API_URL}/airplane/findAllForType`; //Me traigo la url de la api y le añado la palabra Airplane

     private readonly http = inject(HttpClient);

  
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