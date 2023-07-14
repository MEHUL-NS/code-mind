import express from "express";
import { displayProblem } from "../Controllers/userController.js";


const router = express.Router()


router.get('/displayProblem' , displayProblem)


export default router;
   