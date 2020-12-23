import logo from './logo.svg';
import './App.css';

import * as Tone from 'tone'

const App = () => {
  const synth = new Tone.Synth().toDestination();
  let octave = 4;

  const play = (note) => {
    synth.triggerAttackRelease(note, "8n")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="synth">
          <button onClick={()=>play("C"+octave)}>🥺</button>
          <button onClick={()=>play("D"+octave)}>🤡</button>
          <button onClick={()=>play("E"+octave)}>🤔</button>
          <button onClick={()=>play("F"+octave)}>😀</button>
          <button onClick={()=>play("G"+octave)}>🙈</button>
          <button onClick={()=>play("A"+octave)}>😜</button>
          <button onClick={()=>play("B"+octave)}>🥰</button>
          &nbsp;
          <button onClick={()=>play("C"+(octave+1))}>🥺</button>
          <button onClick={()=>play("D"+(octave+1))}>🤡</button>
          <button onClick={()=>play("E"+(octave+1))}>🤔</button>
          <button onClick={()=>play("F"+(octave+1))}>😀</button>
          <button onClick={()=>play("G"+(octave+1))}>🙈</button>
          <button onClick={()=>play("A"+(octave+1))}>😜</button>
          <button onClick={()=>play("B"+(octave+1))}>🥰</button>
        </div>
        <div>
          <button onClick={()=>octave = octave - 1}>👎</button>
          <button onClick={()=>octave = octave + 1}>👍</button>
        </div>
      </header>
    </div>
  );
}

export default App;
