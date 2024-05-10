import express from "express";
import cors from "cors"
import Connection from "./database/db.js"
import route from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors()); // it solves an error thrown by browser , it is because of frontend and backend running n different ports (frontend: 3000, backend: 8000)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

Connection();

app.use('/',route)

const PORT = 8000
app.listen(PORT , ()=>{
    console.log(`Server started at ${PORT}`)
})