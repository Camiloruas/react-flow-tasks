// Importa o ícone do lucide-react.
import { ChevronLeftIcon } from 'lucide-react';
// Importa os hooks useNavigate e useSearchParams do react-router-dom.
import { useNavigate, useSearchParams } from 'react-router-dom'; // ← Corrigido aqui
// Importa o componente de rodapé.
import Footer from '../components/Footer'; // Importe o componente Footer

// Define o componente da página de detalhes da tarefa.
function Taskpages() {
  // Inicializa o hook useNavigate para navegar entre as páginas.
  const navigate = useNavigate(); // ← Agora funciona
  // Inicializa o hook useSearchParams para obter os parâmetros de consulta da URL.
  const [searchParams] = useSearchParams();
  // Obtém o título da tarefa dos parâmetros de consulta.
  const title = searchParams.get('title');
  // Obtém a descrição da tarefa dos parâmetros de consulta.
  const description = searchParams.get('description');

  // Renderiza a página de detalhes da tarefa.
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          {/* Botão para voltar para a página anterior. */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h2 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes das Tarefas
          </h2>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-2xl text-slate-100 font-bold">
            Detalhes da Tarefa
          </h2>
          {/* Exibe o título e a descrição da tarefa. */}
          <p className="text-slate-200"><strong>Título:</strong> {title}</p>
          <p className="text-slate-200"><strong>Descrição:</strong> {description}</p>
        </div>
        {/* Componente de rodapé. */}
        <Footer />
      </div>
    </div>
  );
}

// Exporta o componente Taskpages para ser usado em outros lugares da aplicação.
export default Taskpages;
