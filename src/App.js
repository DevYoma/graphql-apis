import './App.css';
import CharactersList from './pages/CharactersList';
// react-router and react-router-dom difference
import { Routes, Route } from "react-router";
import Character from './pages/Character';

function App() {

  return (
    <div className="App">
      {/* <CharactersList /> */}
      <Routes>
        <Route path="/" element={<CharactersList />} ></Route>
        <Route path="/:id" element={<Character />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
