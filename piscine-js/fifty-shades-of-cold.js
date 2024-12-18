import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses() {
    let head = document.getElementsByTagName("head")[0]
    let style = document.createElement("style")
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`
    })
    console.log(style.innerHTML)
    head.appendChild(style)
}

export function generateColdShades() {
    let body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        if (
            color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null
        ) {
            let div = document.createElement("div")
            div.classList.add(color)
            div.innerHTML = color
            body.appendChild(div)
        }
    })
}

export function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {div.className = shade
        
    })
}
