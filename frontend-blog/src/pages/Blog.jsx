
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');

    if (storedPosts) {
      try {
        const parsedPosts = JSON.parse(storedPosts);
        setPosts(parsedPosts); // Set retrieved posts into state
      } catch (error) {
        console.error("Error parsing localStorage content:", error);
      }
    }
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet. Create your first post!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;

