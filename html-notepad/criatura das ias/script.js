const cria = document.getElementById("b_n");
const btn = document.getElementById("com");
const botao = document.getElementById("meuBotao");
const container = document.getElementById("video-container");
const video = document.getElementById("meu-video");

const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_m.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
};

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;
let vivo = true;

/*---------------- CONTROLADOR ----------------*/
function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        if (!vivo) return;

        contador++;
        console.log("tempo:", contador);

        if (contador === 30) {
            cria.src = estados.puto;
        }

        if (contador === 60) {
            cria.src = estados.morto;
            vivo = false;
            clearInterval(intervalo);
            console.log("Morreu 💀");
        }
    }, 1000);
}

/*---------------- ALIMENTAR ----------------*/
function alimentar() {
    if (!vivo) {
        console.log("Já morreu, não adianta alimentar kkk");
        return;
    }

    cria.src = estados.comendo;
    contador = 0;
    console.log("Comendo");

    if (time_click) clearTimeout(time_click);
    if (time_out) clearTimeout(time_out);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

/*---------------- VIDEO ----------------*/
botao.addEventListener("click", () => {
    container.style.display = "block";
    video.play();
});

/*---------------- EVENTOS ----------------*/
btn.addEventListener("click", alimentar);

/*---------------- START ----------------*/
controlador();