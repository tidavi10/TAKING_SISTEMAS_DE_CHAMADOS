

#language:pt
 

 Funcionalidade: Abertura de Chamado - ADM

   Como Administrador do Sistema
   Quero acessar a aplicação de chamados
   Para acompanhar os chamados, atualizar o status
   E finalizar a execução do chamado

   __________________________________________________

 1- Cenário: Atendimento e consulta dos chamados pelo Administrador

   Dado que para realizar o atendimento dos chamados 
   Quando acessar a aplicação com login e senha  
   Então o sistema mostrará a tela de consulta de chamados
   __________________________________________________

 2- Cenário: Realizando visualização dos chamados

   Dado que ao acessar a tela de edição de chamado
   Quando clicar no botão chamado 
   Então será apresentado o status com códigos do atendimento
   __________________________________________________

 3- Cenário: Mudando o Status  do Chamado

   Dado que ao realizar atendimento do chamado
   Quando o status for atualizado
   Então será armazenado e mostrado um novo status
   __________________________________________________

 4- Cenário: Especificação do tempo de execução

   Dado que ao possuir um chamado em aberto
   Quando tiver uma resolução do problema 
   Então o campo tempo de execução devera ser preenchido
   __________________________________________________
