import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: '',
    content: '',
    date: ''
  });

  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      if (Array.isArray(parsedPosts) && parsedPosts[id]) {
        setPost(parsedPosts[id]);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      if (Array.isArray(parsedPosts)) {
        parsedPosts[id] = post; // Update the post
        localStorage.setItem('blogPosts', JSON.stringify(parsedPosts));
        navigate('/blog'); // Navigate back to the blog page
      }
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
        {/* Form fields for editing the post */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-64 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPost;