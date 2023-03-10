import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");

  //조회하기
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    setTodos(data);
  };

  //추가하기
  const onSubmitHandler = async () => {
    axios.post("http://localhost:4000/todos", inputValue);
    // setTodos([...todos, inputValue]);
    fetchTodos();
  };

  //삭제하기
  const onDeleteButtonClickHandler = async id => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    setTodos(
      todos.filter(item => {
        return item.id !== id;
      })
    );
  };

  //수정하기
  const onUpdateButtonClickHandler = async () => {
    axios.patch(`http://localhost:4000/todos/${targetId}`, {
      title: contents,
    });

    setTodos(
      todos.map(item => {
        if (item.id == targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    //db로부터 값을 가져옴
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정영역 */}
        <input
          placeholder="수정할 아이디"
          value={targetId}
          onChange={e => {
            setTargetId(e.target.value);
          }}
        />
        <input
          placeholder="수정할 내용"
          value={contents}
          onChange={e => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/* input 영역 */}
        <form
          onSubmit={e => {
            e.preventDefault();

            //버튼 클릭 시, input에 들어있는 값(state)을 이용하여 db에 저장(post요청)
            onSubmitHandler();
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={e => {
              setInputValue({
                title: e.target.value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </div>

      <div>
        {/* 데이터 영역 */}
        {/* todos 뒤의 ?. = 옵셔널체이닝 */}
        {todos?.map(item => {
          return (
            <div key={item.id}>
              {item.id}: {item.title}
              &nbsp;
              <button onClick={() => onDeleteButtonClickHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
