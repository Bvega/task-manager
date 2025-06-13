import type { TaskItemProps } from '../../types';

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  const { id, title, description, status, priority, dueDate } = task;

  const classes = [
    'task-item',
    status === 'completed' ? 'task-completed' : '',
    `priority-${priority}`,
  ].join(' ');

  const statuses: Array<{ key: typeof status; label: string }> = [
    { key: 'pending', label: 'Pending' },
    { key: 'in-progress', label: 'In Progress' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className={classes}>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={() => onDelete(id)} aria-label="Delete task">
          🗑️
        </button>
      </div>

      {/* Description */}
      <p className="mb-2">{description}</p>

      {/* Status badges */}
      <div className="status-badges">
        {statuses.map(s => (
          <span
            key={s.key}
            className={[
              'status-badge',
              s.key,
              status === s.key ? 'selected' : '',
            ].join(' ')}
            onClick={() => onStatusChange(id, s.key)}
          >
            {s.label}
          </span>
        ))}
      </div>

      {/* Priority & Due Date */}
      <div className="text-sm text-gray-600">
        <span>Priority: {priority}</span> |{' '}
        <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
