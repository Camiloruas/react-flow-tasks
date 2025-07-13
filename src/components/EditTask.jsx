
// Importa o hook useState do React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa o PropTypes para validar as propriedades recebidas pelo componente.
import PropTypes from 'prop-types';

// Define o componente para editar uma tarefa existente.
function EditTask({ task, onTaskEdit, onCancel }) {
  // Cria um estado para armazenar o título da tarefa em edição, inicializado com o título da tarefa atual.
  const [title, setTitle] = useState(task.title);
  // Cria um estado para armazenar a descrição da tarefa em edição, inicializado com a descrição da tarefa atual.
  const [description, setDescription] = useState(task.description);

  // Renderiza o modal de edição de tarefa.
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Editar Tarefa</h2>
        <div className="space-y-4">
          {/* Campo de entrada para o título da tarefa. */}
          <input
            type="text"
            placeholder="Digite o título da tarefa"
            className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* Campo de entrada para a descrição da tarefa. */}
          <input
            type="text"
            placeholder="Digite a descrição da tarefa"
            className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-end md:space-x-4 mt-6">
          {/* Botão para cancelar a edição e fechar o modal. */}
          <button
            onClick={onCancel}
            className="bg-slate-400 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
          >
            Cancelar
          </button>
          {/* Botão para salvar as alterações na tarefa. */}
          <button
            onClick={() => {
              // Verifica se o título e a descrição não estão vazios.
              if (!title.trim() || !description.trim()) {
                return alert('Por favor, preencha o título e a descrição da tarefa.');
              }
              // Chama a função onTaskEdit, passando o ID da tarefa e os novos título e descrição.
              onTaskEdit(task.id, title, description);
            }}
            className="bg-slate-500 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente EditTask para ser usado em outros lugares da aplicação.
export default EditTask;

// Define as PropTypes para o componente EditTask, garantindo que as propriedades task, onTaskEdit e onCancel sejam do tipo correto e obrigatórias.
EditTask.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
