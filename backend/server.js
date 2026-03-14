const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Temporary database
let businesses = [];

// Home route
app.get("/", (req, res) => {
  res.send("Bizlink Backend Running 🚀");
});

// Add Business API
app.post("/add-business", (req, res) => {
  const { name, category, phone } = req.body;

  const business = {
    id: businesses.length + 1,
    name,
    category,
    phone
  };

  businesses.push(business);

  res.json({
    message: "Business added successfully",
    data: business
  });
});

// Get all businesses
app.get("/businesses", (req, res) => {
  res.json(businesses);
});

// Start server
app.listen(PORT, () => {
  console.log(`Bizlink server running on http://localhost:${PORT}`);
});
