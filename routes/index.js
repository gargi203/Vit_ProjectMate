const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // null is error field, uploads is folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Landing page
router.get("/", (req, res) => {
    res.render("landing", { user: req.user });
});

// Register form
router.get("/register", (req, res) => {
    res.render("register");
});

// Register user
router.post("/register", upload.single("myImage"), (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString("base64");
    const finalImg = {
        contentType: req.file.mimetype,
        path: req.file.path,
        image: Buffer.from(encode_image, "base64") // ✅ Updated for Node.js
    };

    const newUser = new User({
        username: req.body.username,
        about: req.body.about,
        img: finalImg,
        email: req.body.email,
        institute: req.body.institute,
        language: req.body.language,
        github: req.body.github,
        linkedIn: req.body.linkedIn
    });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.error(err);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/projects");
        });
    });
});

// Login form
router.get("/login", (req, res) => {
    res.render("login");
});

// Login user
router.post("/login", passport.authenticate("local", {
    successRedirect: "/projects",
    failureRedirect: "/login"
}));

// Logout user (Passport 0.6+)
router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect("/");
    });
});

// Other pages
router.get("/about", (req, res) => {
    res.render("about", { user: req.user });
});
router.get("/contact", (req, res) => {
    res.render("contact", { user: req.user });
});
router.get("/gallery", (req, res) => {
    res.render("gallery", { user: req.user });
});

module.exports = router;
