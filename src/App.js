import style from "./Style.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editedInputValue, setEditedInputValue] = useState("");
  const [Todos, setTodos] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState(0);
  const [InputError, setInputError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let idNum = uuidv4();

    if (inputValue === "") {
      setInputError(false);
    } else {
      setTodos((Todo) => [...Todo, { name: inputValue, id: idNum }]);
    }
    setInputValue("");
  };

  const RemoveTodo = () => {
    setShowPop((showPop) => !showPop);
    const updatedTodos = Todos.filter((todo) => todo.id !== removeId);
    setTodos(updatedTodos);
    setEditId(0);
  };

  const showContents = (id) => {
    setShowPop((showPop) => !showPop);
    setRemoveId((removeId) => id);
    setInputValue("");
    setEditId(0);
  };

  const editTodos = (e) => {
    e.preventDefault();
    if (editedInputValue === "") {
      alert("please edit the topic");
    } else {
      const editedTodos = Todos.map((todo) =>
        todo.id === editId ? { ...todo, name: editedInputValue } : todo
      );
      setTodos(editedTodos);
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
          <div>
            <label className="input-container">
              {InputError ? (
                <input
                  name="myInput"
                  value={inputValue}
                  className="input-box"
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                <input
                  name="myInput"
                  className="input-box-error"
                  placeholder="please enter a task"
                  onClick={() => setInputError(true)}
                />
              )}
              <button type="submit">ADD</button>
            </label>
          </div>
        </form>
        <div className="lists">
          <div className="todos">
            {Todos.map((todo) =>
              todo.id === editId ? (
                <div className="edit-todo" key={todo.id}>
                  <form className="edit-form" onSubmit={editTodos}>
                    <label>
                      <input
                        type="text"
                        name="editedTodo"
                        className="input-box"
                        defaultValue={todo.name}
                        onChange={(e) => setEditedInputValue(e.target.value)}
                      />
                    </label>
                    <button type="submit" className="edit-todo-update">
                      Update
                    </button>
                  </form>
                  <button
                    className="edit-todo-cancel"
                    onClick={() => setEditId(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="todo" key={todo.id}>
                  <div className="todo-heading">{todo.name}</div>
                  <button
                    className="todo-edit"
                    onClick={() => {
                      handleEdit(todo.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="todo-remove"
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
                <p> Are you sure to remove the task ?</p>
              </div>
              <div className="modal-btns">
                <button
                  className="todo-remove btn-yes"
                  onClick={() => RemoveTodo()}
                >
                  Yes
                </button>
                <button
                  className="todo-remove btn-no"
                  onClick={() => {
                    showContents();
                  }}
                >
                  No
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
