import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AirplaneType } from '../model/AirplaneType';
import { environment } from '../../environment/environment';

@Injectable({ providedIn: 'root' })
export class AirplaneTypeService {
    private apiUrl = `${environment.API_URL}/airplaneType/findAll`; //Me traigo la url de la api y le añado la palabra AirplaneType para que me traiga la lista de tipos de aviones

     private readonly http = inject(HttpClient);
    //Metodo para buscar tipos de aviones por ID, identificador y descripción, devuelve un observable de tipo AirplaneType[]
    findAirplaneType(typeId: number = 0, identifier: string = "", description: string= ""): Observable<AirplaneType[]> {
        const params = new HttpParams()
            .set('typeId', typeId.toString()) //Solo se puede enviar un string, por eso convierto el number a string
            .set('identifier', identifier ?? '')
            .set('description', description ?? '');

            //indico que debe devolverme
        return this.http.get<AirplaneType[] | null>(this.apiUrl, { params }).pipe(
            map(response =>response ?? []));   
    }
}
