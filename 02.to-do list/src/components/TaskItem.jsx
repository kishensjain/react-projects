import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

function TaskItem({ task, index, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(task);

  const saveEdit = () => {
    if (editInput.trim()) {
      onUpdate(index, editInput);
      setIsEditing(false);
    } else {
      alert("Task can't be empty!");
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
            autoFocus
          />
          <button className="btn save" onClick={saveEdit}>
            <FaCheck />
          </button>
        </>
      ) : (
        <>
          {task}
          <button className="btn edit" onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
          <button className="btn remove" onClick={() => onRemove(index)}>
            <FaTrash />
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
