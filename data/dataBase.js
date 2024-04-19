import mongoose from "mongoose";


export const db = () => mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "Backend1",
    }).then(() => console.log("Database connected"))
    .catch((err) => {
        console.log(err)
    })