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

// end point pertama
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi)

    let volume = sisi ** 3
    let lp = 6 * (sisi ** 2)

    let response = {
        sisi: sisi,
        volume: volume,
        lp: lp
    }
    res.json(response)
})

// end point kedua
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let lp = (2*panjang*lebar)+(2*panjang*tinggi)+(2*tinggi*lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        lp: lp
    }
    res.json(response)
})

// end point ketiga
app.post("/bola", (req,res) => {
    let r = Number(req.body.r)

    let volume = 4/3 * 3.14 * (r ** 3)
    let lp = 4 * 3.14 * (r**2)

    let response = {
        r: r,
        volume: volume,
        lp: lp
    }
    res.json(response)
})

// end point keempat
app.post("/tabung", (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let phi = 3.14

    let volume = phi * r ** 2 * t
    let lp = 2 * phi * r * (r+t)

    let response = {
        r: r,
        t: t,
        volume: volume,
        lp: lp
    }
    res.json(response)
})