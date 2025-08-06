//para importar uma função 
//const p = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');
//para puxar apenas funções especificas podemos usar:
const { productType, getFullName, getProductLabel } = require('./services/products')

async function main() {
    console.log("Olá, meu nome é system");
    //usando função importada:
    //p.getFullName("408", "mousepad");
    //p.getFullName("108", "notebook");
    //usando a outra função exportada
    //p.getProductLabel("teclado");

    //importando funções especificas:
    console.log(productType);
    getFullName("00021" , "Monitor");
    getProductLabel("Teclado")

    //usando a constante importada
    console.log(config);

    //console.log(p.productType);
    database.connectToDatabase("escola");
    database.disconnectDatabase();
}

main();

