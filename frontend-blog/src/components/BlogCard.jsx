import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, title, summary, publishedDate }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(`/blog/${id}`)}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{publishedDate}</p>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default BlogCard;

