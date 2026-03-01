const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;

// ================= CONFIG =================

const APP_VERSION = "1.0";

// GitHub RAW Direct APK Link
const APK_LINK = "https://raw.githubusercontent.com/mhshohug/upgrade/1249d50b11b98d68eddd9366f657fb4e45620e76/Sukhy%20Dyeing%20ERP%201.0_1.apk";

// ================= ROUTES =================

// Version Check API
app.get("/version", (req, res) => {
    res.json({
        status: "success",
        version: APP_VERSION,
        apk: APK_LINK
    });
});

// Root test
app.get("/", (req, res) => {
    res.send("Update Server Running 🚀");
});

// ================= START =================

app.listen(PORT, () => {
    console.log("Update Server Running on port " + PORT);
});
