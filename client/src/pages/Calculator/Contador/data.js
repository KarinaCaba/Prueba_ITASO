// import img1 from "./images/1.jpg";
// import img2 from "./images/2.jpg";
// import img3 from "./images/3.jpg";
// import img4 from "./images/4.jpg";
// import img5 from "./images/5.jpg";
// import img6 from "./images/6.jpg";
// import img7 from "./images/7.jpg";
// import img8 from "./images/8.jpg";
// import img9 from "./images/9.jpg";
// import img10 from "./images/10.jpg";
// import img11 from "./images/11.jpg";
// import img12 from "./images/12.jpg";
// import img13 from "./images/13.jpg";
// import img14 from "./images/14.jpg";
// import img15 from "./images/15.jpg";
// import img16 from "./images/16.jpg";
// import img17 from "./images/17.jpg";
// import img18 from "./images/18.jpg";
// import img19 from "./images/19.jpg";
// import img20 from "./images/20.jpg";
// import img21 from "./images/21.jpg";
// import img22 from "./images/22.jpg";
// import img23 from "./images/23.jpg";
// import img24 from "./images/24.jpg";
// import img25 from "./images/25.jpg";
// import img26 from "./images/26.jpg";
// import img27 from "./images/27.jpg";
// import img28 from "./images/28.jpg";
// import img29 from "./images/29.jpg";
// import img30 from "./images/30.jpg";
// import img31 from "./images/31.jpg";
// import img32 from "./images/32.jpg";
// import img33 from "./images/33.jpg";
// import img34 from "./images/34.jpg";
// import img35 from "./images/35.jpg";
// import img36 from "./images/36.jpg";
// import img37 from "./images/37.jpg";
// import img38 from "./images/38.jpg";
// import img39 from "./images/39.jpg";
// import img40 from "./images/40.jpg";
// import img41 from "./images/41.jpg";
// import img42 from "./images/42.jpg";

// let images =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,
//     img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,
//     ]

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
        sugarValue: azucarV[i]
        };
    }

    export default beveragesObj;