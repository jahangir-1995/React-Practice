
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <br />
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/friends" element={<Friends></Friends>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;