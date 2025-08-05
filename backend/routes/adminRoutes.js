import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import { getvolunteers } from "../controllers/volunteers.js";
import { approve } from "../controllers/approve.js";
import { getdonations } from "../controllers/donations.js";
import { reject } from "../controllers/reject.js";

const router = Router();

router.route("/volunteers").get(verifyJWT, getvolunteers);
router.route("/approve").post(verifyJWT, approve);
router.route("/reject").post(verifyJWT, reject);
router.route("/donations").get(verifyJWT, getdonations);

export default router;
