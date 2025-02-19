const BlogCard = ({ post }) => {
  // Add a check for undefined post
  if (!post) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {post.date ? new Date(post.date).toLocaleDateString() : 'No date'}
        </p>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogCard;

