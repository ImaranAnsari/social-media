import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='social-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='main-container'>
          <Header></Header>
          {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
