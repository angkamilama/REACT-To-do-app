import style from "./Style.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoTopic, setTodoTopic] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let idNum = uuidv4();

    if (inputValue === "") {
      alert("Please enter a task!!!");
    } else if (editId) {
      const editedTodoTopic = todoTopic.map((todo) =>
        todo.id === editId ? { ...todo, name: inputValue } : todo
      );
      setTodoTopic(editedTodoTopic);
      setEditId(0);
      setInputValue("");
    } else {
      setTodoTopic((todoTopic) => [
        ...todoTopic,
        { name: inputValue, id: idNum },
      ]);
      setInputValue("");
    }
  };

  const RemoveTopic = () => {
    setShowPop((showPop) => !showPop);
    const updatedTodoTopic = todoTopic.filter((todo) => todo.id !== removeId);
    setTodoTopic(updatedTodoTopic);
  };

  const showContents = (id) => {
    setShowPop((showPop) => !showPop);
    setRemoveId((removeId) => id);
    setInputValue("");
  };

  const handleEdit = (id) => {
    const editedTodo = todoTopic.find((todo) => todo.id === id);
    setInputValue((inputValue) => editedTodo.name);
    setEditId((editId) => id);
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
          <button type="submit">{editId ? "EDIT" : "ADD"}</button>
        </form>
        <div className="lists">
          <div className="topics">
            {todoTopic.map((todo) => (
              <div className="topic" key={todo.id}>
                <div className="topic-heading">{todo.name}</div>
                <button
                  className="topic-edit"
                  onClick={() => handleEdit(todo.id)}
                >
                  Edit
                </button>
                <button
                  className="topic-remove"
                  onClick={() => showContents(todo.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        {showPop && (
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
        )}
      </div>
    </div>
  );
}

export default App;
