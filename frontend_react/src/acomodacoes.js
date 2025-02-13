import { useState } from "react";

function Acomodacoes() {
  const [acomodacoes, setAcomodacoes] = useState([]); // estado para armazenar as acomodações buscadas
  const [cidade, setCidade] = useState(""); // estado para o filtro por cidade
  const [id, setId] = useState(""); // estado para o filtro por ID

  // Função para buscar acomodações por cidade
  const buscarAcomodacao = () => {
    fetch(`http://localhost:5000/acomodacoes?cidade=${cidade}`)
      .then((res) => res.json())
      .then((data) => {
        setAcomodacoes(data);
        setCidade(""); // limpa o campo de entrada
        setId(""); // limpa o campo de ID
      })
      .catch((erro) => console.error("Erro ao buscar por cidade:", erro));
  };

  // Função para buscar acomodação por ID
  const buscarPorID = () => {
    fetch(`http://localhost:5000/acomodacoes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAcomodacoes([data]); 
        setCidade(""); 
        setId("");
      })
      .catch((erro) => console.error("Erro ao buscar por ID:", erro));
  };

  return (
    <div className="container">
      <h1>Lista de Acomodações</h1>

      {/* botão para buscar todas as acomodações */}
      <button onClick={buscarAcomodacao} className="button-buscar-todas">
        Buscar Todas
      </button>

      <div className="inputs-container">
        {/* input e botão para buscar por cidade */}
        <div className="input-div">
          <input
            type="text"
            value={cidade}
            onChange={(valor) => setCidade(valor.target.value)} // atualiza o estado 'cidade'
            placeholder="Digite a cidade"
            className="input"
          />
          <button onClick={buscarAcomodacao} className="buttons">
            Buscar por Cidade
          </button>
        </div>

        {/* ou para separar as buscas */}
        <div className="ou">
          <span>Ou</span>
        </div>

        {/* input e botão para buscar por ID */}
        <div className="input-div">
          <input
            type="number"
            value={id}
            onChange={(valor) => setId(valor.target.value)} // atualiza o estado 'id'
            placeholder="Digite o ID"
            className="input"
          />
          <button onClick={buscarPorID} className="buttons">
            Buscar por ID
          </button>
        </div>
      </div>

      {/* lista de acomodações retornadas */ }
      <ul className="acomodacoes-list">
        {acomodacoes.map((acomodacao) => (
          <li key={acomodacao.id}>
            <h3>{acomodacao.nome}</h3>
            <p>{acomodacao.localizacao}</p>
            <p>R$ {acomodacao.preco_noite} por noite</p>
            <img src={acomodacao.imagem} className="acomodacao-image" alt="Imagem da acomodação" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Acomodacoes;
