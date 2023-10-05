import express from "express";
import {
  contactUsController,
  partnerFormMail,
} from "../controllers/contactUsController.js";

const router = express.Router();

router.post("/contactUs", contactUsController);
router.post("/partnerFormMail", partnerFormMail);

export default router;