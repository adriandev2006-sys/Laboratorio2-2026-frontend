import { Component, inject, OnInit, signal } from '@angular/core';
import { AirplaneService } from '../service/airplane.service';
import { AirplaneTypeService } from '../service/airplaneType.service';
import { AirplaneType } from '../model/AirplaneType';
import { Airplane } from '../model/Airplane';

@Component({
  imports: [],
  selector: 'app-airplane-search',
  styleUrl: './airplane-search.css',
  templateUrl: './airplane-search.html',
})
export class AirplaneSearchComponent implements OnInit { 
  //OnInit es una interfaz que se implementa 
  // para indicar que la clase tiene un método 
  // ngOnInit, o sea, que se ejecuta cuando 
  // se inicializa el componente

  private readonly airplaneService = inject(AirplaneService);
  //Se inyecta el servicio de AirplaneService 
  // para poder usarlo en el componente

  private readonly typeService = inject(AirplaneTypeService);

//Estado del componente 
  airplaneTypes = signal<AirplaneType[]>([]); 
  selectedType =  signal<AirplaneType | null>(null);
  airplanes = signal<Airplane[] | null>(null); // null = todavía no se ha buscado
  

  //Una vez se ejecuta 
  ngOnInit(): void {

    //Le indica que llene la variable airplaneTypes con los datos que extrajo del servicio
    this.typeService.findAirplaneType().subscribe({
      next: types =>this.airplaneTypes.set(types), 
      error: err => console.error('Error cargando los tipos de aviones', err), 
    })
  }

  //Se ejecuta cuando la persona elige una opción del selector

  // Se ejecuta cuando la persona elige una opción del selector
  onTypeChange(value: string): void {
    // Si volvió a la parte inicial, se limpia todo
    if (value === '') {
      this.selectedType.set(null);
      this.airplanes.set(null);
      return;
    }

    //Sino, le asignamos los valores a las variables
    const typeId = Number(value); // Nota: el valor del select siempre llega como texto
    const type = this.airplaneTypes().find(t => t.typeId === typeId) ?? null; //Revisa si existe 
    this.selectedType.set(type); //Si existe, entonces lo guarda como el seleccionado
    this.airplanes.set(null); // limpia resultados anteriores mientras carga

    //Busca los aviones con ese tipo y los guarda en la variable airplanes
    this.airplaneService.findAirlineForType(typeId).subscribe({
      next: list => this.airplanes.set(list),
      error: err => console.error('Error cargando aeronaves', err),
    });
  }
}
