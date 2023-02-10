const express= require ("express")
const cors = require("cors")

const app=express()

var corsOptions = {
    origin: "https://localhost:4200"
}


//middleware
app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extend:false}))


//routes

const router= require ("./routes/clientRouter")

app.use("/api/clients", router)


//testing api

app.get("/", (req, res)=>{
    res.json({message: "Hello from api"})
})

//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})