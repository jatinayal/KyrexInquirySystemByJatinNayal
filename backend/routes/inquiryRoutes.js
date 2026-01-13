import express from "express";
import {
  addInquiry,
  getInquiries,
  updateInquiryStatus
} from "../controllers/inquiryController.js";

const router = express.Router();

router.post("/", addInquiry);
router.get("/", getInquiries);
router.patch("/:id", updateInquiryStatus);

export default router;
