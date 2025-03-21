import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

const App = () => {
  return (
    <Router>
      <nav className="flex justify-between bg-gray-800 text-white px-6 py-4">
        <div className="font-bold text-xl">Social Analytics</div>
        <div className="flex space-x-4">
          <NavLink to="/" className="hover:text-yellow-400">Top Users</NavLink>
          <NavLink to="/trending" className="hover:text-yellow-400">Trending Posts</NavLink>
          <NavLink to="/feed" className="hover:text-yellow-400">Feed</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;