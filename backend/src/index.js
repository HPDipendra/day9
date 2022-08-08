import express from "express";
import connection from "./models/config.js"
import bookRoute from "./routes/bookRoutes.js"
import userRoute from "./routes/userRoutes.js"
import cors from "cors";
import passport from "passport";
import "../src/controller/auth.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


console.log("hello");



    
app.get("/", (req, res) => {
    res.end("routes")
})

// app.get("/auth/google",
//  passport.authenticate("google",{scope: ["profile","email"]}))

 

// app.get("/auth/google/callback",(req,res)=>{
// //   console.log(res);
// res.send('hello')
// })


app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(process.env.PORT, async () => {

    console.log(`the server is running in the port : ${process.env.PORT}`);

    try {
        await connection.authenticate();
        console.log("connection succesfully started");
        connection.sync(); 
    }
    catch (error) {
        console.log("erroer");
    }
})