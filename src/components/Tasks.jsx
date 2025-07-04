import { ChevronRightIcon, TrashIcon } from 'lucide-react';

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isComplete ? 'line-through' : ''}`}
          >
            {task.title}
          </button>
          <span className="mx-1"></span>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <span className="mx-1"></span>
          <button
            onClick={() => onTaskDelete(task.id)} // CORRIGIDO: agora chama a função corretamente
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
