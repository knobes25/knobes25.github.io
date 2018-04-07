//function for the acme JSON file
function getJson() {
const path = "/acme/js/acme.json";
    fetch(path)
        .then(response => response.json())
        .then(function(data){
        console.log('json object');
        console.log(data);
        navBar(data);
    })
    .catch(error =>console.log('There was an error: ', error));
}
getJson();
//Function for the nav bar
let nav = document.getElementById("page_nav");
function navBar(data){
    let navarray = ["Anvils", "Explosives", "Decoys", "Traps"];
    let page_nav = document.getElementById("page_nav")
    
    let list = "<ul>";
    for (let i=0, n = 5; i < n; i++) {
        list += "<li>" + data[navarray[i]] + "</li>";
    };
    list =+ "<ul>";
    
    page_nav.innerHTML = list;
    
    let anvil= document.getElementById("Anvils");
    let explosives = document.getElementById("Explosives");
    let decoys = document.getElementById("Decoys");
    let traps = document.getElementById("Traps");
    
    anvil.addEventListener("click", function(){
        displayData(data, navarray, 0)
    });
    explosives.addEventListener("click", function(){
        displayData(data, navarray, 1)
    });
    decoys.addEventListener("click", function(){
        displayData(data, navarray, 2)
    });
    traps.addEventListener("click", function(){
        displayData(data, navarray, 3)
    });
}

function displayData(data, name, n) {
     let home = document.getElementById("home-page");
    let name = document.getElementById("name");
    let info = document.getElementById("information");
    let pic = document.getElementById("productImage");
    let description = document.getElementById("description");
    let maker = document.getElementById("manufacturer");
    let reviews = document.getElementById("reviews");
    let price = document.getElementById("price");


    let product_container = document.getElementById("product_container");
    product_container.setAttribute("class", "show");
    home.setAttribute("class", "hide")
    
    name.innerHTML = data[name[n]].name;
    pic.innerHTML = "<img src = '" + data[name[n]].path + "' alt= 'image of current product' id='productImage'/>"
    description.innerHTML = data[name[n]].description;
    maker.innerHTML = data[name[n]].manufacturer;
    reviews.innerHTML = data[name[n]].reviews;
    price.innerHTML = data[name[n]].price;
}


//let nav = document.getElementById("page-nav");
//nav.addEventListener("click", function(event) {
//    event.preventDefault();
//    let product = event.target.dataset.name;
//    console.log(product);
//    displayData(data, name, n); 
//})