import './App.css';
import { useState } from 'react';
import Passgenerate from './Components/Passgenerate';

function App() {
  const [Password, setPassword] = useState("")
  const [Uppercase, setUppercase] = useState(false)
  const [Lowercase, setLowercase] = useState(false)
  const [Number, setNumber] = useState(false)
  const [Symbol, setSymbol] = useState(false)
  const [Length, setLength] = useState(6)
  const [Copied, setCopied] = useState(false)
  return (
    <div className="App">
      <Passgenerate
        Password={Password} setPassword={setPassword}
        Uppercase={Uppercase} setUppercase={setUppercase}
        Lowercase={Lowercase} setLowercase={setLowercase}
        Number={Number} setNumber={setNumber}
        Symbol={Symbol} setSymbol={setSymbol}
        Length={Length} setLength={setLength}
        Copied={Copied} setCopied={setCopied}
      />
    </div>
  );
}

export default App;
