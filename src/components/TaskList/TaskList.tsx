import React, { useState, useEffect } from 'react';
import { TaskListProps, Task } from '../../types';
import { TaskItem } from '../TaskItem/TaskItem';
import { TaskFilter } from '../TaskFilter/TaskFilter';

export const TaskList: React.FC<TaskListProps> = ({
  tasks: initialTasks,
  onStatusChange,
  onDelete,
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{ status?: string; priority?: string }>({});

  // Update local tasks when initialTasks prop changes
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  // Handle filter change
  const handleFilterChange = (newFilters: { status?: string; priority?: string }) => {
    setFilters(newFilters);
  };

  // Apply filters to tasks
  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  return (
    <div>
      {/* Filtering UI */}
      <TaskFilter onFilterChange={handleFilterChange} />

      {/* Task list */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={(id) => {
              onDelete(id);
              setTasks((prev) => prev.filter((t) => t.id !== id));
            }}
          />
        ))
      ) : (
        <p>No tasks match your criteria.</p>
      )}
    </div>
  );
};
