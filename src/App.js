import logo from './logo.svg';
import './App.css';

import * as Tone from 'tone'

const App = () => {
  const synth = new Tone.Synth().toDestination();
  let octave = 4;

  const diatonic = ["C", "D", "E", "F", "G", "A", "B"]
  const dissonance = ["C", "C#", "F", "F#", "G", "A", "B"]

  let scale = diatonic;

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
          <button onClick={()=>octave = octave - 1}>👎</button>
          <button onClick={()=>octave = octave + 1}>👍</button>
        </div>
        <div>
          <span>escala</span>
          <button onClick={()=>scale = diatonic}>🤲</button>
          <button onClick={()=>scale = dissonance}>🥴</button>
        </div>
      </header>
    </div>
  );
}

export default App;
