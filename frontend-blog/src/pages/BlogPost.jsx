import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch posts from localStorage
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      if (Array.isArray(parsedPosts)) {
        // Find the post by index (since the URL uses the index)
        const foundPost = parsedPosts[parseInt(id)];
        setPost(foundPost);
      }
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

