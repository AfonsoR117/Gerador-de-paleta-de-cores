const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // gerando um código de cor hexadecimal aleatório
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // criando um novo elemento 'li' e inserindo-o no contêiner
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
        // adicionando evento de clique ao elemento "li" atual para copiar a cor
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value")
    // copiando o valor hexadecimal, atualizando o texto a ser copiado,
    // e alterando o texto de volta ao valor hexadecimal original após 1 segundo
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000)
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click", generatePalette)
