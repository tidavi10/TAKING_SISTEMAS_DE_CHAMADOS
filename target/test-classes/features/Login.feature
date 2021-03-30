#language:pt

@wip
Funcionalidade: Login
Para validar a autenticação no sistema de chamados da Taking
Como usuário do sistema
Eu quero logar e validar as permissões de tenico e cliente

Contexto: possibilidade de acessar o sistema

Dado que usuário possa acessar a tela de login do sistema

Esquema do Cenário: realizar login no sistema com usuários válidos
Quando informar um <Usuario> válido
E inserir uma <Senha> válida
Então o sistema deve permitir a autenticação do usuário
E redirecionado para a tela de chamados

Exemplos:
| Usuario                       | Senha      | 
| "jorge.silva@taking.com.br"   | "02030104" | 
| "sonia.nimberg@taking.com.br" | "05006489" |

Cenário: Tentar realizar login com usuário inválido
Quando informar um "jorge.silva" inválido
E inserir uma "02030104" válida
Então o sistema deve informar que o usuário ou senha está incorreto

Cenário: Tentar realizar login com senha inválido
Quando informar um "jorge.silva@taking.com.br" válido
E inserir uma "020301" inválido
Então o sistema deve informar que o usuário ou senha está incorreto

Cenário: Tentar realizar login com usuário vazio
Quando informar um "  " vazio
E inserir uma "02030104" válida
Então o sistema deve informar que o usuário ou senha está incorreto

Cenário: Tentar realizar login com senha vazio
Quando informar um "jorge.silva@taking.com.br" válido
E inserir uma "  " vazio
Então o sistema deve informar que o usuário ou senha está incorreto

Cenário: Tentar realizar login com usuário e senha vazio
Quando informar um "  " vazio
E inserir uma "  " vazio
Então o sistema deve informar que o usuário ou senha está incorreto

Cenário: Tentar realizar login com usuário e senha inválido
Quando informar um "jorge.silva" inválido
E inserir uma "020301" inválido
Então o sistema deve informar que o usuário ou senha está incorreto

