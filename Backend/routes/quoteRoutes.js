const express = require("express");
const router = express.Router();
const db = require("../config/db");

const memoryQuotes = [];

// SUBMIT NEW SERVICE QUOTE / ESTIMATE
router.post("/", async (req, res) => {
  const { name, email, phone, service_type, frequency, property_size, bedrooms, bathrooms, zip_code, notes } = req.body;

  if (!name || !email) {
    return res.status(400).json({ status: "error", message: "Name and Email are required." });
  }

  try {
    const [result] = await db.query(
      `INSERT INTO quotes 
       (name, email, phone, service_type, frequency, property_size, bedrooms, bathrooms, zip_code, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone || "", service_type || "Recurring Cleanings", frequency || "Weekly", property_size || "Medium", bedrooms || 2, bathrooms || 2, zip_code || "", notes || ""]
    );

    return res.status(201).json({
      status: "success",
      message: "Quote request submitted successfully!",
      quoteId: result.insertId
    });
  } catch (err) {
    const newQuote = { id: memoryQuotes.length + 101, name, email, phone, service_type, created_at: new Date() };
    memoryQuotes.push(newQuote);
    return res.status(201).json({
      status: "success",
      message: "Quote request submitted successfully! (Mock mode)",
      quoteId: newQuote.id
    });
  }
});

// GET ALL QUOTES
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM quotes ORDER BY created_at DESC");
    return res.status(200).json({ status: "success", quotes: rows });
  } catch (err) {
    return res.status(200).json({ status: "success", quotes: memoryQuotes });
  }
});

module.exports = router;
