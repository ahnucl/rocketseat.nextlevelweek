# Next Level Week

Nome e descrição do projeto: Ecoleta - Estamos na semana internacional do meio ambiente; Ecoleta serve como um mapa, um marketplace, uma conexão entre empresas ou entidades que coletam resíduos - orgânicos/inorgânicos - às pessoas que precisam descartar esses resíduos;

### Recursos e tecnologias:
- notion.so
- figma.com
- whimsical.com
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

