import TaskItem from "./TaskItem";

function TaskList({ tasks, onRemove, onUpdate }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          onRemove={onRemove} 
          onUpdate={onUpdate} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
