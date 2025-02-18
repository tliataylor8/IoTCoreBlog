import ResourceCard from "../components/ResourceCard";

const Resources = () => {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ResourceCard title="Technical Writing Resources" description="Learn how to start making technical content from scratch as a beginner." />
          <ResourceCard title="SEO for Content Creators" description="Improve your content ranking with SEO strategies." />
        </div>
      </div>
    );
  };
  
  export default Resources;