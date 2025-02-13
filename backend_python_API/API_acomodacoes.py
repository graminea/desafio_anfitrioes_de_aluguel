import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS


sistema_aluguel = Flask(__name__) # inicia o flask

CORS(sistema_aluguel) # necessario para algumas permissões 

def conectar_banco():
    return sqlite3.connect("acomodacoes.db")


@sistema_aluguel.route("/acomodacoes", methods=['GET']) # rota para listar todas as acomodações ou filtrar por cidade.
def get_acomodacoes(): 
    connector = conectar_banco()   # conecta ao banco acomodacoes.db
    cursor = connector.cursor()
    
    cidade = request.args.get('cidade')     # obtém o parâmetro (opicional) "cidade"
    
    if cidade:                              # se informado, retorna apenas as acomodações dessa cidade.
        cursor.execute("SELECT * FROM acomodacoes WHERE localizacao LIKE ?", (f"{cidade}%",)) # seleciona na tabela acomodacoes todas as acomodacoes com "localizacao" = cidade selecionada
    else:                                                                                     # uso do '?' evita hijacks por uma chamada maliciosa
        cursor.execute("SELECT * FROM acomodacoes") # seleciona todas as acomodacoes da tabela
    
    dados = cursor.fetchall()
    connector.close()
    
    acomodacoes = []
    for dado in dados:
        acomodacoes.append({"id": dado[0], 
                            "nome": dado[1], 
                            "localizacao": dado[2], 
                            "preco_noite": dado[3],
                            "imagem": dado[4]})
    return jsonify(acomodacoes)

@sistema_aluguel.route("/acomodacoes/<int:id>", methods=['GET']) # rota para buscar uma acomodação específica pelo id.
def get_acomodação_por_id(id):
    connector = conectar_banco()   # conecta ao banco acomodacoes.db
    cursor = connector.cursor()
    
    cursor.execute("SELECT * FROM acomodacoes WHERE id =?", (id,)) # seleciona na tabela acmodacoes do banco todas as que tem o "id" == id selecionado
    
    dado = cursor.fetchone()
    connector.close()
    
    if dado:
        return jsonify({"id": dado[0], 
                        "nome": dado[1], 
                        "localizacao": dado[2], 
                        "preco_noite": dado[3],
                        "imagem": dado[4]})
    else:
        return jsonify({"erro": "Acomodação não encontrada"}), 404

if __name__ == '__main__':
    sistema_aluguel.run(host="0.0.0.0", port=5000)  # roda a API na porta 5000, localhost. 0.0.0.0 para aceitar request de fora do container do backend.




