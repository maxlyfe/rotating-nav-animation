Funções JavaScript utilizada no codigo, as mesmas foram detalhadas utilizando ChatGPT para melhor clareza dos comandos utilizados.

`getElementById`
É uma função do JavaScript que permite buscar elementos HTML por seu identificador uníco. Ele usa o ID atribuído ao elemento especificado no DOM (Document Object Model) e retorna esse elemento como um ovjeto dos tipos HTML, Element ou null.

Exemplo:
´document.getElementById('elementId');´

Aqui, estamos buscando um elemento com o ID elementId e armazenando-o na variável element. Se o elemento existir, essa variável terá o valor do elemento; caso contrátio, o valor da variável será null.

`querySelector`
O querySelector é uma API de seletores CSS-like que você pode usar para selecionar elementos de uma página HTML. Ele funciona da mesma maneira que os seletores CSS, permitindo a seleção de elementos com vase em sua classe, id ou atributo.

Ele aceita uma string de argumento que especifa o elemento que você deseja selecionar; por exemplo, document.querySelector irá selecionar todos os elementos que tiverem a classe *classe* associada a elas.

Você também pode usar vários seletores juntos para selecionar elementos complexos, como document.querySelector dic > ul li:nth-child(2) img"), que selecionará a segunda imagem filha de um elemento <ul> que está dentro de uma <div> cujo id é *id*.

Todos os elementos retornados são do tipo *Element*, que é um objeto base do DOM JavaScript e possui muitos recursos úteis para manipular o HTML de uma página.

Ao contrário de métodos como getElementsByClassName e getElementById, o querySelector só aceita um único argumento e não é um método de coleção.

`addEventListener()`
O método ‘addEventListener()’ é uma função nativa do JavaScript que permite vincular um ouvinte de evento a um elemento HTML. O método ‘addEventListener()’ recebe dois parâmetros: o tipo de evento e a função de retorno de chamada, que será executada quando o evento acorrer.

A sintaxe geral do método ‘addEventListener()’ é a seguinte:
 ![image](https://user-images.githubusercontent.com/85650989/219820443-d27aafef-361a-41c2-b457-485332e66b5c.png)


O primeiro parâmetro, ‘tipoDeEvento’, é uma string que representa o tipo de evento que você deja ouvir, como “click”, “keyup”, “Submit”, entre outros. O segundo parâmetro, ‘funçãoRetornoDeChamada’, é a função que será executada quando o evento ocorrer.

Por exemplo, se você quiser adicionar um ouvinte de evento de clique a um botão, você pode usar o método ‘addEventListener()’ da seguinte maneira:
 ![image](https://user-images.githubusercontent.com/85650989/219820474-d5b7724e-7e2c-4b8f-bb85-c0735276f11b.png)


Este código adiciona um ouvinte de evento de clique ao botão com o ID ´meuBotao’.
Quando o botão é clicado, a função de retorno de chamada é executada.

O método ‘addEventListener()’ é muito útil quando se trabalha com eventos em JavaScript, pois permite detectar e responder  a eventos do usuário, como cliques, pressionamentos de tecla, envios de formulário, entre outros. Além disso, você pode adicionar vários ouvintes de eventos ao mesmo elemento, o que permite executar várias ações diferentes em resposta a um único evento.