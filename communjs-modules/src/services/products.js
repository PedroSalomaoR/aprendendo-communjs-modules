const productType = {
    version: "Digital",
    tax: "x1",
}

async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " === " + productName);
    await doBreakLine();
}

//o nome dessa função é hidden member(membro escondido), pois ela não é exportada para a main
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("Product: " + productName)
}

//para exportar função
module.exports = {
    getFullName,
    //exportando mais de uma função
    getProductLabel,
    productType,
};