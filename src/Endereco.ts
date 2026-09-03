export default class Endereco{
    public estado: string;
    public cidade: string;
    public rua: string;
    public numero: number;
    
    constructor(estado: string, cidade: string, rua: string, numero: number){
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero
    }
}