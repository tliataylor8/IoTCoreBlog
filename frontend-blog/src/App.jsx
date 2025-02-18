
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog-links" element={<BlogLinks />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// 2nd

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
// import CreatePost from './pages/CreatePost';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Navbar />  {/* Navbar will appear on all pages */}
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/:id" element={<BlogPost />} />
//             <Route path="/create" element={<CreatePost />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;


// 1st
// // import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Navbar from './components/Navbar';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Resources from "./pages/Resources";
// import Contact from "./pages/Contact";
// import BlogLinks from "./components/BlogLinks";
// import BlogPost from './pages/BlogPost';
// import CreatePost from './pages/CreatePost';
// import ContactForm from "./components/ContactForm";

// import './App.css'

// function App() {

//   return (
//     <>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog/:id" element={<BlogPost />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog-links" element={<BlogLinks />} />
//         <Route path="/contact" element={<ContactForm />} />
//         <Route path="/create" element={<CreatePost />} />
//       </Routes>
//       <Footer />
//     </Router>
//     </>
//   )
// }

// export default App;
