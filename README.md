# Next Level Week

Nome e descrição do projeto: Ecoleta - Estamos na semana internacional do meio ambiente; Ecoleta serve como um mapa, um marketplace, uma conexão entre empresas ou entidades que coletam resíduos - orgânicos/inorgânicos - às pessoas que precisam descartar esses resíduos;

Pilares: Foco/Prática/Grupo

### Recursos e tecnologias:
- notion.so
- figma.com
- whimsical.com
- unsplash: repositório de imagens gratuitas
- TypeScript
-- Tipagem e IntelliSense
-- Inferência de tipos: necessidade de especificar tipos não é plena (100% do tempo), o TS vai conseguir determinar o tipo dos dados em uso
- Node.js, express
- ReactJS
- React Native, Expo
- Deep linking: acessar o Whatsapp a partir do app
- Mail Componse
- Extensões do VS Code:
-- Omni (Thema da Rocketseat baseado no Dracula)
-- Material Icon Theme

### Notas

#### Typescript
+ Quando se usa typescript, as bibliotecas precisam de uma *descrição de tipos*; algumas bibliotecas separam essas duas dependências em pacotes diferentes; exemplo: express, sendo que a própria mensagem de alerta do TS indica como instalar a descrição de tipos do express; ``` npm intall @types/express -D`` o "-D" pode ser usado pois quando a aplicação for ao ar ela será convertida em JS puro.

+ NodeJS só entende JavaScript -> ```npm install ts-node -D```;

+ Instalar o TypeScript também -> ```npm install typescript -D```; Todo projeto com typescript precisa de um arquivo de configurações que pode ser facilmente criado com: ```npx tsc --init``` ;

+ npx -> executar pacotes que foram instalados - **dentro de node_modules/.bin**; .bin contém scripts executáveis -> ```npx ts-node src/server.ts```

+ pacode ts-node-dev: monitora alterações no código; (substitui o nodemon?)
---

### Node/express

- console.log() no node printa no console que estiver rodando a aplicação

- função callback tem dois parâmetros: request e response; para retornar apenas um texto: ```response.send()```;

- extensão "json viewer" do Chrome;

- Na hora de criar um "script" no package.json, não é necessário adicionar o "npx"; chamar esse script com "npm run <nome>"

### React

- Single Page Applications;

- Criar projeto React com a ferramente "create-react-app"; para instalar ```npm install -g create-react-app``` e chamar ```create-react-app <nome>``` (Não lembro se é exatamente isso); outra forma é sem instalar o create-react-app globalmente usando npx: ```npx create-react-app <nome> --template=typescript```; usar ```--template=typescript``` para trazer as funcionalidades do TS para o projeto;



## Dia 2

- Conceitos:
-- rota: endereço completo da requiisção; https://localhost:3030/users; são semânticas;
-- recurso: qual entidade está sendo acessada; /users

- Sempre que chamar o response.json() - ou qualquer retorno de requisição - usar o "return" para garantir que o processamento acabe ali;

- Tipos de parâmetros:
> 1: Request Param: Parâmetros que vêm na própria rota e que identificam recursos; ex: (localhost:3333/users/3)
> parâmetro "obrigatório"; determinado pela rota
> acessado com request.params
> 2: Query Param: Parâmetro que vem na própria rota geralmente opcionais para filtros, paginação, etc.
> parâmetro determinado por quem faz a requisição; parâmetro **opcional**; parâmetro **não é único** (pode existir vários parâmetros com mesmo nome); 
> acessado com request.query
> 3: Request Body: Parâmetros para criação/atualização de informações
> acessado com request.body; necessário indicar ao express que o formato padrão é JSON

- Por padrão o express não começa configurado para trabalhar com JSON (api REST): ```express().use(express.json())```; o "use()" funciona como se colocasse plugins no express;

## Banco de dados

- Banco não relacional na maioria das vezes se torna menos performático se usado de forma incorreta;

- SQLite: não precisa instalar nada, um arquivo .sqlite é criado dentro da aplicação

- knex.js > biblioteca para interfacear bancos sql; [http://knexjs.org/](http://knexjs.org/)
> necessário instalar o knex e a lib apropriada do banco que será utilizado

- módulo "path" (incluso no node) -> padroniza o acesso a locais e caminhos em cada SO;

- **Variáveis globais**: __dirname, por exemplo;

- Relacionamento N-N, tabela pivot (associativa);

- Pontos no mapa são representados pelo par latitude e longitude;

- Criar banco de dados dentro do JS usando **migrations** dentro do knex
> funciona como histórico do banco de dados; a partir da execução de um comando o knex gera uma versão atualizada do banco;

- É possível customizar os ícones com o material icon configurando a propriedade "material-icon-theme.folders.associations" no settings.json do usuário; [https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- A **ordem** dos arquivos de migration é extremamente relevante! A ordem dos arquivos é a ordem que serão executados;

- Cada migration deve exportar duas funções: up()(criar a tabela) e down()(voltar atras - deletar a tabela), ambas async;
> ambas funções recebem como parâmetro a instância do knex que será usada para acessar o banco de dados;

- Necessário criar arquivo knexfile.ts; usar sintaxe "module.exports"

- Executar comando: ```npx knex migrate:latest --knexfile knexfile.ts migrate:latest```; o argumento --knexfile indica o nome/local do arquivo de configuração do knex

- Extensão SQLite do VSCode

- Um seed do knex é um "insert automático"; usar quando precisar popular a base com valores padrões - nesse caso os items;

- Servir arquivos estáticos: ```express.static('pasta', caminhoParaPasta)```;

- Acesso ao banco de dados -> **sempre usar "await" (assíncrono)**;
> erro envolvendo "circular objects";

- Serialização de dados: transformações de dados

- Usando transações com o knex: ```const trx = await knex.transaction();```, caso se queira executar statements após a criação da transação; "trx" é o nome padrão utilizado; outras formas de usar transações envolvem passar uma função como parâmetro conforme documentação do knex;

- Desacoplamento/patterns

- nomes de métodos: insert -> create (post); select * -> index (todos)/ show (único) (get); update (put); delete -> delete ou destroy (delete)

- Service Pattern / Repository Pattern (Data Mapper)

- CORS define quais endereços enxternos terão acesso à nossa aplicação - quais URL web terão acesso à aplicação

