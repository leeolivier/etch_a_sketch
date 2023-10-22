const sizeOfGrid = 16

const container = document.querySelector(".container")
const resetButton = document.querySelector("button")

const createGrid = (amtOfGrids) => {

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement("div")
        row.classList.add("grid_row")

        for (let j = 0; j <amtOfGrids; j++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid_box")
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black"
            })
            row.appendChild(gridBox)
        }
        //container.appendChild(row)
        wrapper.appendChild(row)
    }
container.appendChild(wrapper)
}

createGrid(sizeOfGrid)
resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("What dimensions do you want for the new grid?"))
    while (userSize > 100) {
 
        userSize = Number(prompt("grid size small than 100?"))
    }
    const wrapper = document.querySelector(".wrapper")
    wrapper.remove()
    createGrid(userSize)
})
//createGrid(sizeOfGrid)