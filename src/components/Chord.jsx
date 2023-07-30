import React from 'react'
import drums from '../data.json'

function Chord() {

  return (
    <button
    className="drum-pad"
    id={`drum-${drums.keyTrigger}`}
    // onClick={() => playSound(audioClip)}
  >
     {drums.map((drum) => (
          <audio src={drum.url} id={drum.keyTrigger} className="clip" />
        ))}

  </button>
  )
}

export default Chord