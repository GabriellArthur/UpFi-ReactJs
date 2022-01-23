<img alt="Ignite" src="https://i.imgur.com/eCVyxxy.png">
<p align="center">
  <img alt="Ignite" src="https://i.ibb.co/3hMBRCG/imagem-2022-01-23-030348.png">
</p>

<p align="center">
Começando pelo tema do projeto: upload de imagens. Como o desenvolvimento do zero acarretaria em um projeto muito grande. A ideia é que nesses 4 arquivos você tenha um pouco de contato com os 3 principais pontos que queremos abordar nesse projeto: React Query, React Hook Form e Chakra UI.
</p>

# Tecnologias

- [React Query](https://react-query.tanstack.com)
- [React Hook Form](https://react-hook-form.com)
- [ImgBB](https://api.imgbb.com)
- [FaunaDB](https://fauna.com)
- [API do Next.js](https://nextjs.org)
- [Figma](https://www.figma.com/file/bJRmNgdoxrUzYFIqJbbXAh/Desafio-2-Módulo-4-ReactJS-(Copy)?node-id=0%3A1)

# Desafio

[Desafio](https://www.notion.so/Desafio-02-Upload-de-imagens-4cf1c3b1c1ad4a66961b6e48558cc3b8)

[Figma](https://www.figma.com/file/bJRmNgdoxrUzYFIqJbbXAh/Desafio-2-Módulo-4-ReactJS-(Copy)?node-id=0%3A1)

# Imagens

<img src="https://i.ibb.co/xjVDc7d/imagem-2022-01-23-030712.png">
<img src="https://i.ibb.co/xfgSNFH/imagem-2022-01-23-030835.png">

# Instalação

Instale as dependências com ```yarn```

Inicie a aplicação com ```yarn dev```

# Instação ImgBB

1. Criar uma conta no ImgBB
2. [Criar a sua chave da API](https://api.imgbb.com)
3. Copiar o valor dessa chave e colar no seu `.env.local` da seguinte forma:
`NEXT_PUBLIC_IMGBB_API_KEY=VALOR_DA_CHAVE_COPIADA`

# Instação FaunaDB

Tudo que você precisa fazer é criar um banco no FaunaDB com um nome de sua preferência que precisa ter uma coleção chamada `images`. Com o banco e coleção criados, basta você criar e copiar a chave do banco no seu arquivo `.env.local` da seguinte forma:
 `FAUNA_API_KEY=VALOR_DA_CHAVE_COPIADA`
