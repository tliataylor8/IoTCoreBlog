import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Article",
      content: "Your first article content...",
      publishedDate: "2024-03-02"
    },
    {
      id: 2,
      title: "Second Article",
      content: "Your second article content...",
      publishedDate: "2024-03-14"
    },
    {
      id: 3,
      title: "Third Article",
      content: "Your third article content...",
      publishedDate: "2024-03-22"
    },
    {
      id: 4,
      title: "Fourth Article",
      content: "Your fourth article content...",
      publishedDate: "2024-03-25"
    }, 
    {
      id: 5,
      title: "Fifth Article",
      content: "Your fifth article content...",
      publishedDate: "2024-03-28"
    },
    {
      id: 6,
      title: "Sixth Article",
      content: "Your sixth article content...",
      publishedDate: "2024-03-30"
    }
  ]);

  // When ready to fetch from backend:
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/posts')
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  //     .catch(error => console.error('Error fetching posts:', error));
  // }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      
      {/* Optional: Add a create post button if user is logged in */}
      <div className="mb-6 flex justify-end">
        <button 
          onClick={() => window.location.href = '/create'}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard 
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.content.substring(0, 150) + '...'} // Truncate content for preview
            publishedDate={new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

// P1
// import BlogCard from "../components/BlogCard";

// const Blog = () => {
//     return (
//       <div className="container mx-auto p-8">
//         <h2 className="text-3xl font-bold">Blog</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <BlogCard title="Technical Writing Myths Debunked" summary="Separating fact from fiction in your content writing." />
//           <BlogCard title="Best Tools for Writers" summary="Top tools to boost your productivity and efficiency." />
//         </div>
//       </div>
//     );
//   };
  
//   export default Blog;
  