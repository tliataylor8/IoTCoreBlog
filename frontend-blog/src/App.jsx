
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import BlogLinks from "./components/BlogLinks";
import BlogPost from './pages/BlogPost';
import CreatePost from './pages/CreatePost';
import ContactForm from "./components/ContactForm";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogLinks />} /> {/* Updated to use BlogLinks */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog-links" element={<BlogLinks />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Resources from "./pages/Resources";
// import Contact from "./pages/Contact";
// import BlogLinks from "./components/BlogLinks";
// import BlogPost from './pages/BlogPost';
// import CreatePost from './pages/CreatePost';
// import ContactForm from "./components/ContactForm";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Header />  
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blog/:id" element={<BlogPost />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog-links" element={<BlogLinks />} />
//             <Route path="/contact" element={<ContactForm />} />
//             {/* This is supposed to be the same button for navbar and Blog tab but only one can work at a time */}
//             <Route path="/create" element={<CreatePost />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

