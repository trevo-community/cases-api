# API de Catálogos de AniKit

Esta API fornece endpoints para acessar catálogos de Imagens, capítulos específicos e imagens de capítulos. Abaixo estão as rotas disponíveis e como usá-las.

## Endpoints

### 1. Obter todos os Catálogos

**Endpoint:** `/all`

**Método:** `GET`

**Descrição:** Retorna todos os catálogos de mangás para um usuário autenticado.

**Parâmetros de Query:**
- `username`: Nome de usuário do cliente.
- `key`: Chave de autenticação do cliente.

**Resposta de Sucesso:**
- `200 OK`: Retorna uma lista de catalogos no formato JSON.

**Resposta de Erro:**
- `404 Not Found`: Se o usuário não for encontrado ou estiver banido.
- `500 Internal Server Error`: Em caso de erros internos no servidor.

**Exemplo de Requisição:**
GET /all?username=seuUsuario&key=suaChave

**Exemplo de Resposta:**
```
[
  {
    "_id": "60d0fe4f5311236168a109ca",
    "title": "Nome do Catálogo",
    "chapters": [
      // Lista de capítulos
    ]
  }
]
```
### 2. Obter um Capítulo Específico

**Endpoint:** `/catalogo/:catalogoId/chapters/:chapterNumber`

**Método:** `GET`

**Descrição:** Retorna um capítulo específico de um catalogo pelo ID do catalogo e número do capítulo.

**Parâmetros de Rota:**
- `catalogoId`: ID do catalogo.
- `chapterNumber`: Número do capítulo.

**Resposta de Sucesso:**
- `200 OK`: Retorna os detalhes do capítulo no formato JSON.

**Resposta de Erro:**
- `404 Not Found`: Se o catalogo ou capítulo não for encontrado.
- `500 Internal Server Error`: Em caso de erros internos no servidor.

**Exemplo de Requisição:**
GET /catalogo/60d0fe4f5311236168a109ca/chapters/1

**Exemplo de Resposta:**
```
{
  "chapterNumber": 1,
  "title": "Título do Capítulo",
  "pages": [
    // Lista de páginas
  ]
}
```

### 3. Obter uma Foto de um Capítulo Específico

**Endpoint:** `/imagem/:catalogoId/chapters/:chapterNumber/:fotoNumber`

**Método:** `GET`

**Descrição:** Retorna uma imagem específica de um capítulo de catalogo pelo ID do catalogo, número do capítulo e número da foto.

**Parâmetros de Rota:**
- `catalogoId`: ID do catalogo.
- `chapterNumber`: Número do capítulo.
- `fotoNumber`: Número da foto.

**Resposta de Sucesso:**
- `200 OK`: Retorna a imagem solicitada.

**Resposta de Erro:**
- `404 Not Found`: Se o catalogo, capítulo ou imagem não for encontrado.
- `500 Internal Server Error`: Em caso de erros internos no servidor.

**Exemplo de Requisição:**
GET /imagem/60d0fe4f5311236168a109ca/chapters/1/0

**Exemplo de Resposta:**
- A imagem será retornada

## Feito com amor por @clovermyt
