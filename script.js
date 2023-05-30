let navbar = document.querySelector('.navbar-custom');
let counter1= document.querySelector('.maincounter1')
let counter2= document.querySelector('.maincounter2')
let counter3= document.querySelector('.maincounter3')

let wrapper = document.querySelector('.wrapper')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#303030';
    }
    else{
        navbar.style.backgroundColor = `transparent`
    }
});
function contatore (y,a,x){
        let counter= a
    let interval = setInterval(()=>{
        if(counter < x){
            counter++;
            y.innerHTML = counter
        }else{
            clearInterval(interval)
        }
    })
}
let confirm= false
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((element)=>{
        if (element.isIntersecting && confirm==false) {
            contatore(counter1,1,2016)
            contatore(counter2,8000,9600)
            contatore(counter3,300,1200)    
            confirm=true
        }
    })
})
observer.observe(counter2)




let annunci = [
    {titolo:'Divano',descrizione:'molto comodo',prezzo:'400',url:'https://banner2.cleanpng.com/20180330/acq/kisspng-couch-table-furniture-living-room-sofa-top-view-5abe0e69a1af97.1623232715224049696623.jpg'},
    {titolo:'Sedia',descrizione:'comoda',prezzo:'7',url:'https://banner2.cleanpng.com/20180330/acq/kisspng-couch-table-furniture-living-room-sofa-top-view-5abe0e69a1af97.1623232715224049696623.jpg'},
    {titolo:'Tavolo',descrizione:'spazioso',prezzo:'50',url:'https://banner2.cleanpng.com/20180330/acq/kisspng-couch-table-furniture-living-room-sofa-top-view-5abe0e69a1af97.1623232715224049696623.jpg'},
    {titolo:'Cereali',descrizione:'buoni',prezzo:'2',url:'https://banner2.cleanpng.com/20180330/acq/kisspng-couch-table-furniture-living-room-sofa-top-view-5abe0e69a1af97.1623232715224049696623.jpg'},
    {titolo:'Quaderno',descrizione:'nuovo',prezzo:'5',url:'https://www.causevox.com/wp-content/uploads/2011/05/logo-finished-1280x720.png'},
    {titolo:'Pc',descrizione:'boh',prezzo:'800',url:'https://img.freepik.com/premium-vector/vector-abstract-colorful-smooth-wave-lines-isolated-transparent-background-design-element-technology-science-music-modern-concept_206325-1207.jpg'},
]




annunci.forEach((element,index)=>{
    if (index>=annunci.length-3) {
        let div = document.createElement('div')
    div.classList.add('col-12','col-md-3','my-3')
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${element.url}" class="card-img-top custom-img" alt="...">
    <div class="card-body">
      <h3 class="card-title fw-bold">${element.titolo}</h3>
      <p class="card-title">${element.descrizione}</p>
      <p class="card-text fw-semibold fs-4">${element.prezzo}€</p>
      <div class="d-flex justify-content-between align-items-center">
      <a href="#" class="button-24 text-uppercase">add to cart<i class="fa-solid ms-3 fa-bag-shopping"></i></a><i class=" fa-regular me-3 fs-3 fa-heart"></i>
    </div>
    </div>
  </div>`
 wrapper.appendChild(div)    
    }   
})
let iconHearts= document.querySelectorAll('.fa-heart')
iconHearts.forEach((iconHeart)=>{
    iconHeart.addEventListener('click',()=>{
        iconHeart.classList.toggle('fa-solid')
        iconHeart.style.Color='red'
    })
})


















AOS.init()