import style from "./Style.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { FaRegTrashAlt } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoTopic, setTodoTopic] = useState([]);

  const handleSubmit = (e, value) => {
    console.log(value);
    e.preventDefault();
    let idNum = uuidv4();
    if (inputValue === "") {
      alert("Please enter a task!!!");
    } else {
      console.log(inputValue);
      setTodoTopic((todoTopic) => [
        ...todoTopic,
        { name: inputValue, id: idNum },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="main-container">
      <h2>To Do App</h2>
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
          <button type="submit">ADD</button>
        </form>
      </div>
      <TodoList handleSubmit={handleSubmit} topics={todoTopic} />
      {/* {showPop && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-title">
              <p> Are you sure that you want to remove the task ?</p>
            </div>
            <div className="modal-btns">
              <button
                className="topic-remove btn-no"
                onClick={() => {
                  showContents();
                }}
              >
                No
              </button>
              <button className="topic-remove" onClick={() => RemoveTopic()}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
