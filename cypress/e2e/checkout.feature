# language: pt

Funcionalidade: Checkout no SauceDemo

  Como usuário autenticado
  Quero finalizar uma compra
  Para concluir o pedido com sucesso

  Contexto:
    Dado que estou autenticado e possuo um produto no carrinho

  Cenário: Finalizar compra com sucesso
    Quando acesso o carrinho
    E inicio o checkout
    E preencho os dados obrigatórios do cliente
    E avanço para a revisão do pedido
    E finalizo a compra
    Então devo visualizar a confirmação de pedido concluído