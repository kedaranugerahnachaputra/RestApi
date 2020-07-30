const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

app.post("/convert/binary", (req,res) => {
    let angka = Number(req.body.angka) 

    let decimal = parseInt(angka,2);
    let octal = parseInt(angka,2).toString(8);
    let hexa = parseInt(angka,2).toString(16);

    let response = {
        Binary : angka,
        Decimal : decimal,
        Octal : octal,
        Hexa : hexa

    }

    res.json(response)
})

app.post("/convert/decimal", (req,res) => {
    let angka = Number(req.body.angka) 

    let binary = angka.toString(2);
    let octal = angka.toString(8);
    let hexa = angka.toString(16);

    let response = {
        Decimal : angka,
        Binary : binary,
        Octal : octal,
        Hexa : hexa

    }

    res.json(response)
})

app.post("/convert/octal", (req,res) => {
    let angka = Number(req.body.angka) 

    let binary = parseInt(angka,8).toString(2);
    let decimal = parseInt(angka,8);
    let hexa = parseInt(angka,8).toString(16);

    let response = {
        Octal : angka,
        Binary : binary,
        Decimal : decimal,
        Hexa : hexa
    }

    res.json(response)
})

app.post("/convert/hexa", (req,res) => {
    let angka = Number(req.body.angka).toString(16); 

    let binary = parseInt(angka,16).toString(2);
    let decimal = parseInt(angka,16);
    let octal = parseInt(angka,16).toString(8);

    let response = {
        Hexa : angka,
        Binary : binary,
        Decimal : decimal,
        Octal : octal

    }

    res.json(response)
})


