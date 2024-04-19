import express from "express";

import {register,login, getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middleWares/auth.js";

const router = express.Router();

router.post("/new",register)

router.post("/login",login)

router.get("/logout",logout)


// router.get("/userID/:id",searchUser)

// router.put("/userID/:id",updUser)

// router.delete("/userID/:id",delUser)

router.get("/me",isAuthenticated,getMyProfile)



export default router