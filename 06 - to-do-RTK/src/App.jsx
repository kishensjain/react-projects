import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlice.js';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.darkMode);
  console.log("Dark mode is:", isDark);


  return (
    <div className={isDark ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className="p-4 flex justify-between items-center max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">📝 Redux To-Do</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-3 py-1 rounded-md border border-gray-500 dark:border-gray-300 cursor-pointer"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <TodoList />
    </div>
  );
}

export default App;
