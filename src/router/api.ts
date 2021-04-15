import { Router } from "express";
import * as bodyParser from "body-parser";
import * as busboy from "connect-busboy";
import { apiError } from "../log/error";
import { getData, saveData } from "../api/testApi";

const router = Router();

router.use(bodyParser.json({ limit: "50mb" }));
router.use(bodyParser.urlencoded({ limit: "50mb" }));
router.use(busboy());

router.get("/test/getData", getData);
router.post("/test/saveData", saveData);

router.use(apiError);

export { router as apiRouter };
