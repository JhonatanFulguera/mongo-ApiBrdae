import express from "express"
import { response } from "express";
import mongoose from "mongoose";

import chalk from "chalk"

//API Router
import productsRouter from "./routes/products.js"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//conectarse a la base de datos de MongoDB
mongoose.connect("mongodb://localhost/api-Javi",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    //.then(response => console.log(response));
    .then(() => console.log(chalk.bgHex('#DEADED').underline('Connected to MongoDB')));
    //.then(() => console.log(chalk.bgRgb(15, 70, 204).inverse('Connected to MongoDB!')))

app.use("/api/products", productsRouter);

const PORT = 3000;
app.listen(PORT, ()=> console.log(chalk.yellowBright(`Server running in ${PORT} port`)));

