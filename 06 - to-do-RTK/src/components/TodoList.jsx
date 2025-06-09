import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todos/todoSlice.js";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Input + Add */}
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
          placeholder="Add a task..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md shadow"
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`flex-grow cursor-pointer select-none ${
                  todo.completed
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                ✕
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;
