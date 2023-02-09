const images = document.querySelector('#images');
const h1 = document.querySelector('#name')
const p = document.querySelector('#description')
const distancia = document.querySelector('#distance')
const travecia = document.querySelector('#travel')
const monn = document.querySelector('#moon');
const mars = document.querySelector('#mars');
const europe = document.querySelector('#europe');
const titan = document.querySelector('#titan');

// Requisção 
fetch('data.json').then(response => response.json().then(destinos => {
      
      

      key = 0
      
      
      let caminho = destinos.destinations[`${key}`]
      let img = caminho.images.webp;
      let planets = caminho;
      
      let { name, description, distance, travel } = planets
      
      images.setAttribute('src', img)
      h1.innerHTML = name
      p.innerHTML = description
      distancia.innerHTML = distance
      travecia.innerHTML = travel
      
      
      
}))


// Evenntos 

monn.addEventListener("click",()=>{
     
fetch('data.json').then(response => response.json().then(destinos => {
    
      

      key = 0
      
      
      let caminho = destinos.destinations[`${key}`]
      let img = caminho.images.webp;
      let planets = caminho;
      
      let { name, description, distance, travel } = planets
      
      images.setAttribute('src', img)
      h1.innerHTML = name
      p.innerHTML = description
      distancia.innerHTML = distance
      travecia.innerHTML = travel
      
      
      
}))

})
mars.addEventListener("click",()=>{
     
fetch('data.json').then(response => response.json().then(destinos => {

      key = 1
      
      
      let caminho = destinos.destinations[`${key}`]
      let img = caminho.images.webp;
      let planets = caminho;
      
      let { name, description, distance, travel } = planets
      
      images.setAttribute('src', img)
      h1.innerHTML = name
      p.innerHTML = description
      distancia.innerHTML = distance
      travecia.innerHTML = travel
      
      
      
}))

})
europe.addEventListener("click",()=>{
     
fetch('data.json').then(response => response.json().then(destinos => {

      key = 2
      
      
      let caminho = destinos.destinations[`${key}`]
      let img = caminho.images.webp;
      let planets = caminho;
      
      let { name, description, distance, travel } = planets
      
      images.setAttribute('src', img)
      h1.innerHTML = name
      p.innerHTML = description
      distancia.innerHTML = distance
      travecia.innerHTML = travel
      
      
      
}))

})
titan.addEventListener("click",()=>{
     
fetch('data.json').then(response => response.json().then(destinos => {
      

      key = 3
      
      
      let caminho = destinos.destinations[`${key}`]
      let img = caminho.images.webp;
      let planets = caminho;
      
      let { name, description, distance, travel } = planets
      
      images.setAttribute('src', img)
      h1.innerHTML = name
      p.innerHTML = description
      distancia.innerHTML = distance
      travecia.innerHTML = travel
      
      
      
}))

})








      







