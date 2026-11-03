import {Router} from "express"
import { getmecontroller, logincontroller, refreshcontroller, registercontroller } from "../controller/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router=Router();


//post method api /api/auth/register
//param req express req
//req.body= {email,name,password}
//res.status =201 if succesfull
router.post("/register",registercontroller)

router.post("/login",logincontroller)

router.post("/refresh",refreshcontroller)

router.get("/me",authenticate,getmecontroller)
export default router
