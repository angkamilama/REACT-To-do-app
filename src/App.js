import style from "./Style.css";
import { useState, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [todoTopic, setTodoTopic] = useState([]);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoTopic((todoTopic) => [...todoTopic, inputRef.current.value]);
  };
  const deleteTopic = (index) => {
    const updatedTodoTopic = todoTopic.filter(
      (todo) => todoTopic.indexOf(todo) !== index
    );
    setTodoTopic(updatedTodoTopic);
  };
  console.log(todoTopic);

  return (
    <div className="main-container">
      <h2>To Do APP</h2>
      <div className="container">
        <form onSubmit={handleSubmit} className="form-container">
          <label className="input-container">
            <p>Tasks:</p>
            <input
              name="myInput"
              type="text"
              ref={inputRef}
              className="input-box"
            />
          </label>
          <input type="submit" />
        </form>
        <div className="lists">
          <div className="topics">
            {todoTopic.map((list, index) => {
              return (
                <div className="topic" key={index}>
                  <div className="topic-heading">{list}</div>
                  <button
                    className="topic-delete"
                    onClick={() => deleteTopic(index)}
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
