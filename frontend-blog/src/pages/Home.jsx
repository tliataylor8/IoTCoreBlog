
import { useState } from 'react';  
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

const Home = () => {
    const [posts, setPosts] = useState([
      {
        id: 1,
        title: "Syniverse and Onomondo Collaborate to Enhance IoT Connectivity",
        content: "Your first article content...",
        publishedDate: "2024-03-20"
      },
      {
        id: 2,
        title: "IoT Cybersecurity: Securing 28 Billion Devices by 2028",
        content: "Your second article content...",
        publishedDate: "2024-03-21"
      }
    ]);
  
    return (
      <div>
        <Hero />
        <section className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {posts.map(post => (
              <BlogCard 
                key={post.id}
                id={post.id}  //to pass the id
                title={post.title}
                summary={post.content}
                publishedDate={new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              />
            ))}
          </div>
        </section>
      </div>
    );
  };

  export default Home;