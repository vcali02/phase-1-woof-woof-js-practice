document.addEventListener("DOMContentLoaded", () => {
    //DOM START

    //CONST
    const dogBarDiv = document.querySelector("#dog-bar")

    const dogInfoDiv = document.querySelector("#dog-info")
    const infoName = document.createElement("h2")
    const infoImg = document.createElement("img")
    const infoGood = document.createElement("button")




//1 get all the data
    fetch("  http://localhost:3000/pups")
    .then(res => res.json())
    //2 add pups to div
    .then(pups => {
        pups.map(pups => {
            const dogSpan = document.createElement("span")
            dogSpan.textContent = pups.name
            dogBarDiv.appendChild(dogSpan)

            //3 show pup details
            dogSpan.addEventListener("click", (e) => {
                e.preventDefault()

                infoName.textContent = pups.name
                infoImg.src = pups.image
                infoGood.textContent = pups.isGoodDog ? "Good Dog" : "Bad Dog"

            })
            
        })
    })
    
    //3 show pup details in main doggo section
    fetch("http://localhost:3000/pups/1")
    .then(res => res.json())
    .then(pup => {
        
        infoName.textContent = pup.name
        infoImg.src = pup.image
        infoGood.textContent = pup.isGoodDog ? "Good Dog" : "Bad Dog"
        
        dogInfoDiv.appendChild(infoName)
        dogInfoDiv.appendChild(infoImg)
        dogInfoDiv.appendChild(infoGood)
        
        infoGood.addEventListener("click", (e) => {
            e.preventDefault()
    
            pup.isGoodDog =! pup.isGoodDog
            infoGood.textContent = pup.isGoodDog ? "Good Dog" : "Bad Dog"
        })
    })








    //DOM END
})

























// // REFERENCE

// document.addEventListener('DOMContentLoaded',  () => {

//     //step 2 dog bar const
//     const dogBarDiv = document.getElementById('dog-bar')

//     //step 3 display const
//     const dogInfoDiv= document.querySelector("#dog-info")
//     const dogImg= document.createElement('img')
//     const dogH2= document.createElement("h2")
//     const dogBtn=document.createElement("button")


//     fetch("http://localhost:3000/pups")
//     .then(res => res.json())
//     .then(dogs => {
//         dogs.map(dog => {
//             const dogP= document.createElement('p')
//             const dogSpan = document.createElement('span')
//             dogSpan.textContent = dog.name
//             dogP.appendChild(dogSpan)
//             dogBarDiv.appendChild(dogP)


//             dogSpan.addEventListener('click', (e) => {
//                 e.preventDefault()

//                 dogImg.src=dog.image
//                 dogH2.textContent=dog.name
//                 dogBtn.textContent= dog.isGoodDog? "Good Dog!" : "Bad Dog!"

//                 dogInfoDiv.appendChild(dogImg)
//                 dogInfoDiv.appendChild(dogH2)
//                 dogInfoDiv.appendChild(dogBtn)


//                 dogBtn.addEventListener('click', (e) => {
//                     e.preventDefault()
//                     dog.isGoodDog =! dog.isGoodDog
//                     dogBtn.textContent = dog.isGoodDog? "Good Dog!" : "Bad Dog!"
//                 })
//             })
//         })
//     })






//     //click event dogBtn
//     //The button's text should change from Good to Bad or 
//     //Bad to Good
   




// //end of DOMContentLoaded
// })




// //all of the code that WORKED YAY!
// // document.addEventListener("DOMContentLoaded", () => {

    
// //     const dogBarDiv = document.querySelector("#dog-bar")
// //     const dogInfoDiv = document.querySelector("#dog-info")
// //     const pupImg = document.createElement("img")
// //     const pupH2= document.createElement("h2")
// //     const pupBtn = document.createElement("button")
    
// //     fetch("http://localhost:3000/pups")
// //     .then((res) => res.json()) 
// //     .then(dogs => {
// //         dogs.map(dogs => {
            
// //             const dogBarP= document.createElement("p")
// //             const dogSpan = document.createElement("span")
// //             dogSpan.innerText= dogs.name
// //             dogBarP.appendChild(dogSpan)
// //             dogBarDiv.append(dogBarP)
            
            
// //             dogSpan.addEventListener("click", (e) => {
// //                 e.preventDefault()
                
// //                 pupImg.src= dogs.image
// //                 pupH2.textContent= dogs.name
// //                 pupBtn.textContent= dogs.isGoodDog? "Good dog!" : "Bad dog!"

// //                 dogInfoDiv.appendChild(pupImg)
// //                 dogInfoDiv.appendChild(pupH2)
// //                 dogInfoDiv.appendChild(pupBtn)

// //                 pupBtn.addEventListener("click", (e) => {
// //                     e.preventDefault()
// //                     dogs.isGoodDog =!dogs.isGoodDog
// //                     pupBtn.textContent= dogs.isGoodDog? "Good dog!" : "Bad dog!"

// //                 })



// //             })


// //          })
   

// //     })



// // })





