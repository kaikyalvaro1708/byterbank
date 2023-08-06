let valor  = 3000;


// Arrays
const lista: number[] = [];
lista.push( 10, 22, 33, 100)

// Tipos personalizados
type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

// Enum
enum TipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}
const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}
