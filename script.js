const btnBike = document.querySelectorAll(".botaoBike")

const imgBikes = ["https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?w=600&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1591047139334-337807f2b3e5?w=600&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1620802051782-725fa33db067?w=600&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1499115026740-47ec7a0d026e?w=600&h=400&fit=crop&auto=format"]

const imgBike = document.getElementById("bikeSelecionada")

const precos = document.querySelectorAll("precoBike")

btnBike.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "Indisponível"){
            alert("A bicicleta não está disponível. Escolha outra.")
        }
        else{
            imgBike.setAttribute("src", `${imgBikes[index]}`)

            document.getElementById("precoInfo").textContent = precos[index]
        }
    })
});

