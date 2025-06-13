```markdown
# Task Manager Lab 3

This project demonstrates:
- Dynamic list rendering with React + TypeScript.
- Proper key usage.
- Conditional rendering based on task status and priority.
- Component composition with `TaskList`, `TaskItem`, and `TaskFilter`.

## Features

- **List Rendering**: Displays tasks with unique keys.
- **Filtering**: Filter tasks by status and priority.
- **Status Update**: Change a task’s status via dropdown.
- **Deletion**: Remove tasks with a delete button.
- **Styling**: Visual feedback:
  - Strike-through & fade for completed tasks.
  - Color-coded priority indicators.
  - Hover highlight.

## Project Structure

```

task-manager/
├── public/           # Static assets
├── src/
│   ├── components/
│   │   ├── TaskFilter/    # Filter component
│   │   ├── TaskItem/      # Individual task component
│   │   └── TaskList/      # Parent list component
│   ├── types/             # TypeScript interfaces & types
│   ├── App.tsx            # Main entry
│   └── index.css          # Global styling
├── tsconfig.json
├── vite.config.ts
└── package.json

````

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
````

2. **Run development server**

   ```bash
   npm run dev
   ```

   Opens at `http://localhost:5173/`.

3. **Build for production**

   ```bash
   npm run build
   npm preview
   ```

## Reflection Questions

1. How did you ensure unique keys for list items?
2. What considerations did you make when implementing filtering?
3. How did you handle state updates for task status changes?
4. What challenges did you face with conditional rendering?

````

**Instructions:**  
1. Replace the contents of your project’s `README.md` with the above.  
2. Save and commit:

   ```bash
   git add README.md
   git commit -m "docs: update README for Lab 3"
   git push
````
