import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // articles here
    // Later, fetch data from backend
    const posts = [
      {
        id: 1,
        title: "First Article",
        content: "Your first article content...",
        publishedDate: "2024-03-20"
      },
      {
        id: 2,
        title: "Second Article",
        content: "Your second article content...",
        publishedDate: "2024-03-21"
      }
    ];

    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.publishedDate).toLocaleDateString('en-US', {
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