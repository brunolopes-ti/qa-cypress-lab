# QA Cypress Lab

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-Test%20Automation-yellow)
![BDD](https://img.shields.io/badge/BDD-Behavior%20Driven%20Development-blueviolet)
![Gherkin](https://img.shields.io/badge/Gherkin-Feature%20Files-green)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)

Projeto de portfólio desenvolvido para praticar e documentar **automação de testes Web end-to-end com Cypress e JavaScript**, combinando testes tradicionais com cenários BDD escritos em **Gherkin**.

A suíte automatiza fluxos funcionais do SauceDemo, incluindo autenticação, carrinho e checkout, com cenários positivos e negativos, assertions, evidências e execução em modo headless pelo terminal.

---

## Stack e práticas utilizadas

- Cypress;
- JavaScript;
- Node.js;
- BDD;
- Gherkin;
- Cucumber;
- Git;
- GitHub.

A integração dos arquivos `.feature` com o Cypress é realizada por meio do pacote `@badeball/cypress-cucumber-preprocessor`.

---

## Sistema utilizado para teste

**Aplicação:** [SauceDemo](https://www.saucedemo.com/)

O SauceDemo é uma aplicação Web utilizada para estudos e práticas de Quality Assurance, permitindo testar fluxos como autenticação, catálogo de produtos, carrinho e checkout.

---

## Escopo da automação

A suíte cobre:

- Login com usuário válido;
- Login com credenciais inválidas;
- Login com usuário bloqueado;
- Adição de produto ao carrinho;
- Atualização do contador com múltiplos produtos;
- Validação de produto no carrinho;
- Remoção de produto do carrinho;
- Checkout completo;
- Cenários BDD escritos em Gherkin;
- Step Definitions em JavaScript;
- Execução de testes Cypress tradicionais e BDD;
- Execução completa da suíte em modo headless.

---

## Estratégia de automação

O projeto utiliza duas abordagens no mesmo conjunto de testes.

### Cypress tradicional

Testes escritos diretamente em JavaScript:

```text
saucedemo-login.cy.js
saucedemo-cart.cy.js
saucedemo-checkout.cy.js
```

São **7 testes automatizados tradicionais**, distribuídos entre login, carrinho e checkout.

### Cypress com BDD

Os comportamentos são descritos em arquivos `.feature` utilizando Gherkin:

```text
login.feature
cart.feature
checkout.feature
```

As respectivas Step Definitions são implementadas em JavaScript:

```text
login.js
cart.js
checkout.js
```

São **6 cenários BDD**.

Essa abordagem separa a descrição do comportamento esperado da implementação técnica dos passos automatizados.

---

## Estrutura principal do projeto

```text
qa-cypress-lab/
├── cypress/
│   ├── e2e/
│   │   ├── saucedemo-login.cy.js
│   │   ├── saucedemo-cart.cy.js
│   │   ├── saucedemo-checkout.cy.js
│   │   ├── login.feature
│   │   ├── login.js
│   │   ├── cart.feature
│   │   ├── cart.js
│   │   ├── checkout.feature
│   │   └── checkout.js
│   ├── cypress.config.js
│   ├── package.json
│   └── package-lock.json
├── docs/
│   └── evidencias/
│       └── cypress/
├── .gitignore
└── README.md
```

---

## Como executar o projeto

Acesse a pasta do Cypress:

```bash
cd cypress
```

Instale as dependências:

```bash
npm install
```

### Abrir o Cypress em modo interativo

```bash
npm run cypress:open
```

ou:

```bash
npx cypress open
```

### Executar toda a suíte

```bash
npx cypress run
```

Esse comando executa os testes tradicionais `.cy.js` e os cenários BDD `.feature`.

### Executar somente os cenários BDD

```bash
npx cypress run --spec "e2e/**/*.feature"
```

### Executar somente os testes tradicionais de login

```bash
npx cypress run --spec "e2e/saucedemo-login.cy.js"
```

### Executar somente os testes tradicionais de carrinho

```bash
npx cypress run --spec "e2e/saucedemo-cart.cy.js"
```

### Executar somente o teste tradicional de checkout

```bash
npx cypress run --spec "e2e/saucedemo-checkout.cy.js"
```

---

# Testes tradicionais Cypress

## Login

Arquivo:

```text
cypress/e2e/saucedemo-login.cy.js
```

Cenários:

1. Login válido;
2. Login com credenciais inválidas;
3. Login com usuário bloqueado.

---

## Carrinho

Arquivo:

```text
cypress/e2e/saucedemo-cart.cy.js
```

Cenários:

1. Adicionar um produto ao carrinho;
2. Adicionar dois produtos e validar o contador;
3. Validar produto, preço e botão de checkout na página do carrinho.

---

## Checkout

Arquivo:

```text
cypress/e2e/saucedemo-checkout.cy.js
```

Cenário:

1. Realizar checkout completo com sucesso.

---

# Cenários automatizados tradicionais

## CT-01 - Login válido

**Objetivo:** validar que um usuário com credenciais corretas consegue acessar a página de produtos.

**Dados utilizados:**

| Campo | Valor |
|---|---|
| Usuário | `standard_user` |
| Senha | `secret_sauce` |

**Validações:**

- Redirecionamento para `/inventory.html`;
- Exibição do título `Products`;
- Exibição da lista de produtos.

---

## CT-02 - Login inválido

**Objetivo:** validar que o sistema rejeita credenciais inválidas.

**Dados utilizados:**

| Campo | Valor |
|---|---|
| Usuário | `usuario_invalido` |
| Senha | `senha_invalida` |

**Validações:**

- Exibição da mensagem de erro;
- Permanência na página de login.

---

## CT-03 - Login com usuário bloqueado

**Objetivo:** validar que um usuário bloqueado não consegue acessar o sistema.

**Dados utilizados:**

| Campo | Valor |
|---|---|
| Usuário | `locked_out_user` |
| Senha | `secret_sauce` |

**Validações:**

- Exibição da mensagem informando que o usuário está bloqueado;
- Permanência na página de login.

---

## CT-04 - Adicionar produto ao carrinho

**Objetivo:** validar que um produto pode ser adicionado ao carrinho.

**Produto utilizado:**

`Sauce Labs Backpack`

**Validações:**

- Adição do produto;
- Contador do carrinho com valor `1`;
- Exibição do botão `Remove`.

---

## CT-05 - Atualizar contador com dois produtos

**Objetivo:** validar que o contador do carrinho é atualizado corretamente após a inclusão de dois produtos.

**Produtos utilizados:**

- `Sauce Labs Backpack`;
- `Sauce Labs Bike Light`.

**Validações:**

- Adição dos dois produtos;
- Contador do carrinho com valor `2`;
- Exibição do botão `Remove` para os dois produtos.

---

## CT-06 - Validar produto na página do carrinho

**Objetivo:** validar que o produto adicionado é apresentado corretamente no carrinho.

**Validações:**

- Redirecionamento para `/cart.html`;
- Exibição do título `Your Cart`;
- Exibição do produto `Sauce Labs Backpack`;
- Exibição do preço `$29.99`;
- Exibição do botão `Checkout`.

---

## CT-07 - Checkout completo

**Objetivo:** validar o fluxo completo de compra até a confirmação do pedido.

**Dados utilizados:**

| Campo | Valor |
|---|---|
| Nome | `Bruno` |
| Sobrenome | `Ramos` |
| CEP | `72000-000` |

**Validações:**

- Acesso à etapa de informações do checkout;
- Preenchimento dos dados obrigatórios;
- Acesso ao resumo da compra;
- Validação do produto;
- Validação do preço;
- Validação do subtotal;
- Finalização da compra;
- Exibição da mensagem `Thank you for your order!`.

---

# Cenários BDD

Os cenários BDD foram escritos em português utilizando Gherkin.

---

## Feature: Login

Arquivo:

```text
cypress/e2e/login.feature
```

Cenários:

1. Login realizado com sucesso;
2. Login com credenciais inválidas;
3. Login com usuário bloqueado.

Exemplo:

```gherkin
Cenário: Login realizado com sucesso
  Dado que estou na página de login do SauceDemo
  Quando informo usuário e senha válidos
  E clico no botão de login
  Então devo visualizar a página de produtos
```

---

## Feature: Carrinho

Arquivo:

```text
cypress/e2e/cart.feature
```

Cenários:

1. Adicionar produto ao carrinho;
2. Remover produto do carrinho.

A feature utiliza `Contexto` para definir a autenticação como pré-condição comum dos cenários.

---

## Feature: Checkout

Arquivo:

```text
cypress/e2e/checkout.feature
```

Cenário:

1. Finalizar compra com sucesso.

O fluxo contempla:

- Autenticação;
- Inclusão de produto no carrinho;
- Acesso ao carrinho;
- Início do checkout;
- Preenchimento dos dados obrigatórios;
- Acesso à revisão do pedido;
- Finalização da compra;
- Validação da confirmação do pedido.

---

# Resultado dos testes BDD

Comando:

```bash
npx cypress run --spec "e2e/**/*.feature"
```

Resultado documentado:

```text
cart.feature        2 testes passando
checkout.feature    1 teste passando
login.feature       3 testes passando

Total: 6 testes passando
All specs passed!
```

### Evidência

![Suíte BDD completa](docs/evidencias/cypress/bdd-suite-completa.png)

---

# Resultado da suíte completa

Os testes Cypress tradicionais e os cenários BDD foram executados em conjunto.

Comando:

```bash
npx cypress run
```

Resultado documentado:

```text
saucedemo-cart.cy.js        3 testes passando
saucedemo-checkout.cy.js    1 teste passando
saucedemo-login.cy.js       3 testes passando
cart.feature                2 testes passando
checkout.feature            1 teste passando
login.feature               3 testes passando

Total: 13 testes passando
```

Resultado final:

```text
All specs passed!
13 passing
0 failing
```

### Evidência principal

![Suíte completa Cypress e BDD](docs/evidencias/cypress/suite-completa-cypress-bdd-13-testes.png)

---

# Configuração do Cypress

O arquivo:

```text
cypress/cypress.config.js
```

configura o projeto para reconhecer tanto os testes tradicionais `.cy.js` quanto os arquivos `.feature`.

```javascript
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

const {
  addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');

const {
  createEsbuildPlugin
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'e2e/**/*.cy.js',
      'e2e/**/*.feature'
    ],

    supportFile: false,

    screenshotsFolder: 'screenshots',
    videosFolder: 'videos',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      return config;
    }
  }
});
```

Para o processamento dos arquivos `.feature`, o projeto utiliza:

- `@badeball/cypress-cucumber-preprocessor`;
- `@bahmutov/cypress-esbuild-preprocessor`;
- `esbuild`.

Essas dependências fazem parte da configuração técnica do BDD e não são apresentadas como tecnologias principais do projeto.

---

# Boas práticas aplicadas

- Organização dos testes por fluxo funcional;
- Uso de seletores estáveis com `data-test`;
- Cenários positivos e negativos;
- Assertions de URL, textos, elementos e estados da interface;
- Separação entre arquivos `.feature` e Step Definitions;
- Cenários BDD escritos em Gherkin;
- Uso de `Contexto` para pré-condições compartilhadas;
- Execução individual de arquivos de teste;
- Execução completa da suíte em modo headless;
- Evidências de execução;
- Versionamento com Git e GitHub.

---

# Competências demonstradas

O projeto demonstra experiência prática com:

- Automação de testes Web;
- Testes end-to-end;
- Testes funcionais automatizados;
- Cypress;
- JavaScript;
- Node.js;
- BDD;
- Gherkin;
- Step Definitions;
- Cenários positivos e negativos;
- Seletores Web;
- Assertions;
- Automação de login, carrinho e checkout;
- Execução headless;
- Git e GitHub;
- Documentação técnica;
- Evidências de execução.

---

# Evidências

As evidências do projeto estão organizadas em:

```text
docs/evidencias/cypress
```

A pasta automática de screenshots gerada durante a execução do Cypress é ignorada pelo Git, evitando o versionamento de arquivos temporários.

---

# Status do projeto

**Concluído.**

O projeto demonstra uma suíte funcional de automação Web com Cypress contendo:

- 7 testes tradicionais;
- 6 cenários BDD;
- 13 testes na execução completa documentada;
- Cenários positivos e negativos;
- Automação de login, carrinho e checkout;
- BDD com Gherkin;
- Step Definitions em JavaScript;
- Execução headless;
- Evidências de execução;
- Documentação técnica.

---

# Autor

**Bruno Ramos Lopes**

LinkedIn: [linkedin.com/in/brunolopes-ti](https://linkedin.com/in/brunolopes-ti)  
GitHub: [github.com/brunolopes-ti](https://github.com/brunolopes-ti)