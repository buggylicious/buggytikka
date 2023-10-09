import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=468526649a824e55884ec3bdebfc8f22`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="container">
      <div className="top">Top</div>
      <div className="content">
        <div className="left">Left</div>
        <div className="main">
          {data ? (
            <ul>
              {data.articles.map(({title,description,url}) => {
                // const [title] = article.title.split('|');
                // const [content,characters] = article.content.split('[');
                return (
                  <li key={title}>
                    <h2>{title.split('|')[0]}</h2>
                    <p>{description} <a href={url} target='_blank' rel='noopener noreferrer'>more</a></p>
                  </li>
                );
              })}
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
