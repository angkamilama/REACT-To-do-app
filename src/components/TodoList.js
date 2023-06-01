import { useState } from "react";

function TodoList(props) {
  const [topicEdit, setTopicEdit] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [removeId, setRemoveId] = useState("");

  const handleTopicEdit = (val) => {
    setTopicEdit((topicEdit) => !topicEdit);
  };

  const showContents = (val) => {
    setShowPop((showPop) => !showPop);
    setRemoveId((removeId) => val);
  };

  const RemoveTopic = (props) => {
    setShowPop((showPop) => !showPop);
    const updatedTodoTopic = props.todoTopic.filter(
      (todo) => todo.id !== removeId
    );
    props.handleSubmit(updatedTodoTopic);
  };

  return (
    <div className="lists">
      <div className="topics">
        {/* {todoTopic.map((list) => {
          return (
            <div className="topic-background">
              <div className="topic" key={list.id}>
                <div className="topic-heading">{list.name}</div>
                <button
                  className="topic-details"
                  onClick={() => handleTopicEdit(list.name)}
                >
                  Edit
                </button>
                <button
                  className="topic-details"
                  onClick={() => showContents(list.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default TodoList;

{
  /* {topicEdit && (
                    <form>
                      <label>
                        <p>Tasks:</p>
                        <input
                          name="myInput"
                          value={inputValue}
                          className="input-box"
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                      </label>
                      <button type="submit">Edit</button>
                    </form>
                  )} */
}
