document.addEventListener("DOMContentLoaded", () => {

    
    const dogBarDiv = document.querySelector("#dog-bar")
    const dogInfoDiv = document.querySelector("#dog-info")
    const pupImg = document.createElement("img")
    const pupH2= document.createElement("h2")
    const pupBtn = document.createElement("button")
    
    fetch("http://localhost:3000/pups")
    .then((res) => res.json())
    .then(dogs => {
        dogs.map(dogs => {
            
            const dogBarP= document.createElement("p")
            const dogSpan = document.createElement("span")
            dogSpan.innerText= dogs.name
            dogBarP.appendChild(dogSpan)
            dogBarDiv.append(dogBarP)
            
            
            dogSpan.addEventListener("click", (e) => {
                e.preventDefault()
                
                pupImg.src= dogs.image
                pupH2.textContent= dogs.name
                pupBtn.textContent= dogs.isGoodDog? "Good dog!" : "Bad dog!"

                dogInfoDiv.appendChild(pupImg)
                dogInfoDiv.appendChild(pupH2)
                dogInfoDiv.appendChild(pupBtn)

                pupBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    dogs.isGoodDog =!dogs.isGoodDog
                    pupBtn.textContent= dogs.isGoodDog? "Good dog!" : "Bad dog!"

                })



            })


         })
    })



})





