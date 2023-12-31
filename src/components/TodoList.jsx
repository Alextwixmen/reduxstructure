import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
import { selectVisibleTodos } from '../store/todos/todos-selector';
import { useParams } from 'react-router-dom';
export const TodoList = () => {
  const dispatch = useDispatch();
  // const activeFilter = useSelector(selectActiveFilter);
  const { filter } = useParams();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>del</button>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
          </li>
        );
      })}
    </ul>
  );
};
