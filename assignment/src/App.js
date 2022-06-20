import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/navbar';
import { Search } from './components/form/search';
import { Home } from './components/home/home';
import { Past_results } from './components/past search/past_results';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Search /> } />
        <Route path='/search_results/:lati/:longi' element={<Home /> } />
        <Route path='/past_results' element={<Past_results /> } />
      </Routes>
    </div>
  );
}

export default App;
