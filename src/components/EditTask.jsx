
import { useState } from 'react';
import PropTypes from 'prop-types';

function EditTask({ task, onTaskEdit, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Editar Tarefa</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Digite o título da tarefa"
            className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite a descrição da tarefa"
            className="p-2 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-end md:space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="bg-slate-400 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              if (!title.trim() || !description.trim()) {
                return alert('Por favor, preencha o título e a descrição da tarefa.');
              }
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

export default EditTask;

EditTask.propTypes = {
  task: PropTypes.object.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
