const h1 = document.querySelector("#name")
const biografia = document.querySelector("#biografia")
const profissional  = document.querySelector("#role")


const image = document.querySelector('#img')

const crew1 = document.querySelector('#crew1')
const crew2 = document.querySelector('#crew2')
const crew3 = document.querySelector('#crew3')
const crew4 = document.querySelector('#crew4')


fetch("data.json").then(Response=>Response.json().then(crew =>{
      
      
      let caminho = crew.crew[0]

      let {name, bio, role} =caminho

      let img = caminho.images.webp


      image.setAttribute('src',img)
      profissional.innerHTML = role
      h1.innerHTML = name
      biografia.innerHTML = bio

      


}))




crew1.addEventListener('click',()=>{

      fetch("data.json").then(Response=>Response.json().then(crew =>{
      
      
            let caminho = crew.crew[0]
      
            let {name, bio, role} =caminho
      
            let img = caminho.images.webp
      
      
            image.setAttribute('src',img)
            profissional.innerHTML = role
            h1.innerHTML = name
            biografia.innerHTML = bio
      
            
      
      
      }))

})
crew2.addEventListener('click',()=>{

      fetch("data.json").then(Response=>Response.json().then(crew =>{
      
      
            let caminho = crew.crew[1]
      
            let {name, bio, role} =caminho
      
            let img = caminho.images.webp
      
      
            image.setAttribute('src',img)
            profissional.innerHTML = role
            h1.innerHTML = name
            biografia.innerHTML = bio
      
            
      
      
      }))

})
crew3.addEventListener('click',()=>{

      fetch("data.json").then(Response=>Response.json().then(crew =>{
      
      
            let caminho = crew.crew[2]
      
            let {name, bio, role} =caminho
      
            let img = caminho.images.webp
      
      
            image.setAttribute('src',img)
            profissional.innerHTML = role
            h1.innerHTML = name
            biografia.innerHTML = bio
      
            
      
      
      }))

})
crew4.addEventListener('click',()=>{

      fetch("data.json").then(Response=>Response.json().then(crew =>{
      
      
            let caminho = crew.crew[3]
      
            let {name, bio, role} =caminho
      
            let img = caminho.images.webp
      
      
            image.setAttribute('src',img)
            profissional.innerHTML = role
            h1.innerHTML = name
            biografia.innerHTML = bio
      
            
      
      
      }))

})


