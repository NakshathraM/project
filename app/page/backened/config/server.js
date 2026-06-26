require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const newsletterRoutes = require("./routes/newsletter");

const contactRoutes = require("./routes/contact");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/newsletter", newsletterRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Habit Coach Backend Running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
);