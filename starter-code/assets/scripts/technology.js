
const h1 = document.querySelector('#titulo')
const descricao = document.querySelector('#descricao')
const image = document.querySelector('#img')


const nav1 = document.querySelector("#nav1")
const nav2 = document.querySelector("#nav2")
const nav3 = document.querySelector("#nav3")

fetch('data.json').then(Response => Response.json().then(resposta =>{
      

      let caminho = resposta.technology[0]
  
      let {name,description} = caminho

      let images = caminho.images.portrait
  


      

      image.setAttribute('src',images)
      h1.innerHTML=name
      descricao.innerHTML=description


}))

nav1.addEventListener('click',()=>{
      fetch('data.json').then(Response => Response.json().then(resposta =>{
      

            let caminho = resposta.technology[0]
        
            let {name,description} = caminho
      
            let images = caminho.images.portrait
        
      
      
            
      
            image.setAttribute('src',images)
            h1.innerHTML=name
            descricao.innerHTML=description
      
      
      }))
})

nav2.addEventListener('click',()=>{
      fetch('data.json').then(Response => Response.json().then(resposta =>{
      

            let caminho = resposta.technology[1]
        
            let {name,description} = caminho
      
            let images = caminho.images.portrait
        
      
      
            
      
            image.setAttribute('src',images)
            h1.innerHTML=name
            descricao.innerHTML=description
      
      
      }))
})

nav3.addEventListener('click',()=>{
      fetch('data.json').then(Response => Response.json().then(resposta =>{
      

            let caminho = resposta.technology[2]
        
            let {name,description} = caminho
      
            let images = caminho.images.portrait
        
      
            
            
            
            image.setAttribute('src',images)
            h1.innerHTML=name
            descricao.innerHTML=description
            
            
      }))
})



