
import drums from './data.json'
import { useState } from 'react';


function App() {

  const [text, setText] = useState('');


   const handleClick = (e) =>{
    
    let audio = new Audio( `${e.target.value}` );
    audio.play()
    setText(e.target.id);
   }

  return (
    <div id="drum-machine">
     
    <div id="display">{text}</div>
    <div className="whole-drum">  
     {drums.drums.map((drum) => (
      <button
      key={drum.keyTrigger}   
      className="drum-pad"
      value={drum.url}
      
      id={drum.description}
      onClick={handleClick}
      > 
      {`${drum.keyTrigger}`}
    <audio src={drum.url} className='clip' id={drum.keyTrigger} /> </button>
        ))}


</div>
    </div>
  );
}

export default App;
