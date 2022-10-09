import express, { Router } from "express"
import cors from "cors"
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import router from "./routes/Routes.js";
import Dotenv from "dotenv"
const app = express();
Dotenv.config()
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

const port = 8000 || process.env.PORT
app.listen(port, () => {
    console.log(`listening to the post :  ${port} `)
})
app.use("/", router)
// const url = "mongodb+srv://earthboxer:himanshukumaramb1234@blogweb.8rszd.mongodb.net/CRUDAPP?retryWrites=true&w=majority" // add your database link here 
Connection(url || process.env.MONGODB_URI);
