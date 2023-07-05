export class ContaBancaria{
    nomeConta: String;
    numeroConta: String;
    saldo: number;

    constructor(nomeConta: String, numeroConta: String){
        this.nomeConta = nomeConta;
        this.numeroConta = numeroConta;
        this.saldo = 0;
    };

    deposito(valor: number): void{
        if (valor > 0){
            this.saldo += valor;
            console.log("O valor de R$" + valor + " foi depositado!");
        } else {
            console.log("O valor depositado há de ser maior que zero!");
        }
    }

    saque(valor: number): void{
        if (valor <= this.saldo){
            this.saldo -= valor;
            console.log("O valor de R$" + valor + " foi retirado!");
        } else {
            console.log("O valor retirado há de ser menor que o saldo!");
        }
    }

    extrato():void{
        console.log("O seu saldo é de: R$" + this.saldo);
    }

};


