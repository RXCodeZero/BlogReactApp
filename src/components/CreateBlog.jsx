import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
    const [form, setForm] = useState({ title: "", content: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:3005/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.blog) {
            alert("Blog created!");
            navigate("/blogs");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="container blog-form">
            <h2>Create a New Blog</h2>
            <input
                className="blog-input"
                name="title"
                onChange={handleChange}
                placeholder="Blog Title"
                value={form.title}
            />
            <textarea
                className="blog-textarea"
                name="content"
                onChange={handleChange}
                placeholder="Write your content here..."
                rows={10}
                value={form.content}
            />
            <button className="blog-submit" onClick={handleSubmit}>
                Post Blog
            </button>
        </div>
    );
}

export default CreateBlog;
