import Inquiry from "../models/Inquiry.js";

export const addInquiry = async (req, res) => {
  const { name, contact, source, status } = req.body;

  if (!name || !contact) {
    return res.status(400).json({ message: "Name and contact are required" });
  }

  const inquiry = await Inquiry.create({
    name,
    contact,
    source,
    status,
  });

  res.status(201).json(inquiry);
};

export const getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  res.json(inquiries);
};

export const updateInquiryStatus = async (req, res) => {
  const { status } = req.body;

  const inquiry = await Inquiry.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(inquiry);
};
