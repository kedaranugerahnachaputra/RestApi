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
app.post("/bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)

    let bmi = berat / (tinggi ** 2)
    let status 
    if (bmi >= 30){
        status = "Kegemukan(Obesitas)";
    }
    else if (bmi < 30 && bmi >= 25){
        status = "Kelebihan Berat Badan";
    }
    else if (bmi < 25 && bmi >= 18.5){
        status = "Normal";
    }
    else {
        status = "Kekurangan Berat Badan";
    }

    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }
    res.json(response)
})