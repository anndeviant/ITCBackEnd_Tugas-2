require("dotenv").config();

//Ambil module express
const express = require("express");
const app = express();
const association = require("./utility/assoc_db");

//Mengambil file router yaitu handler.js dan jalanin routernya
const userRouter = require("./routes/handler");
app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT;

association()
    .then(() => {
        app.listen(PORT, () => {
            console.log('server is running on port 5000');
        })
    })
    .catch(err => {
        console.log(err.message);
    })

//Mengambil Port
// console.log(PORT);
// app.listen(PORT, () => {
//     console.log(`Server Running on PORT: ${PORT}`);
// });