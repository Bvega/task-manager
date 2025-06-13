import React from 'react';
import { TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const { id, title, description, status, priority, dueDate } = task;

  // Build class list based on status and priority
  const classes = [
    'task-item',
    status === 'completed' ? 'task-completed' : '',
    `priority-${priority}`,
  ].join(' ');

  return (
    <div className={classes}>
      {/* Header: title and delete button */}
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

      {/* Footer: priority and formatted due date */}
      <div className="text-sm text-gray-600">
        <span>Priority: {priority}</span> |{' '}
        <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
};
