import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filter';
export default function App() {
  return (
    <div className='App'>
      <h1>Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}
