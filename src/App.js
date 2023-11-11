import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './UI/Screen/HomeScreen';

function App() {
  const [data, setData] = useState(null);
  return (
    <HomePage />
  );
}

export default App;
