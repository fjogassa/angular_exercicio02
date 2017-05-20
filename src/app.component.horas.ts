import { Component } from '@angular/core';
import { HoraImprimivel } from './horaimprimivel.model';
import { HoraService } from './hora.service';

@Component({
    selector: 'component-horas',
    template: `
      <p><em>{{horaImprimivel.horas}}</em></p>
    `
})
export class AppComponentHoras {
    horaImprimivel: HoraImprimivel;
    //data: Date;

    constructor(horaService: HoraService) {
        horaService.generateHoras(1000, horaImprimivel => this.horaImprimivel = horaImprimivel);
        //horaService.generateHoras(1000, data => this.data = data);
    }
}