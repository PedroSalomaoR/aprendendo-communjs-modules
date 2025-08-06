const devArea = {
    version: "01ab",
    production: true,
};

const client = {
    device : "web",
}

//quando é apenas uma constante exportada a estrutura é essa:
//module.exports = devArea

//quando é para exportar mais de uma constante a estrutura é essa:
module.exports = { devArea, client }