import { useState, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Input() {
  const [inputValue, setInputValue] = useState([]);
  const inputRef = useRef("");

  const a = () => {
    let inputText = inputRef.current.value;
    setInputValue((inputValue) => [...inputValue, inputText]);
  };

  const deleteTopic = (event) => {
    const selectedTopic = event.target.parentElement;
    selectedTopic.remove();
  };

  return (
    <>
      <div className="input-container">
        <input type="text" ref={inputRef} placeholder="Create a task!!!" />
        <button type="submit" onClick={a}>
          ADD
        </button>
      </div>
      <div>
        <div className="lists">
          <div className="topics">
            {inputValue.map((list) => {
              return (
                <div className="topic">
                  <div className="topic-heading" key={inputValue.indexOf(list)}>
                    {list}
                  </div>
                  <FaRegTrashAlt
                    className="topic-delete"
                    onClick={deleteTopic}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
