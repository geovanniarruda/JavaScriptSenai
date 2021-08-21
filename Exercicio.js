let listaPecas = ["Filtro do Ar", "Motor", "Amortecedor"]

//Inicio conferencia numero do cadastro de peças
if (listaPecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não existe mais espaço nessa lista, impossível cadastrar");
}
//Fim da conferencia do cadastro de peças



//inicio teste do peso das peças
let peso  = 90;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}
//Fim do teste de peso das peças



// Inicio da Conferencia do numero de caracteres dos nomes das peças
let nomePeca = "Parafuso";


if (nomePeca.length > 3) {
    console.log("Nome da peça está adequada para o cadastro!!")
} else if(nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}
//Fim da conferencia do numero de caracteres das peças



//Inicio da conferencia de caracteres usando metodo Switch
switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")    
    
    default:
        console.log("O nome está adequado para o cadastro!!")
        break;
}
//Fim da conferencia pelo método Switch