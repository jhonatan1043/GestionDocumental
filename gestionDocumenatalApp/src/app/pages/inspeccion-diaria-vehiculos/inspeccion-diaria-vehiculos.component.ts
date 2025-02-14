import { Component } from '@angular/core';
import { FormBaseComponent } from '../../components/form-base/form-base.component';

@Component({
  selector: 'app-inspeccion-diaria-vehiculos',
  standalone: true,
  imports: [FormBaseComponent],
  templateUrl: './inspeccion-diaria-vehiculos.component.html',
  styleUrl: './inspeccion-diaria-vehiculos.component.css'
})
export class InspeccionDiariaVehiculosComponent {

  protected readonly fields: any = {
    "nombre": "Inspección Diaria de Vehículos",
    "campos": [
      {
        "nombre": "fecha",
        "tipo": "date",
        "etiqueta": "Fecha",
        "requerido": true
      },
      {
        "nombre": "vehiculo",
        "tipo": "text",
        "etiqueta": "Vehículo",
        "requerido": true
      },
      {
        "nombre": "modelo",
        "tipo": "text",
        "etiqueta": "Modelo",
        "requerido": true
      },
      {
        "nombre": "placa",
        "tipo": "text",
        "etiqueta": "Placa",
        "requerido": true
      },
      {
        "nombre": "kilometraje",
        "tipo": "number",
        "etiqueta": "Kilometraje",
        "requerido": true
      },
      {
        "nombre": "conductores",
        "tipo": "array",
        "etiqueta": "Conductores",
        "requerido": true,
        "campos": [
          {
            "nombre": "nombre",
            "tipo": "text",
            "etiqueta": "Nombre",
            "requerido": true
          },
          {
            "nombre": "turno",
            "tipo": "text",
            "etiqueta": "Turno",
            "requerido": true
          }
        ]
      }
    ]
  }

}
