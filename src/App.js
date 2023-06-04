import style from "./Style.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editedInputValue, setEditedInputValue] = useState("");
  const [todoTopic, setTodoTopic] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let idNum = uuidv4();

    if (inputValue === "") {
      alert("Please enter a task!!!");
    } else {
      setTodoTopic((todoTopic) => [
        ...todoTopic,
        { name: inputValue, id: idNum },
      ]);
    }
    setInputValue("");
  };

  const RemoveTopic = () => {
    setShowPop((showPop) => !showPop);
    const updatedTodoTopic = todoTopic.filter((todo) => todo.id !== removeId);
    setTodoTopic(updatedTodoTopic);
    setEditId(0);
  };

  const showContents = (id) => {
    setShowPop((showPop) => !showPop);
    setRemoveId((removeId) => id);
    setInputValue("");
    setEditId(0);
  };

  const editTodoTopic = (e) => {
    e.preventDefault();
    if (editedInputValue === "") {
      alert("please add a new input topic");
    } else {
      const editedTodoTopic = todoTopic.map((todo) =>
        todo.id === editId ? { ...todo, name: editedInputValue } : todo
      );
      setTodoTopic(editedTodoTopic);
      setEditId(0);
      setEditedInputValue("");
    }
  };

  const handleEdit = (id) => {
    setEditId((editId) => id);
  };

  return (
    <div className="main-container">
      <h2>To Do App</h2>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="input-container">
            <p>TASKS</p>
            <input
              name="myInput"
              value={inputValue}
              className="input-box"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">ADD</button>
        </form>
        <div className="lists">
          <div className="topics">
            {todoTopic.map((todo) =>
              todo.id === editId ? (
                <div className="edit-topic" key={todo.id}>
                  <form className="edit-form" onSubmit={editTodoTopic}>
                    <label>
                      <input
                        type="text"
                        name="editedTopic"
                        className="input-box"
                        defaultValue={todo.name}
                        onChange={(e) => setEditedInputValue(e.target.value)}
                      />
                    </label>
                    <button type="submit" className="edit-topic-update">
                      Update
                    </button>
                  </form>
                  <button
                    className="edit-topic-cancel"
                    onClick={() => setEditId(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="topic" key={todo.id}>
                  <div className="topic-heading">{todo.name}</div>
                  <button
                    className="topic-edit"
                    onClick={() => {
                      handleEdit(todo.id);
                    }}
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
              )
            )}
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
