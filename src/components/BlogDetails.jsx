import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:3005/blogs/${blogId}`)
        .then((res) => res.json())
        .then((data) => setBlog(data.blog));
    }, [blogId]);

    if (!blog) return <p>Loading...</p>;

    return (
    <div className="container">
        <button onClick={() => window.history.back()} style={{ marginBottom: "1rem" }}>
        ← Back
        </button>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
    </div>
    );
}

export default BlogDetails;