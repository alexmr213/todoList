
export class Todo {
    public id?: any;
    public texto?: string;
    public completado?: boolean;


    constructor(texto: string, id?: any, completado?: boolean) {
        this.texto = texto;
        this.id = id ? id : Math.random();
        this.completado = completado ? completado : false;

    }
}

