import React, { useState } from 'react';
import { TaskFilterProps } from '../../types';

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  // Local filter state
  const [status, setStatus] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  // Handle whenever filter options change
  const handleChange = () => {
    onFilterChange({
      status: status || undefined,
      priority: priority || undefined,
    });
  };

  return (
    <div className="flex space-x-4 mb-4">
      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => { setStatus(e.target.value); handleChange(); }}
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => { setPriority(e.target.value); handleChange(); }}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};
