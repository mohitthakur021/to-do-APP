import { app } from "./app.js";

import { db } from "./data/dataBase.js";

db();

app.listen(process.env.PORT,() => {
    console.log(`server is working on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
});