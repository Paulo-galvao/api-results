import e from "express";
import resultControllers from "../controllers/result.controllers.js"

const { postResult, getAllResults, getByDate } = resultControllers;

const router = e.Router();

router.post("/", postResult);
router.get("/", getAllResults);
router.get("/byDate", getByDate);

export default router; 