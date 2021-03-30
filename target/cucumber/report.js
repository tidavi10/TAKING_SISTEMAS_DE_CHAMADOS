$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "Para validar a autenticação no sistema de chamados da Taking\nComo usuário do sistema\nEu quero logar e validar as permissões de tenico e cliente",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "informar um \u003cUsuario\u003e válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \u003cSenha\u003e válida",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "redirecionado para a tela de chamados",
  "keyword": "E "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;",
  "rows": [
    {
      "cells": [
        "Usuario",
        "Senha"
      ],
      "line": 20,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;1"
    },
    {
      "cells": [
        "\"jorge.silva@taking.com.br\"",
        "\"02030104\""
      ],
      "line": 21,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;2"
    },
    {
      "cells": [
        "\"sonia.nimberg@taking.com.br\"",
        "\"05006489\""
      ],
      "line": 22,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 3608810097,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \"02030104\" válida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "redirecionado para a tela de chamados",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 3184774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "duration": 110512,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_permitir_a_autenticação_do_usuário()"
});
formatter.result({
  "duration": 891796404,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 937680168,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informar um \"sonia.nimberg@taking.com.br\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \"05006489\" válida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "redirecionado para a tela de chamados",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "sonia.nimberg@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 121885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05006489",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "duration": 125655,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_permitir_a_autenticação_do_usuário()"
});
formatter.result({
  "duration": 685926958,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 668770822,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tentar realizar login com usuário inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 25,
  "name": "informar um \"jorge.silva\" inválido",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "inserir uma \"02030104\" válida",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_inválido(String)"
});
formatter.result({
  "duration": 1141956,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_inválido(LoginSteps.java:45)\n\tat ✽.Quando informar um \"jorge.silva\" inválido(Login.feature:25)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 645946681,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Tentar realizar login com senha inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-senha-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "inserir uma \"020301\" inválido",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 209793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "020301",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_inválido(String)"
});
formatter.result({
  "duration": 572917,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.inserir_uma_inválido(LoginSteps.java:57)\n\tat ✽.E inserir uma \"020301\" inválido(Login.feature:31)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 613542797,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Tentar realizar login com usuário vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 35,
  "name": "informar um \"  \" vazio",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "inserir uma \"02030104\" válida",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_vazio(String)"
});
formatter.result({
  "duration": 296516,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_vazio(LoginSteps.java:63)\n\tat ✽.Quando informar um \"  \" vazio(Login.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 783566763,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Tentar realizar login com senha vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-senha-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 40,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 41,
  "name": "inserir uma \"  \" vazio",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 121912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_vazio(String)"
});
formatter.result({
  "duration": 830593,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.inserir_uma_vazio(LoginSteps.java:69)\n\tat ✽.E inserir uma \"  \" vazio(Login.feature:41)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 802285311,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tentar realizar login com usuário e senha vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-e-senha-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 45,
  "name": "informar um \"  \" vazio",
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "inserir uma \"  \" vazio",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_vazio(String)"
});
formatter.result({
  "duration": 437422,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_vazio(LoginSteps.java:63)\n\tat ✽.Quando informar um \"  \" vazio(Login.feature:45)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_vazio(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 790177188,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Tentar realizar login com usuário e senha inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-e-senha-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 50,
  "name": "informar um \"jorge.silva\" inválido",
  "keyword": "Quando "
});
formatter.step({
  "line": 51,
  "name": "inserir uma \"020301\" inválido",
  "keyword": "E "
});
formatter.step({
  "line": 52,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_inválido(String)"
});
formatter.result({
  "duration": 419204,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_inválido(LoginSteps.java:45)\n\tat ✽.Quando informar um \"jorge.silva\" inválido(Login.feature:50)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "020301",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_inválido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
});