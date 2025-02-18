import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // This hook tells us which route we're on

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-gray-900 ${
                location.pathname === '/' ? 'font-bold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-700 hover:text-gray-900 ${
                location.pathname === '/blog' ? 'font-bold' : ''
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex space-x-4">
            <Link 
              to="/create" 
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;