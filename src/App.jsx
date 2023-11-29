import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isComponentVisible ? (
        <Text text={text} />
      ) : showForm ? (
        <Form setText={setText} setComponentVisible={setComponentVisible} />
      ) : (
        <h1>Welcome to Kacper Kempa app!</h1>
      )}
    </div>
  );
}

function Form({ setComponentVisible, setText }) {
  function displayText() {
    setComponentVisible(true);
  }

  return (
    <>
      <input
        placeholder="type something..."
        className="input"
        type="text"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <br />
      <button className="btn" onClick={displayText}>
        Submit
      </button>
    </>
  );
}

function Text({ text }) {
  return <p>You typed {text} in previus component</p>;
}
export default App;
