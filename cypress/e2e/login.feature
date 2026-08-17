# language: pt

Funcionalidade: Login no SauceDemo

  Como usuário do sistema
  Quero realizar login
  Para acessar a área de produtos

  Cenário: Login realizado com sucesso
    Dado que estou na página de login do SauceDemo
    Quando informo usuário e senha válidos
    E clico no botão de login
    Então devo visualizar a página de produtos

  Cenário: Login com credenciais inválidas
    Dado que estou na página de login do SauceDemo
    Quando informo credenciais inválidas
    E clico no botão de login
    Então devo visualizar uma mensagem de erro de credenciais inválidas

  Cenário: Login com usuário bloqueado
    Dado que estou na página de login do SauceDemo
    Quando informo as credenciais de um usuário bloqueado
    E clico no botão de login
    Então devo visualizar uma mensagem informando que o usuário está bloqueado