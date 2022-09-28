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

function AddMember([img,tittle,content,link]){
    let code = `<li class="card-member">
    <img class="card-img-member" src="Members IMG/Guilherme-Panesi.jpeg" alt="">
    <div class="card-Member-name">
        Guilherme Panesi
    </div>
    <div class="cargo">
        Cargo: Membro do diretorio de robôtica
    </div>
    <div class="card-content">
        Eu sou Gabriel Panesi.
    </div>
    <div class="card-botton-member">
        <div class="special">
            Programação, Eletrônica Calculo
        </div>
        <div class="link">
            <a href="">LinkIn</a>
        </div>
</li>`
    Member.innerHTML += code;
}

let GulhermePanesi = [
    "Members IMG/Guilherme-Panesi.jpeg", //Local da Imagem (rota ou link)
    "Guilherme Panesi", //Nome
    "Membro do diretorio de robôtica", //Cargo
    "Eu sou Gabriel Panesi.", //Frase
    "Programação, Eletrônica Calculo", //Especialidade
    "", //Link LinkedIN por enquanto
]

CreateProject(Site);

CreateEvent(SECAIIX);

AddMember(GulhermePanesi);
