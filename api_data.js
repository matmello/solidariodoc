define({ "api": [  {    "type": "post",    "url": "/donations/boleto",    "title": "Boleto",    "version": "0.1.0",    "name": "GenerateSlip",    "group": "Donations",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "projectId",            "description": "<p>Project ID</p>"          },          {            "group": "body",            "type": "Int",            "optional": false,            "field": "amount",            "description": "<p>Amount to be donated in cents</p>"          },          {            "group": "body",            "type": "Boolean",            "optional": false,            "field": "anon",            "description": "<p>'true' to be an anonymous donation</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n{\n{\n  \"status\": \"success\",\n  \"boletoUrl\": \"https://api.pagar.me/1/boletos/live_cj2ifcbxq019smp3eb25rns3s\"\n    }",          "type": "json"        }      ]    },    "filename": "server/rests/donations.js",    "groupTitle": "Donations"  },  {    "type": "post",    "url": "/donations/cartao",    "title": "Cartao",    "version": "0.1.0",    "name": "proccessDonation",    "group": "Donations",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "projectId",            "description": "<p>Project ID</p>"          },          {            "group": "body",            "type": "Int",            "optional": false,            "field": "amount",            "description": "<p>Amount to be donated in cents</p>"          },          {            "group": "body",            "type": "Boolean",            "optional": false,            "field": "anon",            "description": "<p>True to be an anonymous donation</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "cardHash",            "description": "<p>card hash generated by Pagar.me</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Donator name</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Donator email</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "cpf",            "description": "<p>Donator cpf without masks</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "cep",            "description": "<p>Donator cep without masks</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "bairro",            "description": "<p>Donator neighborhood</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "rua",            "description": "<p>Donator street</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "numero",            "description": "<p>Donator street number</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "telefone",            "description": "<p>Donator telephone</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "ddd",            "description": "<p>Donator ddd</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n{\n    }",          "type": "json"        }      ]    },    "filename": "server/rests/donations.js",    "groupTitle": "Donations"  },  {    "type": "get",    "url": "/categories",    "title": "Categories",    "version": "0.1.0",    "name": "GetCategories",    "group": "Project",    "permission": [      {        "name": "none"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Response Status, 'success' when successful</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "data",            "description": "<p>Data wrapper</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.name",            "description": "<p>Category name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.id",            "description": "<p>category id</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n  status: 'success',\n  data:   [{\n    name: 'Animal',\n    id:   'Animal',\n  }, {\n    name: 'Meio Ambiente',\n    id:   'Meio Ambiente',\n  }, {\n    name: 'Saúde',\n    id:   'Saúde',\n  }, {\n    name: 'Social',\n    id:   'Social',\n  }],\n};",          "type": "json"        }      ]    },    "filename": "server/rests/categories.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/project/:id/donators",    "title": "Donators",    "version": "0.1.0",    "name": "GetDonatorsP",    "group": "Project",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Id of project to query donators</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": {\n    \"donators\": [\n      {\n        \"id\": \"Fh3cMq7FYWxSduPdd\",\n        \"name\": \"Tetê Adriano Araújo\",\n        \"image\": \"\"\n      }\n    ],\n    \"anonCount\": 1\n  }\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/projects/:id",    "title": "Project",    "version": "0.1.0",    "name": "GetProject",    "group": "Project",    "permission": [      {        "name": "optional"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Project's ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": {\n    \"_id\": \"xfuat93q5A7cDBRYo\",\n    \"category\": \"Saúde\",\n    \"creator\": {\n      \"image\": \"http://solidariobrasil.com.br/cfs/files/imagens/F3861fRCwJx5fmr57\",\n      \"id\": \"azSZKiMMPLBgqEn5t\",\n      \"name\": \"Aline\",\n      \"surname\": \"Teixeira da Silva Coutinho\"\n    },\n    \"status\": \"finalized\",\n    \"title\": \"Tudo por Natália\",\n    \"slug\": \"tudo-por-natalia-1\",\n    \"description\": \"Dentre muitas oportunidades que temos de fazer o bem sem olhar a quem, o projeto de campanha Tudo por Natália é mais uma genuína forma de amar ao próximo. Buscamos dar uma melhor qualidade de vida a esta criança, que nasceu com uma doença incurável, altamente mutilante e sofrida. Aceite o convite para conhecer a pequena Natália Calixto Alves, nas próximas páginas.\",\n    \"city\": \"Caculé\",\n    \"state\": \"BA\",\n    \"duration\": 90,\n    \"goal\": \"R$40.000,00\",\n    \"information\": \"<p><br>Apresentamos o projeto da pequena Natália Calixto Alves. Essa criança nasceu com uma doença genética, chamada Epidermólise Bolhosa, que tem como consequência uma fragilidade acentuada na pele e aparelho digestório. Essa florzinha tem apenas três anos de vida, de sofrimento, de superações e de esperanças.</p><p><img src=\\\"https://st-solidario.s3.amazonaws.com/nat1.jpeg\\\" style=\\\"width: 50%;\\\"></p><p>&nbsp;Por diversas razões, a doença provoca formações bolhosas na pele, que evoluem para graves feridas, dos mais variados tamanhos, com extensão por todo o corpinho. Pior que isso são as mesmas consequências que acontecem no aparelho digestório, da gargantinha até o intestino.</p><p><img src=\\\"https://st-solidario.s3.amazonaws.com/nat2.jpeg\\\" style=\\\"width: 50%;\\\"></p><p>Não bastassem as feridas, dores agudas e queimor, a doença não tem cura e seu tratamento é muito caro. Para alcançar o equilíbrio interno e externo é necessária a combinação de vários fatores, a citar suplementação nutricional apropriada a esta doença, cremes, loções, antissépticos, curativos especiais e demais materiais de alto custo.\\n &nbsp;Ademais, necessário um tratamento multidisciplinar com Psicólogos, Médicos, Pedagogos e Fisioterapeutas. Neste contexto nasce Natália, filha de lavradores, na ossuda zona rural do município de Rio do Antônio/BA, criança que até pouco tempo a família tinha dificuldade de ter alimento à mesa.</p><p><img src=\\\"https://st-solidario.s3.amazonaws.com/nat3.jpeg\\\" style=\\\"width: 50%;\\\"></p><p>Assim como em redes sociais, vimos pedir amparo e amor ao próximo, na forma de caridade, para dar vida a essa vida que já inicia com tanto sofrimento.\\n</p><p>Como numa construção, tijolo por tijolo, construiu-se uma corrente do bem, que agora encontra a solidariedade neste site. Recebam o convite para conhecer nossas páginas @tudo_por_natalia (Instagram), tudo por Natália (facebook), nosso grupo de what's app, todos administrados e supervisionados por Aline Coutinho, criadora e responsável pelo tratamento dessa pequena flor.<img src=\\\"https://st-solidario.s3.amazonaws.com/nat4.jpeg\\\" style=\\\"width: 826px;\\\"></p><p><br></p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Materiais usados dentro de um mês pela Natália.</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Curativos MEPILEX TRANSFER 1 caixa por dia =R$616,00 x 30 dias R$18.480,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Pomada Self óleo de bacalhau 1 a cada 3 dias = R$49,90 x 30 dias R$499,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Kit de higiene: enxaguante bucal, creme hidratante, Blend, sabonete líquido, pomada bucal. 1 kit a cada 5 dias = R$250,00 x 30 dias R$1.500,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Cubitan 2 por dia =R$ 40,00 x 30 dias R$2.400,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Fortine 1 lata a cada 4 dias = R$ 69,00 x 10 R$690,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Leite de arroz 1 lata a cada 4 dias =R$ 38,00 x 10 R$380,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">Leite Pregomin pepte 1 lata a cada 4 dias = R$ 140,00 x 10 R$1.400,00</p><p dir=\\\"ltr\\\" style=\\\"color: rgb(33, 33, 33); font-family: wf_segoe-ui_normal, 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif; font-size: 15px; line-height: normal;\\\">*Remédios para o intestino<br>*Óleos cicatrizante, andiroba, pocaiba, óleo de coco.<br>*Faixa&nbsp;<br>*Protetores solares<br>*Remédios de dor, paracetamol.<br>*Colírio<br>*Vitamina, e complexo vitamínico A, B, C, D.&nbsp; ferro, ácido fólico.</p><p>\\n\\n</p>\",\n    \"contact\": {\n      \"email\": \"alinecoutinho2016@outlook.com\",\n      \"tel\": \"(77) 9881-52565\"\n    },\n    \"social\": {\n      \"facebook\": \"https://www.facebook.com/Tudopornatalia/\",\n      \"twitter\": \"https://twitter.com/tudonatalia\"\n    },\n    \"media\": [\n      \"https://st-solidario.s3.amazonaws.com/projectImages/oFkDCx-fuvOcqgODHjnGin5ATAkErOmquo-x4vHcKk_.jpg\",\n      \"https://st-solidario.s3.amazonaws.com/natalia-perfil.jpg\"\n    ],\n    \"timeleft\": 0,\n    \"donated\": 978922,\n    \"donators\": [\n      \"cBhYfXn7mBug4KcZm\",\n      \"rh5xYCRKDTvSgbjWt\",\n    ],\n    \"video\": \"https://www.youtube.com/embed/ivLnIUXCc_8\",\n    \"percent\": 24,\n    \"donatorsCount\": 68\n  }\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "post",    "url": "/favorites/:id",    "title": "Favorite",    "version": "0.1.0",    "name": "PostFavorite",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Id of project to toggle favorite</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n\"message\": \"Projeto adicionado ou removido dos favoritos\"\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/myprojects/favorites",    "title": "My Projects (Favorites)",    "version": "0.1.0",    "name": "PostMyFavorites",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"category\": \"Saúde\",\n      \"_id\": \"xfuat93q5A7cDBRYo\",\n      \"title\": \"Tudo por Natália\",\n      \"description\": \"Dentre muitas oportunidades que temos de fazer o bem sem olhar a quem, o projeto de campanha Tudo por Natália é mais uma genuína forma de amar ao próximo. Buscamos dar uma melhor qualidade de vida a esta criança, que nasceu com uma doença incurável, altamente mutilante e sofrida. Aceite o convite para conhecer a pequena Natália Calixto Alves, nas próximas páginas.\",\n      \"goal\": \"R$40.000,00\",\n      \"percent\": 24,\n      \"donators\": 68,\n      \"media\": [\n        \"https://st-solidario.s3.amazonaws.com/projectImages/oFkDCx-fuvOcqgODHjnGin5ATAkErOmquo-x4vHcKk_.jpg\",\n        \"https://st-solidario.s3.amazonaws.com/natalia-perfil.jpg\"\n      ],\n      \"isFavorite\": true\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/myprojects/createdbyme",    "title": "My Projects (By Me)",    "version": "0.1.0",    "name": "PostMyProjects",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"category\": \"Saúde\",\n      \"_id\": \"dDaNuvrRTKLxSPPrS\",\n      \"title\": \"PROJETO EXEMPLO\",\n      \"description\": \"dsdsadsaadsads\",\n      \"goal\": \"R$1.231.231,23\",\n      \"percent\": 0,\n      \"donators\": 0,\n      \"media\": [\n        \"https://st-solidario.s3.amazonaws.com/projectImages/ZiVVXSwp1kMA_leiMOg1V0rtci29Vy-ybCgArgNtN8H.jpg\"\n      ],\n      \"isFavorite\": false\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/myprojects/supported",    "title": "My Projects (Supported)",    "version": "0.1.0",    "name": "PostMySupported",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n  {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"category\": \"Saúde\",\n      \"_id\": \"xfuat93q5A7cDBRYo\",\n      \"title\": \"Tudo por Natália\",\n      \"description\": \"Dentre muitas oportunidades que temos de fazer o bem sem olhar a quem, o projeto de campanha Tudo por Natália é mais uma genuína forma de amar ao próximo. Buscamos dar uma melhor qualidade de vida a esta criança, que nasceu com uma doença incurável, altamente mutilante e sofrida. Aceite o convite para conhecer a pequena Natália Calixto Alves, nas próximas páginas.\",\n      \"goal\": \"R$40.000,00\",\n      \"percent\": 24,\n      \"donators\": 68,\n      \"media\": [\n        \"https://st-solidario.s3.amazonaws.com/projectImages/oFkDCx-fuvOcqgODHjnGin5ATAkErOmquo-x4vHcKk_.jpg\",\n        \"https://st-solidario.s3.amazonaws.com/natalia-perfil.jpg\"\n      ],\n      \"isFavorite\": true\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "post",    "url": "/projects",    "title": "Projects",    "version": "0.1.0",    "name": "PostProjects",    "group": "Project",    "permission": [      {        "name": "optional"      }    ],    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          },          {            "group": "query",            "type": "String",            "optional": false,            "field": "categories",            "description": "<p>Categories separated by comma ','</p>"          },          {            "group": "query",            "type": "String",            "optional": true,            "field": "pesquisa",            "description": "<p>String to be used as search query</p>"          }        ],        "body": [          {            "group": "body",            "type": "Array",            "optional": true,            "field": "states",            "description": "<p>List of states to retrieve projects from</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"category\": \"Animal\",\n      \"_id\": \"Gp6cAAhwMxd8ArWAy\",\n      \"title\": \"Projeto De Patas Dadas\",\n      \"description\": \"O Projeto de Patas Dadas nasceu com o amor pelos animais. Resgatamos animais de rua, cuidamos, castrados e botamos para adoção. Venha nos ajudar a salvar mais vidas.\",\n      \"goal\": \"R$5.000,00\",\n      \"percent\": 0,\n      \"donators\": 0,\n      \"media\": [\n        \"https://st-solidario.s3.amazonaws.com/projectImages/wRpyhIUNZAdxAhrBpRwzaJhVebQUCTzCfAzd1aqOaxK.jpg\"\n      ],\n      \"isFavorite\": false\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/projects.js",    "groupTitle": "Project"  },  {    "type": "post",    "url": "/timeline/:id",    "title": "Timeline",    "version": "0.1.0",    "name": "RemoveTimeline",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Project's ID</p>"          }        ],        "query": [          {            "group": "query",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Titulo</p>"          },          {            "group": "query",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Description</p>"          }        ],        "file": [          {            "group": "file",            "type": "form/data",            "optional": false,            "field": "file",            "description": "<p>Image</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"message\": \"Item inserido com sucesso\",\n  \"data\": {\n    \"date\": \"2017-06-07T02:07:13.218Z\",\n    \"day\": 6,\n    \"month\": 5,\n    \"title\": \"123123123\",\n    \"description\": \"dashuuasdhuhasd\",\n    \"projectId\": \"h9cJfM5vM22KXMpFX\",\n    \"img\": \"http://localhost:3000/cfs/files/imagens/aqfgYaHuCwgABrGqD\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "server/rests/timeline.js",    "groupTitle": "Project"  },  {    "type": "delete",    "url": "/timeline/:id",    "title": "Delete Timeline",    "version": "0.1.0",    "name": "RemoveTimeline",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Project's ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"status\": \"success\",\n      \"message\": \"Item removido com sucesso\",\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/timeline.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/timeline/project/:id",    "title": "Timeline",    "version": "0.1.0",    "name": "Timeline",    "group": "Project",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "url": [          {            "group": "url",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Project's ID</p>"          }        ],        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n   {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"_id\": \"XN7kBuzvmXHjBfNpE\",\n      \"date\": \"2017-06-07T00:33:05.556Z\",\n      \"day\": 6,\n      \"month\": 5,\n      \"title\": \"123123123\",\n      \"description\": \"123123\",\n      \"projectId\": \"h9cJfM5vM22KXMpFX\",\n      \"img\": \"https://st-solidario.s3.amazonaws.com/projectUpdateImages/vA5wUrQIsZ6LqE7Nh42otBI_DEh1GK-2zprf9RJkCn7.jpg\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/timeline.js",    "groupTitle": "Project"  },  {    "type": "get",    "url": "/about",    "title": "About",    "version": "0.1.0",    "name": "GetAbout",    "group": "Static",    "permission": [      {        "name": "none"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Response Status, 'success' when successful</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Data wrapper</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.title",            "description": "<p>About page title</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.content",            "description": "<p>About page content</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n{\nstatus: 'success',\ndata:   {\n  title:   'POR QUE CRIAMOS O SOLIDÁRIO?',\n  content: '<p>O Solidário é uma plataforma que quer unir pessoas, instituições e projetos que precisam de financiamento a pessoas que gostariam de ajudar.</p><p>Todos os dias cresce o número de iniciativas que precisam de ajuda. Depois de anos envolvidos com projetos sociais e através de pesquisas realizadas nesse período, percebemos que nós brasileiros somos generosos, nos sensibilizamos e fazemos de tudo para ajudar o próximo. Apesar disso, não sabemos muito bem onde encontrar iniciativas de caridade. As pessoas querem ajudar, mas não sabem como e nem para quem devem doar.</p><p>Pensando nisso criamos uma plataforma de financiamento coletivo segura e prática que conecta projetos sociais à pessoas que desejam doar. Nosso intuito é ajudar com exclusividade os projetos sociais e assim tornar nossa sociedade mais colaborativa.</p><p>A gente aprendeu que, quando todo mundo trabalha junto, dá para mudar o mundo. Então resolvemos ajudar pessoas que querem mudar o mundo a se encontrar.',\n},\n   };",          "type": "json"        }      ]    },    "filename": "server/rests/about.js",    "groupTitle": "Static"  },  {    "type": "get",    "url": "/terms",    "title": "Terms",    "version": "0.1.0",    "name": "GetTerms",    "group": "Static",    "permission": [      {        "name": "none"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "status",            "description": "<p>Response Status, 'success' when successful</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>Data wrapper</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.title",            "description": "<p>About page title</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "data.content",            "description": "<p>About page content</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "    HTTP/1.1 200 OK\n{\nstatus: 'success',\ndata:   {\n  title:   'ERMOS E CONDIÇÕES GERAIS DE USO E POLÍTICA D',\n  content: '<p>Este documento tem por finalidade estabelecer as regras sobre a obtenção, uso, armazenamento dos dados e informações coletadas dos Usuários, bem como as regras de utilização dos serviços disponíveis no Solidário, seja para cadastramento de Projetos, seja para Doação, em dinheiro, para os Projetos cadastrados.</p><p>Ao aceitar os Termos e Condições, o Usuário reconhece ter lido, entendido e concordado com todos os termos e condições aqui estabelecidos, obrigando-se automaticamente às cláusulas aqui aplicáveis.</p><p>O Solidário se reserva o direito de alterar unilateralmente quaisquer condições do presente TERMO DE ACEITAÇÃO DE USO, sem que haja necessidade de informação prévia ao Usuário. </p><p>O Solidário disponibilizará no site as novas condições do Termo de Aceitação de Uso, sendo de total responsabilidade de o Usuário revisar a versão atual do Termo de Uso.</p><p><b>1. DEFINIÇÕES</b></p><p>Para todos os fins do presente Termo de Aceitação de Uso, os conceitos abaixo deverão ter as seguintes definições, independentes se usados no plural ou singular:</p><p>1.1.SOLIDÁRIO: Pessoa Jurídica de Direito Privado, inscrita no CNPJ/MF sob o n.º 23.596.100/0001-28, com sede no Setor de Indústrias Bernardo Sayão, Quadra 2 Conjunto B número 13/14, CEP 71.726-202, detentora e proprietária do site: www.solidariobrasil.com.br;</p><p>1.2.USUÁRIO CRIADOR: Parte civilmente capaz, idealizadora e responsável pelos Projetos disponíveis no Solidário.',\n},\n   };",          "type": "json"        }      ]    },    "filename": "server/rests/terms.js",    "groupTitle": "Static"  },  {    "type": "get",    "url": "/activities",    "title": "Activities",    "version": "0.1.0",    "name": "Activities",    "group": "User",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "int",            "optional": false,            "field": "page",            "description": "<p>Page to be displayed</p>"          },          {            "group": "query",            "type": "int",            "optional": false,            "field": "per_page",            "description": "<p>Items to be displayed per page</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n  {\n  \"status\": \"success\",\n  \"data\": [\n    {\n      \"type\": \"Doação\",\n      \"amount\": 10000,\n      \"project\": {\n        \"id\": \"h9cJfM5vM22KXMpFX\",\n        \"title\": \"novo teste\"\n      },\n      \"status\": \"Em processamento\"\n    },\n    {\n      \"type\": \"Doação\",\n      \"amount\": 5000,\n      \"project\": {\n        \"id\": \"Gp6cAAhwMxd8ArWAy\",\n        \"title\": \"Projeto De Patas Dadas\"\n      },\n      \"status\": \"Aguardando Pagamento\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "filename": "server/rests/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/login",    "title": "Login",    "version": "0.1.0",    "name": "Login",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email do usuário</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Senha do usuário</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": {\n    \"authToken\": \"QjaoM3u-dICf809OR6auS98yn7lC2LCAxQMaaeKTlM0\",\n    \"userId\": \"SMw5TMmkOm8jitPd8\",\n    \"email\": \"mat.mello93@gmail.com\",\n    \"name\": \"Matheusz\",\n    \"surname\": \"Mello\",\n    \"image\": \"http://localhost:3000/cfs/files/imagens/8LxiD2sjcD6EHC5hr\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "server/rests/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/profile",    "title": "Profile",    "version": "0.1.0",    "name": "Profile",    "group": "User",    "permission": [      {        "name": "logged user"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Nome do usuário</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "surname",            "description": "<p>Sobrenome do usuário</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "biography",            "description": "<p>Biografia</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "website",            "description": "<p>Website</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "contact",            "description": "<p>Telefone</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "city",            "description": "<p>Cidade</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "country",            "description": "<p>País</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n\"message\": \"Perfil atualizado com sucesso\"\n}",          "type": "json"        }      ]    },    "filename": "server/rests/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/register",    "title": "Register",    "version": "0.1.0",    "name": "Register",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Senha a se cadastrar</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Nome do usuário</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "surname",            "description": "<p>Sobrenome do usuário</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email</p>"          },          {            "group": "body",            "type": "bool",            "optional": false,            "field": "newsletter",            "description": "<p>'true' para receber newsletter</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": " HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Usuário criado com sucesso\",\n\"user\": {\n \"id\": \"C2c3zbqpnyLoFazm5\",\n \"email\": \"mat.mell3@gmail.com\"\n }\n }",          "type": "json"        }      ]    },    "filename": "server/rests/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/resetpassword",    "title": "Reset Password",    "version": "0.1.0",    "name": "ResetPassword",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email do usuário</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n\"message\": \"Perfil atualizado com sucesso\"\n}",          "type": "json"        }      ]    },    "filename": "server/rests/users.js",    "groupTitle": "User"  }] });
