document.querySelectorAll(".maison-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        let maison = this.getAttribute("data-maison")
        filterCartes(maison)
        updateCouleurs(maison)
        // changeBackground(maison)
    })
})

document.getElementById("reset").addEventListener("click", () => {
    filterCartes() // sans argument pour tout afficher
    updateCouleurs() // reinitialiser les couleurs
    // changeBackground()
})

// function changeBackground(maison) {
//     const maisonsContainer = document.getElementById("maisons") 
//     switch(maison) {
//         case "Gryffondor":
//             maisonsContainer.style.backgroundColor = "#740001"
//             break
//         case "Serpentard":
//             maisonsContainer.style.backgroundColor = "#1a472a"
//             break
//         case "Serdaigle":
//             maisonsContainer.style.backgroundColor = "#222f5b"
//             break
//         case "Poufsouffle":
//             maisonsContainer.style.backgroundColor = "#ffdb00"
//             break
//         default:
//             // Vous pouvez définir une couleur par défaut si nécessaire
//             maisonsContainer.style.backgroundColor = "#E4EBF5"
//             break
//     }
// }

function filterCartes(maison) {
    document.querySelectorAll(".hp-card").forEach(carte => {
        if (!maison || carte.getAttribute("data-maison") === maison) {
            carte.style.display = "block"
        } else {
            carte.style.display = "none"
        }
    })
}

function updateCouleurs(maison = "") {
    const root = document.documentElement
    switch(maison) {
        case "Gryffondor":
            root.style.setProperty("--dark-text", "#740001")
            break
        case "Serpentard":
            root.style.setProperty("--dark-text", "#1a472a")
            break
        case "Serdaigle":
            root.style.setProperty("--dark-text", "#222f5b")
            break
        case "Poufsouffle":
            root.style.setProperty("--dark-text", "#ffdb00")
            break
        default:
            root.style.setProperty("--dark-text", "#000")
            break
    }
}