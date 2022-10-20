const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/generate-segitiga', (req, res) => {
    const angka = req.body.angka;
    if(isNaN(angka)){
        res.status(500).send({
            message: 'input tidak valid'
        })
    }
    let result = "";
    for(let i=0; i<angka.length; i++){
        let zero = 0;
        for(let j=i; j<=i; j++){
            result += angka[j];
            for(let z=0; z<=i; z++) {
                result += "0";
            }
        }
        result += result.length === 0? "" : "<br/>";
    }
    res.status(200).send({
        result: result
    })
})

app.post('/generate-ganjil', (req, res) => {
    const angka = req.body.angka;
    if(isNaN(angka)){
        res.status(500).send({
            message: 'input tidak valid'
        })
    }
    let angkaInt = parseInt(angka);
    let listGanjil = [];
    for(let i=0; i<angkaInt; i++){
        if(i%2 === 1) listGanjil.push(i);
    }
    let indexRandom = parseInt(Math.random() * listGanjil.length);
    let result = `Bilangan ganjil random limit (${angka}) = ${listGanjil[indexRandom]}`;
    res.status(200).send({
        result: result
    })
})

app.post('/generate-prima', (req, res) => {
    const angka = req.body.angka;
    if(isNaN(angka)){
        res.status(500).send({
            message: 'input tidak valid'
        })
    }
    let angkaInt = parseInt(angka);
    let listPrima = [];
    for(let i=1; i<angkaInt; i++){
        let checkBagi = 0;
        let prima = i;
        for(let x=1; x<angkaInt; x++) {
            if(prima % x === 0) {
                checkBagi++;
            }
            if(checkBagi <= 2){
                listPrima.push(prima);
            }
        }
    }
    let indexRandom = parseInt(Math.random() * listPrima.length);
    let result = `Bilangan prima random limit (${angka}) = ${listPrima[indexRandom]}`;
    res.status(200).send({
        result: result
    })
})

// app.get('/generate-segitiga', (req, res) => {
//     res.status(200);
//     res.send('testing listen server')
// })

app.listen(5000, () => {
    console.log("Server is running")
})