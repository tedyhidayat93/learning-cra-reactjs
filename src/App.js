import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <Footer />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
