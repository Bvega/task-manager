import { useState } from 'react';
import type { TaskFormProps } from '../../types';

export function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;
    onAdd({ title, description, priority, dueDate });
    setTitle('');
    setDescription('');
    setPriority('low');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center space-x-2 mb-4">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
        className="flex-1 p-2 border rounded"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className="flex-1 p-2 border rounded"
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value as any)}
        className="p-2 border rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add
      </button>
    </form>
  );
}
