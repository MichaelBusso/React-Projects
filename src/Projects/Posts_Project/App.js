import { BrowserRouter as Routar, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RegisterCompltion from './components/RegisterCompletion';
import Home from './components/Home';
import Info from './components/Info';
import TodoWrapper from './components/TodoWrapper';
import PostWrapper from './components/PostWrapper';
import AlbumWrapper from './components/AlbumWrapper';

function App() {
  return (
    <Routar>
      <div className="App">
        <Routes>
          <Route index element={<Navigate to="/Login" />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home/:id' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/RegisterCompltion/:name/:password' element={<RegisterCompltion />} />
          <Route path='/Home/:id/Info' element={<Info />} />
          <Route path='/Home/:id/Todos' element={<TodoWrapper />} />
          <Route path='/Home/:id/Posts' element={<PostWrapper />} />
          <Route path='/Home/:id/Albums' element={<AlbumWrapper />} />
        </Routes>
      </div>
    </Routar>
  );
}

export default App;