import { HoraImprimivel } from './horaimprimivel.model';

export class HoraService {    
                      
    private getMoveRelogio(): HoraImprimivel {
        const momentoAtual = new Date();
        const shora = momentoAtual.getHours(); 
        const minuto = momentoAtual.getMinutes();
        const segundo = momentoAtual.getSeconds();
        
        let horaExtenso: HoraImprimivel = {horas: ''};

        horaExtenso.horas = shora + " : " + minuto + " : " + segundo;

        return horaExtenso;
    }    

    /*
    private getMoveRelogio(): Date {
        return new Date();         
    } 
    */   

    generateHoras(delay: number, callback: (horaImprimivel: HoraImprimivel) => void) {
        callback(this.getMoveRelogio());
        setInterval(() => callback(this.getMoveRelogio()), delay);
    }
}