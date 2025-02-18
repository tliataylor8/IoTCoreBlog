import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Top section with logo/title */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">IoTCore</h1>
        </div>

        {/* Navigation section */}
        <nav>
          <div className="flex justify-between items-center">
            {/* Left side - Navigation Links */}
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-blue-500 ${
                    location.pathname === '/' ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`hover:text-blue-500 ${
                    location.pathname === '/blog' ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-blue-500 ${
                    location.pathname === '/about' ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className={`hover:text-blue-500 ${
                    location.pathname === '/resources' ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`hover:text-blue-500 ${
                    location.pathname === '/contact' ? 'text-blue-500 font-bold' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Right side - Create Post button */}
            <div>
              <Link 
                to="/create" 
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Create Post
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// 1st version of navbar
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">IoTCore</h1>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
//             <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
//             <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
//             <li><Link to="/resources" className="hover:text-blue-500">Resources</Link></li>
//             <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
