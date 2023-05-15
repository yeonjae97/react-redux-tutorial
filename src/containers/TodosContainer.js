// import React from 'react';
// import { changeInput, insert, toggle, remove } from '../modules/todos';
// import Todos from '../components/Todos';
// import { connect } from 'react-redux';

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove} />
      
//   );
// };

// export default connect(
//   ({todos}) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);








//////////////////////////////////////////////// Hooks 로 전환 ////////////////////////////////////////////////////////////////////////




import React, { useCallback } from 'react';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';

const TodosContainer = () => {
  const  {input, todos} = useSelector(({todos}) => ({
    input: todos.input,
    todos: todos.todos
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove} />
      
  );
};

export default React.memo(TodosContainer);


