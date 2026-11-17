# Academia App

Aplicação web demonstrativa para gestão e apresentação de uma academia. O projeto foi desenvolvido como atividade prática de **Análise e Desenvolvimento de Sistemas**, com foco na construção de interfaces, organização de componentes e navegação entre áreas de uma plataforma de academia.

> **Status:** protótipo acadêmico em desenvolvimento. A integração com o Supabase ainda não foi realizada.

## Sobre o projeto

O Academia App simula uma plataforma digital para uma academia. A aplicação apresenta diferentes áreas da experiência de uso, incluindo páginas institucionais, planos, modalidades, autenticação demonstrativa e painéis destinados a alunos e administradores.

Neste momento, as telas funcionam como demonstrações de interface e fluxo de navegação. O projeto ainda não possui persistência de dados, autenticação real ou banco de dados conectado.

## Funcionalidades demonstrativas

- Página inicial com apresentação da academia;
- Navegação entre as páginas da aplicação;
- Área demonstrativa de cadastro de alunos;
- Tela de login demonstrativa;
- Painel demonstrativo do aluno;
- Painel demonstrativo administrativo;
- Exibição de planos e benefícios;
- Exibição de modalidades de treino;
- Formulário de contato;
- Componentes reutilizáveis para botões, cards, navegação e rodapé;
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- React;
- JavaScript;
- HTML5;
- CSS3;
- Vite;
- ESLint.

## Como executar o projeto

### Pré-requisitos

É necessário ter o **Node.js** e o **npm** instalados no computador.

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/HigorADS/academia-app.git
cd academia-app
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Outros comandos

Gerar a versão de produção:

```bash
npm run build
```

Executar a verificação do ESLint:

```bash
npm run lint
```

Visualizar a versão de produção localmente:

```bash
npm run preview
```

## Próximos passos

- Integrar o Supabase como backend da aplicação;
- Implementar autenticação real;
- Criar persistência para alunos, planos e modalidades;
- Conectar o formulário de contato a um serviço de envio;
- Desenvolver permissões para alunos e administradores;
- Substituir os dados demonstrativos por dados obtidos de uma API;
- Adicionar testes e aprimorar a acessibilidade.

## Observações

Os textos, planos, valores e informações apresentados na interface têm finalidade demonstrativa e acadêmica. O projeto não representa uma oferta comercial real e não deve ser utilizado para coletar dados reais enquanto não houver backend, autenticação e medidas de segurança implementados.

## Referências

\[1\] [Documentação oficial do React](https://react.dev/)
\[2\] [Documentação oficial do Vite](https://vite.dev/)
\[3\] [Documentação oficial do Supabase](https://supabase.com/docs)
\[4\] [Documentação oficial do GitHub](https://docs.github.com/)
