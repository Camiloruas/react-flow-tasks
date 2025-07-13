// Importa os ícones do lucide-react.
import { ChevronRightIcon, TrashIcon, PencilIcon } from 'lucide-react';
// Importa o hook useNavigate do react-router-dom para navegar entre as páginas.
import { useNavigate } from 'react-router-dom';
// Importa o PropTypes para validar as propriedades recebidas pelo componente.
import PropTypes from 'prop-types';

// Define o componente que exibe a lista de tarefas.
function Tasks({ tasks, onTaskClick, onTaskDelete, onTaskEdit }) {
  // Inicializa o hook useNavigate.
  const navigate = useNavigate();

  // Função para navegar para a página de detalhes da tarefa.
  function onSeeDetailsClick(task) {
    // Cria um objeto URLSearchParams para passar os dados da tarefa como parâmetros de consulta na URL.
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    // Navega para a rota '/task' com os parâmetros de consulta.
    navigate(`/task?${query.toString()}`);
  }

  // Renderiza a lista de tarefas.
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded shadow">
      {/* Mapeia a lista de tarefas e renderiza um item de lista para cada tarefa. */}
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center">
          {/* Botão para marcar a tarefa como concluída ou não. */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isComplete ? 'line-through' : ''}`}
          >
            {task.title}
          </button>
          <span className="mx-1"></span>
          {/* Botão para ver os detalhes da tarefa. */}
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <span className="mx-1"></span>
          {/* Botão para editar a tarefa. */}
          <button
            onClick={() => onTaskEdit(task)} // Abre o modal de edição
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <PencilIcon />
          </button>
          <span className="mx-1"></span>
          {/* Botão para excluir a tarefa. */}
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

// Exporta o componente Tasks para ser usado em outros lugares da aplicação.
export default Tasks;

// Define as PropTypes para o componente Tasks, garantindo que as propriedades sejam do tipo correto e obrigatórias.
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
};
