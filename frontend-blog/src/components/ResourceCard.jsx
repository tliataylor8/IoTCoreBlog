const ResourceCard = ({ title, description }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default ResourceCard;
  