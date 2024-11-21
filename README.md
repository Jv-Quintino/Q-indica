# Site de Vendas - Aplicativo para Farmácias

Este é o repositório do site de vendas para o **Aplicativo para Farmácias**, desenvolvido para redirecionar os clientes ao Kiwifi para realizar a compra e retornar uma página de agradecimento após a finalização.

## Estrutura do Projeto

O site possui duas páginas principais:

1. **Página Inicial (index)**: Apresenta o aplicativo, suas funcionalidades e um botão para redirecionar ao Kiwifi, onde a compra é concluída.
2. **Página de Agradecimento (thankyou)**: Após a compra, o cliente retorna a esta página, que agradece a escolha e confirma a finalização.

## Pré-requisitos

- Conhecimento básico em HTML e CSS para ajustes visuais, caso necessário.
- Um servidor web ou serviço de hospedagem para disponibilizar as páginas online.

## Arquivos Principais

- **index.html**: Página inicial com informações sobre o aplicativo e um botão que leva ao Kiwifi.
- **thankyou.html**: Página de agradecimento que confirma a compra e agradece o cliente.

## Como Utilizar

1. **Personalize o conteúdo das páginas** conforme necessário (ex.: descrição do aplicativo e mensagens de agradecimento).
2. **Configure o redirecionamento** no botão de compra em `index.html` para o link do Kiwifi fornecido.
3. **Teste a navegação** para garantir que o cliente seja corretamente direcionado de volta à página de agradecimento.

## Exemplo de Estrutura HTML

### Página Inicial (index.html) e Página de Agradecimento (thankyou.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicativo para Farmácias</title>
</head>
<body>
    <header>
        <h1>Bem-vindo ao Aplicativo para Farmácias</h1>
        <p>Conheça uma solução prática para a gestão da sua farmácia!</p>
        <a href="https://kiwifi.com/compra" target="_blank" class="btn-comprar">Comprar Agora</a>
    </header>
</body>
</html>

/////////////////////////////////////////////

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado pela sua Compra!</title>
</head>
<body>
    <header>
        <h1>Obrigado por sua compra!</h1>
        <p>Agradecemos por adquirir nosso aplicativo. Estamos à disposição para o que precisar!</p>
    </header>
</body>
</html>

