const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


const app = express();
const SECRET = "secretkey";

app.use(cors());
app.use(express.json());

mongoose.connect("your_mongo_db_server_url")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Error:", err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});

const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

const User = mongoose.model("Users", userSchema,"Users");
const Blog = mongoose.model("Blogs", blogSchema,"Blogs");

function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ message: "Token required" });

    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}

const signupSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1)
});

const blogSchemaZ = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
});

app.post("/signup", async (req, res) => {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ message: parsed.error });
    }

    const { username, password } = parsed.data;

    try {
        const existing = await User.findOne({ username });
        if (existing) {
            return res.status(409).json({ message: "User already exists!" });
        }

        const user = new User({ username, password });
        await user.save();  
        return res.status(200).json({ message: "User saved successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal error", error: err.message });
    }
});


app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET);
    res.json({ token });
});

app.post("/blog", auth, async (req, res) => {
    const parsed = blogSchemaZ.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ message: parsed.error });
    }

    const { title, content } = parsed.data;

    try {
        const blog = new Blog({ title, content });
        await blog.save();
        return res.status(200).json({ message: "Blog saved successfully", blog });
    } catch (err) {
        return res.status(500).json({ message: "Failed to save blog", error: err.message });
    }
});


app.get("/blogs", async (req, res) => {
    const blogs = await Blog.find();
    res.json({ blogs });
});

app.get("/blogs/:blogId", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        res.json({ blog });
    } catch (err) {
        res.status(400).json({ message: "Invalid blog ID" });
    }
});


app.get("/quote", async (req, res) => {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        res.json({
            content: data[0].q,
            author: data[0].a
        });
    } catch (error) {
        console.error("Quote fetch error:", error.message);
        res.status(500).json({ message: "Failed to fetch quote" });
    }
});




app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});
