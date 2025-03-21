import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true; 

    const loadInitialPosts = async () => {
      try {
        const initialPosts = await fetchPosts();
        if (isMounted) {
          setPosts(initialPosts.sort((a, b) => b.id - a.id));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    const interval = setInterval(async () => {
      try {
        const newPosts = await fetchPosts();
        if (isMounted) {
          setPosts(newPosts.sort((a, b) => b.id - a.id));
        }
      } catch (error) {
        console.error("Error fetching new posts:", error);
      }
    }, 5000);

    loadInitialPosts();

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Live Feed</h2>
      <div className="grid gap-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={`https://picsum.photos/seed/feed${post.id}/600/300`} // Fixed template string
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
