////////// JSON SERVER ////////////



Função 

&#x20;- Facilita o desenvolvimento Front-End, pra você não ter que esperar o programador Back-End desenvolver a API.



&#x20;- Cria uma API Falsa(API rest)

&#x20;- Baseado no arquivo db.json



Instalação

&#x20;1) Abrir o terminal, pode ser do VSCode ou não e rodar o seguinte comando:

\* **npm install -g json-server** \*.



(com a flag/parâmetro) -g você instala o json-server de forma global, para qualquer projeto que você precisar usar depois.



&#x20;2) Criar o arquivo db.json na raiz do seu projeto (no VSCode)- Este arquivo serve como banco de dados do Json Server e ele mesmo controla esse arquivo a cada requisição.



Exemplo de Estrutura:



&#x20;{

&#x20;   "Rota/Endpoint": \[

&#x20;      {"id": 1, "dado-qualquer" : "valor qualquer"}

&#x20;  ]

&#x20;}



Exemplo Fictício:



{

&#x20;   "Rota/Endpoint": \[

&#x20;      {"id": 1, "nome":"Julia Mauricio", : "email" : "ju@gmail.com", "idade": 17},

&#x20;      {"id": 2, "nome":"Matheus Lima", : "email" : "mLima@gmail.com", "idade": 17}

&#x20;  ]

&#x20;}



3\) No VSCode devemos abrir o terminal e alterar para o terminal do git bash (testar o do windowa?)

&#x20;  Rodar  o comando json-server -watch db.json



