import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

function Layout() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/signin", "/signup"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <ThemeToggle /> 
      {showNavbar && <Navbar />} 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
