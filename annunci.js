let navbar = document.querySelector('.navbar-custom');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#303030';
    }
    else{
        navbar.style.backgroundColor = `black`
    }
});
fetch('./annunci.json')
.then((Response) => Response.json())
.then((data)=>{
    let cardwrapper = document.querySelector('#cardswrapper')
    function showcards(array) {
        cardwrapper.innerHTML=''
        array.forEach((element)=>{
            let div = document.createElement('div')
            div.classList.add('col','m-3')
            div.innerHTML=`<div class="card card-custom" style="width: 18rem;">
            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" class="m-2 custom-img" alt="...">
            <div class="card-body">
              <h3 class="card-title fw-bold text-truncate" title='${element.name}'>${element.name}</h3>
              <p class="card-title text-truncate" title='${element.category}'>${element.category}</p>
              <p class="card-text fw-semibold fs-4">${element.price}€</p>
              <div class="d-flex justify-content-between align-items-center">
              <a href="#" class="button-24 text-uppercase">add to cart<i class="fa-solid ms-3 fa-bag-shopping"></i></a><i class=" fa-regular me-3 fs-3 fa-heart"></i>
            </div>
            </div>
          </div>`
          cardwrapper.appendChild(div)
        });
        let iconHearts= document.querySelectorAll('.fa-heart')
        iconHearts.forEach((iconHeart)=>{
            iconHeart.addEventListener('click',()=>{
                iconHeart.classList.toggle('fa-solid')
                iconHeart.classList.toggle('red-custom')
            })
        })
    }
    showcards(data)
  
    let categoryswrapper = document.querySelector('#categoryswrapper')
//    funzione che serve per prendere le singole categorie dell array-like data
    function setCategorysFilter(array) {
        let categorys = data.map((element)=>element.category)
        let ucategorys = []
        categorys.forEach((category) => {
            if (!ucategorys.includes(category)) {
                ucategorys.push(category)
            }     
        });

        ucategorys.forEach((element)=>{
            let div = document.createElement('div')
            div.classList.add('form-check')
            div.innerHTML=`<input class="form-check-input" type="radio" name="flexRadioDefault" id="${element}">
            <label class="form-check-label" for="${element}">
              ${element}
            </label>`
            categoryswrapper.appendChild(div)
        })
    }
    setCategorysFilter()
    let inputs = document.querySelectorAll('.form-check-input')
    function filterByCategory() {
        let InputsBtn = Array.from(inputs)
        let check = InputsBtn.find((element)=>element.checked)
        //console.log(check);
        let filtered = data.filter((element)=>element.category==check.id)
        //console.log(filtered);
        if(check.id != 'all'){
            return filtered
        } else {
            return data
        }

    }
    inputs.forEach((input)=>{
        input.addEventListener('click', ()=>{
            globalFunction()
        })
    })

let FiltraPerPrice = document.querySelector('#FiltraPerPrice')
let ValueByRange = document.querySelector('#ValueByRange')


 function MaximPrice(){
    let price = data.map((element) => +element.price)
    let maxPrice = Math.ceil(Math.max(...price))
    let minPrice = Math.min(...price)
    FiltraPerPrice.max = maxPrice
    FiltraPerPrice.min = minPrice
    FiltraPerPrice.value = maxPrice
 }


 function FilterByPrice(array){
    let filtered = array.filter(element => +element.price <= +FiltraPerPrice.value)
    ValueByRange.innerHTML=`${FiltraPerPrice.value}`
    return filtered
 }

 FiltraPerPrice.addEventListener('input', () => {
    globalFunction()
 })

 MaximPrice()

let inputSearch = document.querySelector('#inputSearch')
let SearchBtn = document.querySelector('#SearchBtn')


SearchBtn.addEventListener('click', () => {
    globalFunction()
})



function FilterBySearch(array){
    let inputValue = inputSearch.value
    let filtered = array.filter((element) => +element.name.toLowerCase().includes(inputValue.toLowerCase()) ) 
    return filtered
 }

 function globalFunction () {
  let filteredByCategory = filterByCategory(data)
  let FilteredByPrice = FilterByPrice(filteredByCategory)
  let FilteredBySearch = FilterBySearch(FilteredByPrice)
  showcards(FilteredBySearch)
 }


    AOS.init()
})