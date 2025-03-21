const BASE_URL = 'http://your-test-server-url.com/api';

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const fetchComments = async () => {
  const res = await fetch(`${BASE_URL}/comments`);
  return res.json();
};