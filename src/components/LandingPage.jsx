import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const [quote, setQuote] = useState({ content: "", author: "" });
    const navigate = useNavigate();

    const fallbackQuotes = [
        { content: "Start writing. No matter what.", author: "Jodi Picoult" },
        { content: "A word after a word after a word is power.", author: "Margaret Atwood" },
        { content: "Write what should not be forgotten.", author: "Isabel Allende" },
    ];

    const getRandomQuote = () =>
        fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

    const fetchQuote = async () => {
    try {
        const res = await fetch("http://localhost:3005/quote");
        const data = await res.json();
        setQuote({
            content: data.content,
            author: data.author,
        });
    } catch {
        const fallback = getRandomQuote();
        setQuote(fallback);
    }
};



    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="landing animated-bg">
            <h1>Welcome to BlogSite</h1>
            <p>Your blogging journey starts here.</p>

            <div className="quote-card">
                <p className="quote">“{quote.content || "Failed to load quote."}”</p>
                <p className="author">— {quote.author || "System"}</p>
                <button onClick={fetchQuote}>🔁 New Quote</button>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
                <button onClick={() => navigate("/signin")}>Sign In</button>
                <button onClick={() => navigate("/signup")} style={{ marginLeft: "1rem" }}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
