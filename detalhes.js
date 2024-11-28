
// Dados dos imóveis
const properties = {
    1: {
        titulo: "Apartamento no Iguaçu",
        preco: "R$ 1.300",
        localizacao:"Iguaçu, Ipatinga-MG",
        descricao: "Lindo apartamento com 03 quartos, sendo 01 suíte, sala/copa, cozinha com conceito aberto, área de serviços individual e varanda gourmet. Conta também com banheiro social, acabamento de primeira, fachada imponente e água e luz individuais. O imóvel possui portão eletrônico, elevador, piso em porcelanato e esquadrias que auxiliam com questões de ruído. Além disso, oferece infraestrutura para ar condicionado na sala e nos quartos.Com aproximadamente 85m² de área construída, 01 vaga de garagem e excelente localização.",
        imagens: [
            "img/Apartamentos/Apartamento 1/img (1).jpg",
            "img/Apartamentos/Apartamento 1/img (2).jpg",
            "img/Apartamentos/Apartamento 1/img (3).jpg",
            "img/Apartamentos/Apartamento 1/img (4).jpg"
        ]
    },
    2: {
        titulo: "Apartamento no Cidade Nobre",
        preco: "R$ 2.300",
        localizacao:"Cidade Nobre, Ipatinga-MG",
        descricao: "Lindo apartamento com 03 quartos, sendo 01 suíte, sala/copa, cozinha, área de serviços e varanda gourmet. O imóvel conta com banheiro social, acabamento de primeira, fachada imponente e elevador de alta performance. A medição de água é individual e há infraestrutura para ar condicionado, garantindo todo o conforto e praticidade.Com aproximadamente 140m² de área construída, oferece 02 vagas de garagem e está localizada em uma excelente localização no bairro Cidade Nobre. Uma excelente oportunidade para quem busca qualidade de vida e modernidade.",
        imagens: [
            "img/Apartamentos/Apartamento 2/Imagem (1).jpg",
            "img/Apartamentos/Apartamento 2/Imagem (2).jpg",
            "img/Apartamentos/Apartamento 2/Imagem (3).jpg",
            "img/Apartamentos/Apartamento 2/Imagem (4).jpg"
        ]
    },
    3: {
        titulo: "Apartamento no Esperança",
        preco: "R$ 1.100",
        localizacao:"Esperança,, Ipatinga-MG",
        descricao: "Lindo apartamento com 03 quartos, sendo 01 suíte, sala/copa, cozinha com conceito aberto e bastante bancada, área de serviços individual e varanda gourmet, perfeita para momentos de lazer. Conta também com banheiro social, excelente acabamento e fachada imponente. O imóvel possui elevador e está localizado em uma ótima localização, próximo ao bairro Cidade Nobre.Com aproximadamente 100m² de área construída e 01 vaga de garagem, a casa está pronta para morar no bairro Esperança, oferecendo conforto e praticidade para o seu dia a dia.",
        imagens: [
            "img/Apartamentos/Apartamento 3/Imagem (1).jpg",
            "img/Apartamentos/Apartamento 3/Imagem (2).jpg",
            "img/Apartamentos/Apartamento 3/Imagem (3).jpg",
            "img/Apartamentos/Apartamento 3/Imagem (4).jpg"
        ]   
    },
  4: {
titulo: "Casa no Jardim Panorama",
preco: "R$ 2.700",
descricao: "Linda casa com 03 quartos, sendo 01 suíte com closet e sacada, sala de estar, sala de TV, sala de jantar, cozinha moderna, área de serviços separada, 02 banheiros sociais, área gourmet e área externa de 70m². Com 206m² de área construída, oferece 04 vagas de garagem e uma fachada imponente. Localizada em Vila Ipanema, este imóvel combina excelente localização e conforto, por apenas R$ 950.000,00.",
localizacao: "Jardim Panorama,Ipatinga-MG.",
imagens: [
 "img/Apartamentos/Casa 1/Img 1.jpg",
  "img/Apartamentos/Casa 1/Img 2.jpg",
   "img/Apartamentos/Casa 1/Img 3.jpg",
"img/Apartamentos/Casa 1/Img 4.jpg"
]
},

    5: {
        titulo: "Casa no Vila Ipanema",
        preco: "R$ 2.500",
        descricao: "Linda casa com 03 quartos, sendo 02 suítes, sendo uma delas com closet. Conta com sala de estar com pé direito duplo, sala de jantar, cozinha moderna e ambientes integrados, proporcionando um espaço amplo e arejado. Possui ainda área de serviço, área gourmet, área externa e banheiro social. Com aproximadamente 200m², oferece 02 vagas de garagem paralelas e está localizada em Vila Ipanema, um bairro com excelente localização.",
        localizacao: "Vila Ipanema, Ipatinga-MG",
        imagens: [
            "img/Apartamentos/Casa 2/Img 1.jpg",
             "img/Apartamentos/Casa 2/Img 2.jpg",
              "img/Apartamentos/Casa 2/Img 3.jpg",
           "img/Apartamentos/Casa 2/Img 4.jpg"
           ]
        
    },
    6: {
        titulo: "Casa no Vila Ipanema",
        preco: "R$ 3.000",
        descricao: "Linda casa com 03 quartos, sendo 01 suíte com closet e sacada, sala de estar, sala de TV, sala de jantar, cozinha moderna, área de serviços separada, 02 banheiros sociais, área gourmet e área externa de 70m². Com 206m² de área construída, oferece 04 vagas de garagem e uma fachada imponente. Localizada em Vila Ipanema, este imóvel combina excelente localização e conforto.",
        localizacao: "Vila Ipanema, Ipatinga-MG",
        imagens: [
            "img/Apartamentos/Casa 3/Img 1.jpg",
             "img/Apartamentos/Casa 3/Img 2.jpg",
              "img/Apartamentos/Casa 3/Img 3.jpg",
           "img/Apartamentos/Casa 3/Img 4.jpg"
           ]
        
    }
};

// Obtém o ID da URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');

if (propertyId && properties[propertyId]) {
const property = properties[propertyId];
const detailsContainer = document.getElementById('property-details');

// Monta o conteúdo dinâmico
detailsContainer.innerHTML = `
<div class="col-md-8">
    <h1 class="Titulo">${property.titulo}</h1>
   
    <p>${property.descricao}</p>
      <p><strong>📍 ${property.localizacao}</strong></p>
       <p class="preco" id=""> ${property.preco}</p>
      <p><strong class="Visita"> Agende sua Visita</strong><p>
        <form id="formContato" action="/enviar-contato" method="post" role="form" aria-label="Formulário de contato">
        <div class="form-group mb-3">
            <label for="nome" class="form-label">Nome completo</label>
            <input type="text" id="nome" name="nome" class="form-control" placeholder="Seu nome" required>
        </div>
        
        <div class="mb-3">
            <label for="telefone" class="form-label">Telefone</label>
            <input type="text" class="form-control" id="telefone" placeholder="(XX) XXXXX-XXXX">
        </div>
    
         <div class="form-group">
              <label for="validade">Data da Visita</label>
              <input type="date" id="validade" name="validade" required>
          </div>
        <div class="form-group mb-4">
            <label for="mensagem" class="form-label" id="Mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" class="form-control" rows="4" placeholder="Digite sua mensagem" required></textarea>
        </div>
        <div class="form-group d-flex justify-content-between">
           
            <button type="button" class="btn btn-primary mb-3" onclick="enviarFormulario()">Enviar Mensagem</button>
        </div>
    </form> 
</div>
<div class="col-md-4">
    ${property.imagens.map(img => `<img src="${img}" alt="${property.titulo}" class="img-fluid mb-2">`).join('')}
</div>
`;
} else {
document.body.innerHTML = '<p class="text-danger">Imóvel não encontrado.</p>';
}

