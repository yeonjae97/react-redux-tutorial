import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
  return (
    <div>
      <input 
        type='checkbox' 
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}/>
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none'}}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};



const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');    
  };
  const onChange = e => {
    // 이벤트 발생시에 문제가 생긴다면 e에 대한 로깅 작업을 해야한다.
    // console.log(e);
    // console.log(e.target);
    onChangeInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove} />
        ))}
        {/* // <TodoItem />
        // <TodoItem />
        // <TodoItem />
        // <TodoItem />
        // <TodoItem /> */}
      </div>
    </div>
  )
};

export default Todos;