import style from "./Style.css";
import { useState, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoTopic, setTodoTopic] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTopic((todoTopic) => [...todoTopic, inputValue]);
    setInputValue("");
  };
  const RemoveTopic = (index) => {
    const updatedTodoTopic = todoTopic.filter(
      (todo) => todoTopic.indexOf(todo) !== index
    );
    setTodoTopic(updatedTodoTopic);
  };
  console.log(inputValue, todoTopic);

  return (
    <div className="main-container">
      <h2>To Do APP</h2>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="input-container">
            <p>Tasks:</p>
            <input
              name="myInput"
              value={inputValue}
              className="input-box"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button>ADD</button>
        </form>
        <div className="lists">
          <div className="topics">
            {todoTopic.map((list, index) => {
              return (
                <div className="topic" key={index}>
                  <div className="topic-heading">{list}</div>
                  <button
                    className="RemoveTopic"
                    onClick={() => RemoveTopic(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
