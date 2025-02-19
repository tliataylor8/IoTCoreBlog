const ResourceCard = ({ title, description, link }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 inline-block"
        >
          Read More →
        </a>
      )}
      </div>
    );
  };
  
  export default ResourceCard;
  