import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [isCharAllowed, setAllowedChar] = useState(false);
  const [isNumAllowed, setAllowedNumber] = useState(false);
  const inputRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy!");

  function copyToClipBoard() {
    inputRef.current?.select();
    // inputRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied!");
  }
  const randomPasswordGenerator = useCallback(() => {
    let pass = "";
    let passString = "AtuvwxyBabcdefghijklmnCDEFGHIJKLMNOPQRSTUVWXYZopqrsz";

    if (copyText == "Copied!") {
      setCopyText("Copy!");
    }
    if (isNumAllowed) {
      passString = passString + "0123456789";
    }
    if (isCharAllowed) {
      passString = passString + "`!@#$%^&*()_+-=[]{}";
    }

    for (let index = 0; index < length; index++) {
      let charIndex = Math.round(Math.random() * passString.length);
      pass = pass + passString.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, isCharAllowed, isNumAllowed, setPassword]);

  useEffect(randomPasswordGenerator, [
    length,
    isCharAllowed,
    isNumAllowed,
    randomPasswordGenerator,
  ]);
  return (
    <>
      <div className="password-container">
        <div className="password-container_holder">
          <h1>Password Generator</h1>

          <div className="password-container_input">
            <input
              type="text"
              placeholder="password"
              value={password}
              readOnly
              ref={inputRef}
            />
            <button onClick={copyToClipBoard}>{copyText}</button>
          </div>

          <div className="controllers">
            <div>
              <input
                type="range"
                min={6}
                max={80}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>{length} Length</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={(e) => {
                  setAllowedNumber(!isNumAllowed);
                }}
              />
              <label>Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setAllowedChar(!isCharAllowed);
                }}
              />
              <label>Special Chars</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
