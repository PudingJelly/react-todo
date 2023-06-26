import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import TodoTemplate from './component/todo/TodoTemplate';
import Join from './component/user/Join';
import Login from './component/user/Login';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header />
    
    <Routes>
      <Route path='/' element={ <TodoTemplate /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/join' element={ <Join /> }/>
    </Routes>

    <Footer />    
    </>
  );
}

export default App;
