import React from 'react';
import { useFetchData } from '../hooks/useFetchdata'; 
// import { getTopUsersByPostCount } from '../services/dataService';

const TopUsers = () => {
  const { users, posts } = useFetchData();

  if (!users || !posts) {
    return <p className="text-center">Loading...</p>;
  }

  const topUsers = getTopUsersByPostCount(users, posts);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Users</h2>
      <div className="grid gap-6">
        {topUsers.map((user) => (
          <div key={user.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
            <img
              src={`https://picsum.photos/seed/${user.id}/80`} 
              alt={user.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">Posts: {user.postCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
