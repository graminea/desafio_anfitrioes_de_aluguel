# Desafio Anfitriões de Aluguel

Este é um projeto web que apresenta uma interface para busca de acomodações, permitindo a busca por cidade ou por ID. Ele é composto de um backend em Flask e um frontend em React.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

1. **Backend**:
   - Implementado em Python utilizando Flask.
   - Fornece uma API REST para acessar dados das acomodações.
   - endpoints:
     - `GET /acomodacoes`: Retorna todas as acomodações.
     - `GET /acomodacoes?cidade={cidade}`: Retorna acomodações filtradas pela cidade.
     - `GET /acomodacoes/{id}`: Retorna uma acomodação pelo ID.

2. **Frontend**:
   - Desenvolvido em React e Node.js.
   - Exibe os resultados das buscas realizadas pelo usuário na API.

---

## Tecnologias Utilizadas

- **Frontend**:
  - JS: acomodacoes.js (frontend_react/src/acomodacoes.js)
  - CSS: index.css (frontend_react/src/index.css)

- **Backend**:
  - API REST: API_acomodacoes.py (backend_python_API/API_acomodacoes.py)
  - Banco: SQLite, local, acomodacoes.db (backend_python_API/acomodacoes.db)


## Como Executar o Projeto

### Requisitos:
- [Docker]
- [Docker Compose]

1. Clone este repositório:
   ```bash
   git clone https://github.com/graminea/desafio_anfitrioes_de_aluguel.git
   cd desafio_anfitrioes_de_aluguel
   ```
3. Com o docker aberto, execute o Docker Compose:
   ```bash
   docker-compose up --build
   ```
5. Acesse a aplicação no navegador:
   ```
   http://localhost
   ```
## Contribuição

Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório original:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.



