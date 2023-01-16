// Banco de dados dos produtos

const produtosLoja = [
  {
    id: 1,
    img: "./img/as branquelas dvd.jpeg",
    alt: "imagem de produto DVD as branquelas",
    nameItem: "DVD As Branquelas",
    description:
      "Segura meu poodle! Sinta toda a vibe dos anos 2.000 assistindo um DVD diretamente do seu aparelho de DVD! (que talvez nem exista mais...)",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 2,
    img: "./img/borboletas de cabelo.webp",
    alt: "imagem de produto presilhas de borboleta para cabelo",
    nameItem: "Borboletas para cabelo",
    description:
      "Vai agarrar no seu cabelo e emaranhar, mas quem liga? Britney usou!",
    value: 10,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/brilho morango.png",
    nameItem: "Brilho Morango",
    alt: "imagem de produto brilho labial de morango",
    description:
      "Não é de comer! Mas pode, se quiser.",
    value: 12,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/caderno sandy e jr.jpeg",
    nameItem: "Caderno Sandy & Jr",
    alt: "imagem de produto caderno com capa de sandy e junior",
    description:
      "Caderno 10 matérias com divisórias 200 fls",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 5,
    img: "./img/calça cintura baixa.webp",
    nameItem: "Calça cintura baixa",
    alt: "imagem de produto calça de cintura baixa",
    description:
      "A grande estrela dos anos 2.000! Espero que você compre mas não use, pelo bem da sua cintura.",
    value: 260,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 6,
    img: "./img/camiseta regina george.jpeg",
    nameItem: "T-shirt Regina George",
    alt: "imagem de produto camiseta com estampa",
    description:
      "Saudação à abelha rainha! T-shirt confeccionada em tecido 100% algodão",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 7,
    img: "./img/calça anos 2000.jpeg",
    nameItem: "Calça cintua baixa verde",
    alt: "imagem de produto calça de cintura baixa verde",
    description:
      "Dessa vez na cor verde! compre.",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 8,
    img: "./img/caneta pompom.jpeg",
    nameItem: "Caneta pompom",
    alt: "imagem de produto caneta com pompom no topo",
    description:
      "Fala sério! Porquê você vai ter uma caneta normal podendo ter uma com um pompom?",
    value: 10,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 9,
    img: "./img/carça cargo anos 2000.webp",
    nameItem: "Calça cargo",
    alt: "imagem de produto calça cargo de cintura baixa",
    description:
      "Para as sk8rs e também para as que fingem! Atenção: munhequeiras vendidas separadamente.",
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 10,
    img: "./img/vale papel ônibus.jpeg",
    nameItem: "Vale em papel",
    alt: "imagem de produto vale de ônibus em papel",
    description:
      "Há quem diga que não vale nada, mas é inveja do seu Vale-em-papel",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 11,
    img: "./img/cd malhação.jpeg",
    nameItem: "CD Malhação Internacional",
    alt: "imagem de produto Cd de malhação internacional",
    description:
      "Tive pensando em me mudar, sem te deixar pra trás, yeah! (8)",
    value: 85,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 12,
    img: "./img/cortina de contas.webp",
    nameItem: "Cortina de contas",
    alt: "imagem de produto cortina de contas",
    description:
      "teletransporte imediato para os anos 2.000 incluso. Adquira já a sua.",
    value: 150,
    addCart: "Adicionar ao carrinho",
    tag: ["Decoração"],
  },
  {
    id: 13,
    img: "./img/diskman.jpeg",
    nameItem: "Diskman rosa",
    alt: "imagem de produto diskman rosa",
    description:
      "Mais que um acessório, é um lifestyle. Combo especial ao adquirir o CD de Malhação",
    value: 400,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 14,
    img: "./img/meninas malvadas dvd.jpeg",
    nameItem: "DVD Meninas malvadas",
    alt: "imagem de produto dvd meninas malvadas",
    description:
      "Se não entendeu a referência da abelha rainha este item é obrigatório",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 15,
    img: "./img/moletom veludo molhado.jpeg",
    nameItem: "Moletom Juicy Couture",
    alt: "imagem de produto moletom veludo",
    description:
      "Talvez seja brega, mas você fica uma grande gostosa nele",
    value: 600,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 16,
    img: "./img/top juicy coulture.jpeg",
    nameItem: "Top Juicy Culture",
    alt: "imagem de produto top juicy couture",
    description:
      "veludo, strass e apertado. O puro juicy para ser ˜aquela˜ Y2K",
    value: 280,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 17,
    img: "./img/motorola v8.jpeg",
    nameItem: "Motorola V8",
    alt: "imagem de produto celular motorola v8",
    description:
      "Não funciona o whatsapp, mas ele é rosa!",
    value: 4000,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 18,
    img: "./img/segura meu poodle.jpeg",
    nameItem: "Segura meu poodle!",
    alt: "imagem de produto bolsa de cachorrinho",
    description:
      "Dispensa apresentações! Seja uma paty completa como seu poodle",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  }, 
  {
    id: 19,
    img: "./img/sombra azul.jpeg",
    nameItem: "Sombra Azul",
    alt: "imagem de produto paleta de sombras azuis",
    description:
      "Para realçar o seu olhar",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  }, {
    id: 20,
    img: "./img/telefone de boca.webp",
    nameItem: "Telefone fixo de boca",
    alt: "imagem de produto telefone em formato de boca",
    description:
      "Ela beija muitoooo! E também vai precisar de uma linha fixa pra usar essa belezinha",
    value: 150,
    addCart: "Adicionar ao carrinho",
    tag: ["Decoração"],
  },
 
 
];
