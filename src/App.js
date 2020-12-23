import logo from './logo.svg';
import './App.css';

import * as Tone from 'tone'
import React, {useState} from 'react'

const App = () => {
  const synth = new Tone.Synth().toDestination();

  const diatonic = ["C", "D", "E", "F", "G", "A", "B"]
  const dissonance = ["C", "C#", "F", "F#", "G", "A", "B"]

  const [octave, setOctave] = useState(4);
  const [scale, setScale] = useState(diatonic)


  const play = (note) => {
    synth.triggerAttackRelease(note, "8n")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="synth">
          <button onClick={()=>play(scale[0]+octave)}>🥺</button>
          <button onClick={()=>play(scale[1]+octave)}>🤡</button>
          <button onClick={()=>play(scale[2]+octave)}>🤔</button>
          <button onClick={()=>play(scale[3]+octave)}>😀</button>
          <button onClick={()=>play(scale[4]+octave)}>🙈</button>
          <button onClick={()=>play(scale[5]+octave)}>😜</button>
          <button onClick={()=>play(scale[6]+octave)}>🥰</button>
          &nbsp;
          <button onClick={()=>play(scale[0]+(octave+1))}>🥺</button>
          <button onClick={()=>play(scale[1]+(octave+1))}>🤡</button>
          <button onClick={()=>play(scale[2]+(octave+1))}>🤔</button>
          <button onClick={()=>play(scale[3]+(octave+1))}>😀</button>
          <button onClick={()=>play(scale[4]+(octave+1))}>🙈</button>
          <button onClick={()=>play(scale[5]+(octave+1))}>😜</button>
          <button onClick={()=>play(scale[6]+(octave+1))}>🥰</button>
        </div>
        <div>
          <span>octava</span>
          <button onClick={()=>setOctave(octave - 1)}>👎</button>
          <button onClick={()=>setOctave(octave + 1)}>👍</button>          <span></span>
          <span>{octave}</span>
        </div>
        <div>
          <span>escala</span>
          <button onClick={()=>setScale(diatonic)}>🤲</button>
          <button onClick={()=>setScale(dissonance)}>🥴</button>
          <span>{scale}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
