import {useState, useEffect} from 'react'
import second from ''

export const usefetchdata = () => {
    const [users, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const [usersData, postsData, commentsData] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
          ]);
          setUsers(usersData);
          setPosts(postsData);
          setComments(commentsData);
        };
    
        fetchData();
      }, []);
    
      return { users, posts, comments };
    };
    