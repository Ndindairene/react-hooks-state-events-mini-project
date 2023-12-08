import React from "react";
import Task from "./Task"; // assuming Task component is in the same directory

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task
          key={`${task.category}-${task.text}-${index}`}
          category={task.category}
          text={task.text}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;