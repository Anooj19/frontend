import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={ <Register/> } />
      </Routes>
    </div>
  );
}

export default App;
