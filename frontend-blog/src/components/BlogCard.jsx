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

// V1
// const BlogCard = ({ id, title, summary, publishedDate }) => {
//   const navigate = useNavigate();

//   return (
//     <div 
//       className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
//       onClick={() => navigate(`/blog/${id}`)}
//     >
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-500 text-sm mb-3">{publishedDate}</p>
//       <p className="text-gray-700">{summary}</p>
//     </div>
//   );
// };

// export default BlogCard;

