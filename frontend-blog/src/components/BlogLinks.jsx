// RENAME AS RESOURCELINK and find where else to replace BLOGLINK

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogLinks = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      try {
        const parsedPosts = JSON.parse(storedPosts);
        if (Array.isArray(parsedPosts)) {
          setPosts(parsedPosts);
        }
      } catch (error) {
        console.error('Error parsing posts:', error);
      }
    }
  }, []);

  // Function to handle post deletion
  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      const updatedPosts = posts.filter((_, i) => i !== index); // Remove the post at the specified index
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts)); // Update localStorage
      setPosts(updatedPosts); // Update state to re-render the list
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>

      {/* Link to create a new post */}
      <Link
        to="/create"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 inline-block"
      >
        Create New Post
      </Link>

      {/* Display dynamically created posts */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <Link to={`/blog/${index}`} className="text-blue-500 hover:underline">
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </Link>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p className="mt-2">{post.content}</p>
              <div className="flex gap-2 mt-4">
                {/* Edit button */}
                <Link
                  to={`/edit/${index}`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </Link>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* I can include a link that says 'check out resources' if you'd like to learn how to write like this*/}
      {/* Static blog links (optional, if you want to keep them)
      <h2 className="text-2xl font-bold mt-6">Resources</h2>
      <div className="space-y-4">
        <a
          href="/technical-writing-resources"
          className="text-blue-500 hover:underline"
        >
          <h3 className="text-xl font-semibold">Technical Writing Resources</h3>
        </a>
        <p>Learn how to start making technical content from scratch as a beginner.</p>

        <a href="/seo-for-content-creators" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-semibold">SEO for Content Creators</h3>
        </a>
        <p>Improve your content ranking with SEO strategies.</p>
      </div> */}
    </div>
  );
};

export default BlogLinks;


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const BlogLinks = () => {
//   const [posts, setPosts] = useState([]);

//   // Fetch posts from localStorage on component mount
//   useEffect(() => {
//     const storedPosts = localStorage.getItem('blogPosts');
//     if (storedPosts) {
//       try {
//         const parsedPosts = JSON.parse(storedPosts);
//         if (Array.isArray(parsedPosts)) {
//           setPosts(parsedPosts);
//         }
//       } catch (error) {
//         console.error('Error parsing posts:', error);
//       }
//     }
//   }, []);

//   // Function to handle post deletion
//   const handleDelete = (index) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this post?');
//     if (confirmDelete) {
//       const updatedPosts = posts.filter((_, i) => i !== index); // Remove the post at the specified index
//       localStorage.setItem('blogPosts', JSON.stringify(updatedPosts)); // Update localStorage
//       setPosts(updatedPosts); // Update state to re-render the list
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Blog</h2>

//       {/* Link to create a new post */}
//       <Link
//         to="/create"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 inline-block"
//       >
//         Create New Post
//       </Link>

//       {/* Display dynamically created posts */}
//       <div className="space-y-4">
//         {posts.length === 0 ? (
//           <p>No posts available.</p>
//         ) : (
//           posts.map((post, index) => (
//             <div key={index} className="border p-4 rounded shadow">
//               <Link to={`/blog/${index}`} className="text-blue-500 hover:underline">
//                 <h3 className="text-xl font-semibold">{post.title}</h3>
//               </Link>
//               <p className="text-gray-600 text-sm">{post.date}</p>
//               <p className="mt-2">{post.content}</p>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mt-4"
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Static blog links (optional, if you want to keep them) */}
//       <h2 className="text-2xl font-bold mt-6">Resources</h2>
//       <div className="space-y-4">
//         <a
//           href="/technical-writing-resources"
//           className="text-blue-500 hover:underline"
//         >
//           <h3 className="text-xl font-semibold">Technical Writing Resources</h3>
//         </a>
//         <p>Learn how to start making technical content from scratch as a beginner.</p>

//         <a href="/seo-for-content-creators" className="text-blue-500 hover:underline">
//           <h3 className="text-xl font-semibold">SEO for Content Creators</h3>
//         </a>
//         <p>Improve your content ranking with SEO strategies.</p>
//       </div>
//     </div>
//   );
// };

// export default BlogLinks;

// import React from "react";
// import { Link } from "react-router-dom"; // Use for internal navigation

// const BlogLinks = () => {
//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Blog</h2>

//       <div className="space-y-4">
//         <a
//           href="/technical-writing-myths"
//           className="text-blue-500 hover:underline"
//         >
//           <h3 className="text-xl font-semibold">Technical Writing Myths Debunked</h3>
//         </a>
//         <p>Separating fact from fiction in your content writing.</p>

//         <a href="/best-tools-for-writers" className="text-blue-500 hover:underline">
//           <h3 className="text-xl font-semibold">Best Tools for Writers</h3>
//         </a>
//         <p>Top tools to boost your productivity and efficiency.</p>
//       </div>

//       <h2 className="text-2xl font-bold mt-6">Resources</h2>
//       <div className="space-y-4">
//         <a
//           href="/technical-writing-resources"
//           className="text-blue-500 hover:underline"
//         >
//           <h3 className="text-xl font-semibold">Technical Writing Resources</h3>
//         </a>
//         <p>Learn how to start making technical content from scratch as a beginner.</p>

//         <a href="/seo-for-content-creators" className="text-blue-500 hover:underline">
//           <h3 className="text-xl font-semibold">SEO for Content Creators</h3>
//         </a>
//         <p>Improve your content ranking with SEO strategies.</p>
//       </div>
//     </div>
//   );
// };

// export default BlogLinks;
