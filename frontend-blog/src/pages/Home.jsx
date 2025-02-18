// Part 3 with articles
import { useState } from 'react';  
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

const Home = () => {
    const [posts, setPosts] = useState([
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
                id={post.id}  // Add this line to pass the id
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

// Part 2
// import { useState, useEffect } from "react";
// import Hero from "../components/Hero";
// import BlogCard from "../components/BlogCard";

// // Part 1
// // const Home = () => {
// //     return (
// //         <div>
// //           <Hero />
// //           <section className="container mx-auto py-8">
// //             <h2 className="text-3xl font-bold text-center">Latest Posts</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
// //               {/* Example blog cards */}
// //               <BlogCard title="How to Start Technical Writing" summary="Tips and strategies to launch your technical writing career." />
// //               <BlogCard title="SEO Basics for Bloggers" summary="Learn how to optimize your blog for search engines." />
// //             </div>
// //           </section>
// //         </div>
// //       );
// // };

// // export default Home;

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//       fetch('http://localhost:3001/api/posts')
//           .then(response => response.json())
//           .then(data => setPosts(data))
//           .catch(error => console.error('Error fetching posts:', error));
//   }, []);

//   return (
//       <div>
//           <Hero />
//           <section className="container mx-auto py-8">
//               <h2 className="text-3xl font-bold text-center">Latest Posts</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                   {posts.map(post => (
//                       <BlogCard 
//                           key={post.id}
//                           title={post.title}
//                           summary={post.content}
//                       />
//                   ))}
//               </div>
//           </section>
//       </div>
//   );
// };

// export default Home;