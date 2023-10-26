import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = '468526649a824e55884ec3bdebfc8f22';//process.env.REACT_APP_NEWS_API_KEY;
    let result = '';
    for (let i = 0; i < 50; i++) {
      fetch(`https://meowfacts.herokuapp.com/`)
        .then(response => response.json())
        .then(data => {
          result += data.data + ' <br><br> ';
          if (i === 49) {
            setData(result);
          }
        })
        .catch(error => console.log("YAHA FATA - " + error));
    }
  }, []);


  return (
    <div className="container">
      <div className="top">Top</div>
      <div className="content">
        <div className="left">Left</div>
        <div className="main">
          {data ? (
            <ul>
              <p dangerouslySetInnerHTML={{ __html: data }}></p>
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="right">Right</div>
      </div>
      <div className="bottom">Bottom</div>
    </div>
  );
}

export default App;
