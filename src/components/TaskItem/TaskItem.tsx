import React from 'react';
import { TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const { id, title, description, status, priority, dueDate } = task;

  // Determine style based on status
  const itemClass = status === 'completed' ? 'line-through opacity-50' : '';

  return (
    <div className={`p-4 mb-2 border rounded ${itemClass}`} key={id}>
      {/* Task header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={() => onDelete(id)} aria-label="Delete task">
          🗑️
        </button>
      </div>

      {/* Description */}
      <p className="mb-2">{description}</p>

      {/* Status selector */}
      <select
        value={status}
        onChange={(e) => onStatusChange(id, e.target.value as any)}
        className="mb-2"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Footer with priority and due date */}
      <div className="text-sm text-gray-600">
        <span>Priority: {priority}</span> | <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
};
