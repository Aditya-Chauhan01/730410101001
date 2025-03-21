import React from 'react';
import { useFetchData } from '../hooks/useFetchdata'; 
import { getTrendingPosts } from '../services/dataService'; 

const TrendingPosts = () => {
  const { posts, comments } = useFetchData();

  if (!posts || !comments) {
    return <p className="text-center">Loading...</p>;
  }

  const trendingPosts = getTrendingPosts(posts, comments);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Trending Posts</h2>
      <div className="grid gap-6">
        {trendingPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${post.id}/600/300`} // Fixed template string
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
