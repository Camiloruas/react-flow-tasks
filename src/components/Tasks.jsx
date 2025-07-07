import { ChevronRightIcon, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  }

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
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
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
