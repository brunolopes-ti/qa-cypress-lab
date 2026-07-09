# QA Automation Lab

Projeto de portfólio criado para praticar e documentar testes automatizados web com Cypress.

O objetivo deste projeto é demonstrar a criação de testes end-to-end, organização de evidências e evolução prática em automação de testes para QA.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- npm
- SauceDemo
- VS Code
- Git e GitHub

## Sistema utilizado para teste

Site: [SauceDemo](https://www.saucedemo.com/)

O SauceDemo é uma aplicação web de treino muito utilizada para estudos de QA, pois permite validar fluxos comuns como login, carrinho e checkout.

## Estrutura do projeto

```text
qa-automation-lab
├── cypress
│   ├── cypress
│   │   ├── e2e
│   │   │   └── saucedemo-login.cy.js
│   │   ├── fixtures
│   │   ├── screenshots
│   │   └── support
│   ├── cypress.config.js
│   ├── package.json
│   └── package-lock.json
├── docs
│   ├── evidencias
│   │   └── cypress
│   │       ├── login-valido-teste-passando.png
│   │       └── login-valido-saucedemo.png
│   ├── comparison-cypress-playwright.md
│   ├── evidence.md
│   └── test-scenarios.md
├── playwright
├── .gitignore
└── README.md
```

## Como executar o projeto

Acesse a pasta do Cypress:

```bash
cd cypress
```

Abra o Cypress:

```bash
npx cypress open
```

Depois, no Cypress:

1. Clique em `E2E Testing`;
2. Escolha o navegador;
3. Execute o arquivo `saucedemo-login.cy.js`.

## Cenários automatizados

### CT-01 - Login válido

**Objetivo:** validar que um usuário com credenciais corretas consegue acessar a página de produtos.

**Dados utilizados:**

| Campo | Valor |
|---|---|
| Usuário | `standard_user` |
| Senha | `secret_sauce` |

**Fluxo testado:**

- Acessar o site SauceDemo;
- Preencher o usuário válido;
- Preencher a senha válida;
- Clicar no botão de login;
- Validar o redirecionamento para `/inventory.html`;
- Validar a exibição do título `Products`;
- Validar a exibição da lista de produtos.

**Arquivo do teste:**

```text
cypress/cypress/e2e/saucedemo-login.cy.js
```

## Código do primeiro teste

```javascript
describe('SauceDemo - Login', () => {
  it('Deve realizar login com usuário válido', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
    cy.get('.inventory_list').should('be.visible');

    cy.screenshot('login-valido-saucedemo');
  });
});
```

## Evidências

### Teste executado com sucesso no Cypress

![Teste de login válido passando no Cypress](docs/evidencias/cypress/login-valido-teste-passando.png)

### Página de produtos após login válido

![Página de produtos após login válido](docs/evidencias/cypress/login-valido-saucedemo.png)

## Próximos cenários planejados

- Login inválido;
- Login com usuário bloqueado;
- Adição de produto ao carrinho;
- Validação do carrinho;
- Fluxo de checkout;
- Comparação prática entre Cypress e Playwright.

## Status do projeto

Em andamento.

Primeiro teste automatizado com Cypress criado e executado com sucesso.