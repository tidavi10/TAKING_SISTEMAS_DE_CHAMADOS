

#language:pt
 
 - Funcionalidade: Abertura de Chamado Usuário

    Como um cliente
    Quero acessar o sistema
    Para realizar abertura de um chamado
    __________________________________________________

 1- Cenário: Iniaciando o preenchimento do chamado

    Dado que esteja na Tela de chamado
    Quando visualizar as opções disponíveis
    E selecionar de acordo com seu problema 
    Então as informações serão armazenadas
    __________________________________________________

 2- Cenário: Selecionando o Problema

    Dado que necessita abrir um chamado
    Quando selecionar o botão problema
    Então serão apresentado uma lista identificado por código
    _________________________________________________

 3- Cenário: Buscando opções para soluções 

    Dado que um problema foi apresentado
    Quando escolher a opção para solucionar o problema 
    Então o sistema informará o procedimento para ser realizado
    __________________________________________________

 4- Cenário: Descrição do Problema Deve Ser Preenchido

    Dado que para concluir a abertura do chamado
    Quando a descrição do problema for preenchida 
    Então a mensagem será salva
    E enviada para tratativa com o administrador
    __________________________________________________

 5- Cenário: Anexar Arquivo no Sistema

    Dado que para enviar um documento
    E estiver no formato JPG e PDF
    Quando clicar no botão anexar arquivo  
    Então o sistema executa o upload
    __________________________________________________

 6- Cenário: Para concluir a abertura de chamado 	 

    Dado que todos os campos foram selecionado
    E toda descrição preenchida
    Quando clicar no botão abrir chamado 
    Então o sistema salva as informações e armazena no banco de dados
    __________________________________________________

 7- Cenário: Disponibilidade para usuario acompanhar chamado

    Dado que deseja verificar o status
    Quando selecionar o botão consultar chamado 
    Então será aberto a tela de consulta
    E poderá visualizar o código do problema com a descrição 
    __________________________________________________