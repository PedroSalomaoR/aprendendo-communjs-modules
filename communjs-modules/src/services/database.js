//EXPORT DEFAULT(já é criada sendo exportada)
// para torna-la async precisa dessa estrutura:
exports.connectToDatabase = async (dataName) => {
    console.log("Se conectando ao banco: " + dataName);
}

exports.disconnectDatabase = () => {
    //lógica
    console.log("Se desconectando...");
}

//ESTRUTURA DE FUNÇÕES NORMAIS:
//async function connectToDatabase(dataName) {
//    console.log("Se conectando ao banco: " + dataName );
//}



//async function disconnectDatabase() {
    //lógica
//    console.log("Desconectando..."); 
//}