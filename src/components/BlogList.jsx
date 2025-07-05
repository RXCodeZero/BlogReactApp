import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function BlogList() {
    const navigate = useNavigate();
    const { data, loading } = useFetch("http://localhost:3005/blogs");

    if (loading) return <p>Loading...</p>;

    const blogs = data?.blogs || [];

    return (
    <div className="container">
        <h2>All Blogs</h2>
        <button onClick={() => navigate("/blogs/create")} style={{ marginBottom: "1rem" }}>
        Create New Blog
        </button>

        {blogs.length === 0 ? (
        <p>No blogs yet.</p>
        ) : (
        blogs.map((blog) => (
            <div className="blog-preview" key={blog._id}>
            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 120)}...</p>
            </Link>
            </div>
        ))
        )}
    </div>
    );
}

export default BlogList;
