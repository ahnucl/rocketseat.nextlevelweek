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

- Observação sobre git:
> tive um problema porque criei um submodulo sem querer. No github, esse submodulo se perde porque de fato não existia... Para remover, tive que garantir que não havia referencia ao submodulo no .gitconfig e no .gitmodules (esse arquivo nem existia...); depois foi preciso remover o submodulo da cache: ```git rm --cached mobile```; depois disso o diretório voltou a aparecer como um objeto monitorado normalmente pelo git;

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

### Banco de dados

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

## Dia 3

- React pode ser usado para construir vários tipos de interface: web, mobile, VR, desktop; Microsoft usa no Office... 

- ReactDOM: React na Web - integração com a DOM

- Configurações do emmet para js: 
```
"emmet.syntaxProfiles": { "javascript": "jsx" },
"emmet.includeLanguages": { "javascript": "javascriptreact"},
```

- Extensão **tsx** -> TypeScript com JSX

- "Ligature fonts" (Ex.; Fira Code)

- Generics dentro do TypeScript: tipo que pode receber um parâmetro; Como no Java: "< >";
> React.FC : "Functinal Component", generic para usar componentes funcionais stateless; lembrando que componentes com estado já herdam da React.Component


- TypeScript tem **interfaces**

- o useState permite adicionar estado a um componente stateless; única função?
> basicamente: useState recebe o valor inicial como parâmetro e retorna um array cujo primeiro elemento, índice 0, é a variável de estado e o segundo elemento uma função que modifica esse estado, setando-o ao seu argumento; usar desestruturação para receber esse retorno;

- Imutabilidade gera melhorias na performance da aplicação;

- A alteração de estado gera atualização de interface;

- fonte roboto; Google fonts;

- inserir ícones no React: pacote react-icons;

- roteamento: react-router-dom;

- SPA: não recarregar toda a página a cada rota;

- Usar elementos semânticos do HTML

- Melhor mapa: Google Map: possui um bom plano gratuíto mas ainda assim o cadastro é meio extenso; usar **leaflet** [https://leafletjs.com/](https://leafletjs.com/) ao invés dele; usar biblioteca React Leaflet também [https://react-leaflet.js.org/] (https://react-leaflet.js.org/)
> bom desafio -> mudar o mapa para o mapa do google

- Obtendo coordenadas: basta abrir o Maps e copiar da URL, o primeiro número é a latitude, o segundo a longitude, e o terceiro (seguido de um "z") é o zoom; Esses parâmetros devem ser passados como props para o <Map /> do leaflet;

- TileLayer -> layout do mapa; existem gratuítos;

- Instalar o axios para consumir apis; api nativa: fetch;
> o axios permite criar configurações, inclusive uma url base para as requisições do app;

- a chamada à api de items "pertence" ao componente; usar useEffect (**não** é possível usar **async/await** dentro do useEffect):
```
useEffect( () => {}, []); 
// o segundo argumento diz quando a callback do primeiro deve ser chamada; passar o um array vazio diz que ela deve ser chamada uma única vez
```

- Sempre que precisar de alguma informação proveniente de dentro do componente deve-se usar *estado*; sempre que precisar armazenar tal informação em algum lugar;

- "property 'title' does not exist on type 'never' " ->  *sempre que se cria um estado para um array ou objeto, é necessaio informar manualmente o tipo da variável que será armazenada* -> interfaces

- Buscar estados e cidades do IBGE (ibge api);

- typescript react cheat sheet -> repositório no github: [https://github.com/typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

- a passagem de referência de função sempre deve ser feita sem argumentos, pois a presenta de (...args) ao lado do nome de uma função significa a execução da mesma; passar uma arrow function nesses casos;

- useHistory do react-router-dom permite navegar entre componentes sem ter botões, apenas com código

## Dia 4

### Expo

- Instalando o expo-cli: ```npm install -g expo-cli```;

- O projeto mobile será criado com a cli do expo (e não com a do react native propriamente);

- Metro bundler: monta o "bundle": código javascript minificado que será rodado no device;

- Usei ```yarn android``` para usar o app via usb semelhente ao que seria com o react-native cli; seria possível também usar a opção *"tunnel"* para usar o celular em rede diferente da do pc;

- Expo Google Fonts; da trabalho pra fazer manualmente; instalar expo-font e as fontes desejadas:
```
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

- Importar as fontes e importar a função "useFonts" de qualquer uma das fontes;

- **Qual alternativa para o "expo/AppLoading" usar no react-native??**

- o expo já tem os *ícones*;

- *Constants* -> outro pacote do expo: ```expo install expo-constants```

### React-native

- estilizações no react-native são feitas pela propriedade "style" presente em todos os elementos;

- elementos padrão: View e Text; lembrando a estrutura do android...;

- ferramenta do Facebook: yoga -> converte css pra estilização nativa do Android/iOS;

- no react-native, por natureza, todos os elementos são "display: flex";

- **não há herança de estilos, nem cascata de estilos**; especificar uma cor num elemento não aplica a cor aos elementos aninhados a ele, por exemplo;

- "fragment": div que não muda o layout; div (web) ou View (mobilo) criam um elemento em tela; o <></> (fragment) não faz isso;

- insight: exportar imagens para devices em três tamanhos: original, 2x e 3x;

- deu algum problema no import da imagem; foi necessário usar outra sintaxe com "require" dentro de uma propriedade do componente;

- importante: designers são malucos por 8 pixels, têm até uma regra pra isso! (sarcasmo);

- Componente **ImageBackgournd** do react-native é uma View que aceita uma imagem de fundo;

- navegação entre rotas: libs **react-navigation**: ```yarn add @react-navigation/native```; após essa instalação, como estamos usando expo, rodar: ```expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view```; isso segundo a documentação do react-navigation, possivelmente está relacionado à versão do mesmo e ao problema que tive durante o Starter na hora de usar o react-navigation;

- instalar também: ```@react-navigation/stack```; navegação em pilhas;

- no mobile não tem "click", se usa "press"; onClick -> onPress;

- **Todo texto no react-native precisa estar entre tags Text**;

- extensão para usar mapas dentro do react-native: react-native-maps; instalar pelo ```expo install react-native-maps```;

- a propriedade "borderRadius" sófunciona em elementos View;

- o componente Image do react-native por padrão não entende .svg -> instalar react-native-svg

- propriedade *paddingHorizontal* ajusta apenas na horizontal mas não considera a possibilidade de scroll... é possível passar esse estilo para a propriedade contentContainerStyle do ScrollView;

- SafeAreaView do react-native faz o padding automaticamente do espaço da status bar e do fim da tela;
> Não deu muito certo no meu android, resolvi não usar;

- Sempre que se armazena um vetor no estado, é necessário informar qual o formato desse vetor;

- instalar expo-location;

- passar um objeto como segunbdo parâmetro para a função navigate seta os parâmetros de rota;

- email: expo mail composer

- whatsapp: componente Linking do react-native; todo app tem deep linking (link entre apps);

- **Desafio**: buscar estado e cidade na primeira tela do app a partir da api o IBGE (semelhante ao que foi feito no app web) -> instalar **react-native-picker-select**;

- **Subir o backend e a aplicação pro Heroku**

