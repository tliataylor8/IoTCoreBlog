import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0] // Today's date
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get existing posts from localStorage
    const storedPosts = localStorage.getItem('blogPosts');
  
    // Ensure storedPosts is an array, if it's not, initialize as an empty array
    let parsedPosts = [];
    try {
      parsedPosts = storedPosts ? JSON.parse(storedPosts) : [];
      if (!Array.isArray(parsedPosts)) {
        console.error('Stored posts are not an array, resetting to empty array.');
        parsedPosts = [];
      }
    } catch (error) {
      console.error('Error parsing stored posts, resetting to empty array.', error);
      parsedPosts = [];
    }
  
    // Add the new post to the stored posts
    const updatedPosts = [...parsedPosts, post];
  
    // Save the updated posts back to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  
    // Logging the post data for debugging
    console.log('New Post:', post);
    
    // Clearing the form
    setPost({
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0]
    });

    // Navigate back to blog page
    navigate('/blog');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            value={post.date}
            onChange={(e) => setPost({...post, date: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({...post, content: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-64 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Write your post content here..."
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Post
          </button>
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;




