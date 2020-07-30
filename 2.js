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

// ep c
app.get("/convert/celcius/:suhu", (req,res) => {

    let celcius = Number(req.params.suhu) 
    let reamur = (4/5) * celcius
    let fahrenheit = (9/5)*celcius + 32 
    let kelvin = celcius + 273

    let response = {
        celcius: celcius,
        "Hasil": {
            reamur : reamur,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }
    res.json(response)

})

//ep r
app.get("/convert/reamur/:suhu", (req,res) => {

    let reamur = Number(req.params.suhu)
    let celcius = ((5/4) * reamur)
    let fahrenheit = (9/4) * reamur + 32
    let kelvin = (5/4) * reamur + 273

    let response = {
        reamur : reamur,
        
        "Hasil": {
            celcius: celcius,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }

    res.json(response)

})

//ep k
app.get("/convert/kelvin/:suhu", (req,res) => {

    let kelvin = Number(req.params.suhu) 
    let celcius = kelvin-273
    let reamur = ((4/5) * (kelvin-273.15)).toFixed(2)
    let fahrenheit = ((9/5) * (kelvin-273.15) + 32).toFixed(2)

    let response = {
        kelvin : kelvin,
        
        "Hasil": {
            celcius: celcius,
            fahrenheit : fahrenheit,
            reamur : reamur

        }
    }

    res.json(response)

})

//ep f
app.get("/convert/fahrenheit/:suhu", (req,res) => {
 
    let fahrenheit = Number(req.params.suhu)
    let celcius = 5/9 * (fahrenheit-32)
    let reamur = (4/5) * (fahrenheit-32)
    let kelvin = 5/9 * (fahrenheit-32) + 273

    let response = {
        fahrenheit : fahrenheit,
        
        "Hasil": {
            celcius: celcius,
            reamur : reamur,
            kelvin : kelvin
        }
    }
    res.json(response)

})


