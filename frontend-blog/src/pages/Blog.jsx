import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated posts data
    const dummyPosts = [
      {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post",
        date: "2024-02-19"
      },
      // Add more dummy posts if needed
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/create-post"
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
// V1
// import { useState, useEffect } from 'react';
// import { api } from '../utils/api';
// import BlogCard from '../components/BlogCard';

// const Blog = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             // No need to specify headers here
//             console.log('Sending request to /api/posts');
//             const response = await api.get('/api/posts');
//             setPosts(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Failed to fetch posts');
//             setLoading(false);
//             console.error('Error fetching posts:', err);
//         }
//     };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       try {
//         await api.delete(`/api/posts/${id}`);
//         setPosts(posts.filter(post => post.id !== id));
//       } catch (err) {
//         setError('Failed to delete post');
//         console.error('Error deleting post:', err);
//       }
//     }
//   };

//   if (loading) return <div className="text-center py-8">Loading...</div>;
//   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map(post => (
//           <div key={post.id} className="relative">
//             <BlogCard 
//               id={post.id}
//               title={post.title}
//               summary={post.content}
//               publishedDate={new Date(post.createdAt).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//               })}
//             />
//             <button
//               onClick={() => handleDelete(post.id)}
//               className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
//               aria-label="Delete post"
//             >
//               ×
//             </button>
//           </div>
//         ))}
//       </div>

//       {posts.length === 0 && (
//         <p className="text-center text-gray-500 mt-8">
//           No posts found. Create your first post!
//         </p>
//       )}
//     </div>
//   );
// };

// export default Blog;

