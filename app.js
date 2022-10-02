const Projects = document.querySelector(".cards-proj");
const Events = document.querySelector(".cards-event");
const Member = document.querySelector(".cards-member");

function CreateProject([img,tittle,content,link,keyword]){
    let code = `<li class="card">
                        <img class="card-img" src="${img}" alt="">
                        <div class="card-tittle">
                            ${tittle}
                        </div>
                        <div class="card-content">
                            ${content}
                        </div>
                        <div class="card-botton">
                            <div class="link">
                                <a href="${link}">Link</a>
                            </div>
                            <div class="chave">${keyword}</div>
                        </div>
                    </li>`
    Projects.innerHTML += code;
}

let Site = [
    "img", //link da imagem ou diretorio
    "SiteIEEE", //nome do projeto
    "Text", //descrição do projeto
    "Link", //link do projeto
    "HTML, CSS", //materias
]

function CreateEvent([img,tittle,content,link]){
    let code = `<li class="card">
    <img class="card-img" src="${img}" alt="">
    <div class="card-tittle">
        ${tittle}
    </div>
    <div class="card-content">
        ${content}
    </div>
    <div class="card-botton-style2">
        <div class="link">
            <a href="${link}">Link</a>
        </div>
</li>`
    Events.innerHTML += code;
}

let SECAIIX = [
    "", //link img ou diretorio
    "SECAI IX", //nome do evento
    "Text", //descrição do evento
    "", //link da pagina do evento
]

function AddMember([img,cargo,name,content,special,facebook,instagram,linkedin]){
    let code = `<li class="card-member">
    <img class="card-img-member" src="${img}" alt="${name}">
    <div class="card-Member-name">
        ${name}
    </div>
    <div class="cargo">
        ${cargo}
    </div>
    <div class="card-content">
        ${content}
    </div>
    <div class="card-botton-member">
        <div class="special">
        ${special}
        </div class="member-media">
        <a href="${facebook}"><i class="fa fa-facebook"></i></a>
        <a href="${instagram}"><i class="fa fa-instagram"></i></a>
        <a href="${linkedin}"><i class="fa fa-linkedin"></i></a>
    </div>
</li>`
    Member.innerHTML += code;
}

let NicolasGrisostolo = [
    "", //Local da Imagem (rota ou link)
    "Diretor do diretorio de robôtica", //Cargo
    "Nicolas Grisostolo", //Nome
    "coloque uma frase aqui", //Frase
    "coloque as especialisdades aqui", //Especialidade
    "", //Facebook
    "", //Instagram
    "", //Linkedin
]

let GulhermePanesi = [
    "Members IMG/Guilherme-Panesi.jpeg", //Local da Imagem (rota ou link)
    "Membro do diretorio de robôtica", //Cargo
    "Guilherme Panesi", //Nome
    "Eu sou Gabriel Panesi.", //Frase
    "Programação, Eletrônica Calculo", //Especialidade
    "", //Facebook
    "", //Instagram
    "", //Linkedin
]

let MarinaTexeira = [
    "https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg", //Local da Imagem (rota ou link)
    "Presidente do Ramo", //Cargo
    "Marina Texeira", //Nome
    "Coloque uma frase aqui", //Frase
    "coloque as especialisdades aqui", //Especialidade
    "", //Facebook
    "", //Instagram
    "", //Linkedin
]

let KlaussMarchi = [
    "https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg", //Local da Imagem (rota ou link)
    "Vice-Presidente do Ramo", //Cargo
    "Klauss Marchi", //Nome
    "Coloque uma frase aqui", //Frase
    "coloque as especialisdades aqui", //Especialidade
    "", //Facebook
    "", //Instagram
    "", //Linkedin
]

CreateProject(Site);

CreateEvent(SECAIIX);

AddMember(MarinaTexeira);
AddMember(KlaussMarchi);
AddMember(NicolasGrisostolo);
AddMember(GulhermePanesi);
