import {useState} from 'react'
import './App.css';
import gif from "./giphy (2).gif";

const getRandomPosition = () => ({
  left: `${Math.random() * (window.innerWidth - 100)}px`,
  top: `${Math.random() * (window.innerHeight - 40)}px`,
});

function App() {

  const [position, setPosition] = useState({
    left: `${(window.innerWidth-66) / 2}px`,
    top: `${(window.innerHeight) / 2}px`,
  });
  const [isInitial, setIsInitial] = useState(true);
  const [flower,setFlower] = useState(false)


  const handleClick = () => {
    if (isInitial) {
      
      setIsInitial(false);
    } else {
      setPosition(getRandomPosition());
    }

  };

  const handleflower = () => {
    setFlower(true);
  }
  
  return (
    <div className="App">
      <div className="text">
        <h1>
          Do U Love Me ?
        </h1>
      </div>
      {!flower && <div className="main">
        <button className="btn" onClick={handleClick} style={{position:'absolute',...position,}}>NO</button>
        <button className="btn" onClick={handleflower}>YES</button>   
      </div>}
      {flower && <div className='flower'>
          <img src={gif} alt="I knew it" />
        </div>}
    </div>
  );
}

export default App;
