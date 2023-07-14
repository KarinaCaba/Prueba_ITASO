

let azucarV = [16,/*Alimento lácteo bebible con probióticos naturales sabor fresa*/
    7,/*Agua de fruta con jugo natural de naranja*/
    1,/*Agua saborizada o agua infusionada*/
    48,/*Bebida de té verde sabor pepino con miel*/
    21,/*Bebida de pulpa de mango*/
    27,/*Bebida carbonatada de cola*/
    24,/*Chocolate en polvo*/
    6,/*Queso petit suisse sabor fresa*/
    41,/*Yogurt bebible sabor fresa*/
    47,/*Bebida energética*/
    31,/*Bebida carbonatada sabor naranja*/
    30,/*Bebida carboatada sabor toronja*/
    42,/*Concentrado de horchata*/
    28,/*Concentrado de jamaica*/
    49,/*Néctar clarificado de manzana*/
    31,/*Néctar de piña*/
    45,/*Bebida carbonatada de cola*/
    25,/*Leche sabor chocolate*/
    33,/*Bebida a base de té negro sabor limón*/
    29,/*Bebida carbonatada sabor manzana*/
    0,/*Bebida carbonatada*/
    37,/*Bebida deportiva*/
    32,/*Bebida carbonatada sabor uva*/
    0,/*Polvo para preparar agua de sabor*/
    29,/*Bebida carbonatada sabor lima-limón*/
    9,/*Producto a base de leche fermentada con lactobacilos*/
    41,/*Yogurt bebible sabor fresa*/
    0,/*Ron*/
    17,/*Gin-tonic*/
    0,/*Brandy/Coñac*/
    0,/*Mezcal*/
    4,/*Tinto de mesa*/
    0,/*Whisky*/
    15,/*Paloma*/
    27,/*Mojito*/
    4,/*Michelada clásica*/
    19,/*Cuba*/
    78,/*Piña colada*/
    46,/*Margarita*/
    2,/*Pulque natural*/
    0,/*Martini seco*/
    3,/*Regular*/];

    let beveragesObj = [];

    for (let i = 0; i < azucarV.length; i++) {
        beveragesObj[i] = {
        imageSrc: `/assets/beverages/${i+1}.png`,
        sugar: azucarV[i],
        cont : 0
        };
    }

    export default beveragesObj;