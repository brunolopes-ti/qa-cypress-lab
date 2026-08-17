# language: pt

Funcionalidade: Carrinho de compras no SauceDemo

  Como usuário autenticado
  Quero gerenciar produtos no carrinho
  Para controlar os itens que desejo comprar

  Contexto:
    Dado que estou autenticado no SauceDemo

  Cenário: Adicionar produto ao carrinho
    Quando adiciono o produto Sauce Labs Backpack ao carrinho
    Então o carrinho deve exibir 1 item
    E o produto Sauce Labs Backpack deve estar no carrinho

  Cenário: Remover produto do carrinho
    Dado que adicionei o produto Sauce Labs Backpack ao carrinho
    Quando removo o produto do carrinho
    Então o carrinho deve ficar vazio