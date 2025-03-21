export const getTopUsersByPostCount = (users, posts) => {
    const userPostCounts = users.map(user => ({
      ...user,
      postCount: posts.filter(post => post.userId === user.id).length
    }));
  
    userPostCounts.sort((a, b) => b.postCount - a.postCount);
    return userPostCounts.slice(0, 5);
  };
  
  export const getTrendingPosts = (posts, comments) => {
    const commentCounts = {};
  
    comments.forEach(comment => {
      commentCounts[comment.postId] = (commentCounts[comment.postId] || 0) + 1;
    });
  
    const maxComments = Math.max(...Object.values(commentCounts));
    return posts.filter(post => commentCounts[post.id] === maxComments);
  };