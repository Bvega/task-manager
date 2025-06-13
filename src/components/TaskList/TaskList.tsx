// src/components/TaskList/TaskList.tsx

import { useState, useEffect } from 'react';
import type { TaskListProps, Task } from '../../types';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskItem } from '../TaskItem/TaskItem';

export function TaskList({ tasks: initialTasks, onStatusChange, onDelete }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{ status?: string; priority?: string }>({});

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleFilterChange = (newFilters: { status?: string; priority?: string }) => {
    setFilters(newFilters);
  };

  // Apply filters
  const filteredTasks = tasks.filter(task =>
    (!filters.status || task.status === filters.status) &&
    (!filters.priority || task.priority === filters.priority)
  );

  // Counters
  const total = tasks.length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const pendingCount = total - completedCount;

  // Clear completed tasks
  const clearCompleted = () => {
    tasks
      .filter(t => t.status === 'completed')
      .forEach(t => onDelete(t.id));
  };

  return (
    <div>
      {/* Counters & Clear */}
      <div className="flex justify-between items-center mb-4">
        <span>{pendingCount} tasks left</span>
        <span>{completedCount} completed</span>
        <button
          onClick={clearCompleted}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Completed
        </button>
      </div>

      {/* Filtering UI */}
      <TaskFilter onFilterChange={handleFilterChange} />

      {/* Task list */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={(id: string) => {
              onDelete(id);
            }}
          />
        ))
      ) : (
        <p>No tasks match your criteria.</p>
      )}
    </div>
  );
}
