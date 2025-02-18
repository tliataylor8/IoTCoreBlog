import React from "react";
import { Link } from "react-router-dom"; // Use for internal navigation

const BlogLinks = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>

      <div className="space-y-4">
        <a
          href="/technical-writing-myths"
          className="text-blue-500 hover:underline"
        >
          <h3 className="text-xl font-semibold">Technical Writing Myths Debunked</h3>
        </a>
        <p>Separating fact from fiction in your content writing.</p>

        <a href="/best-tools-for-writers" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-semibold">Best Tools for Writers</h3>
        </a>
        <p>Top tools to boost your productivity and efficiency.</p>
      </div>

      <h2 className="text-2xl font-bold mt-6">Resources</h2>
      <div className="space-y-4">
        <a
          href="/technical-writing-resources"
          className="text-blue-500 hover:underline"
        >
          <h3 className="text-xl font-semibold">Technical Writing Resources</h3>
        </a>
        <p>Learn how to start making technical content from scratch as a beginner.</p>

        <a href="/seo-for-content-creators" className="text-blue-500 hover:underline">
          <h3 className="text-xl font-semibold">SEO for Content Creators</h3>
        </a>
        <p>Improve your content ranking with SEO strategies.</p>
      </div>
    </div>
  );
};

export default BlogLinks;
