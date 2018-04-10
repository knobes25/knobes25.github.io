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
function navBar(data) {
   for (i=0; i<=5; i++){
       let navname = data.navarray[i];
       let display = '';
       display += navname;
       console.log(display);
       document.getElementById(i).innerHTML = display;
   }
   
       
 
}

let nav = document.getElementById("page_nav");
nav.addEventListener("click", function(event) {
    let selection = event.target.innerHTML;
    event.preventDefault();
    console.log(selection);
    if(selection !== 'Home'){
        document.getElementById('home-page').setAttribute('class', 'hide');
        document.getElementById('product_container').setAttribute('class', 'show');
        const path = "/acme/js/acme.json";
        fetch(path)
        .then(response => response.json())
        .then(function(data){
        console.log('json object');
        console.log(data);
        data = data[selection];
        displayData(data);
    })
    .catch(error =>console.log('There was an error: ', error));
}
    
    else if(selection == 'Home'){
         document.getElementById('home-page').setAttribute('class', 'show');
        document.getElementById('product_container').setAttribute('class', 'hide');
        document.getElementById("title").innerHTML = "ACME | Home"; 
    }
    
});

function displayData(data) {
     let home = document.getElementById("home-page");
    let name = document.getElementById("name");
    let pic = document.getElementById("productImage");
    let description = document.getElementById("description");
    let maker = document.getElementById("manufacturer");
    let reviews = document.getElementById("reviews");
    let price = document.getElementById("price");
    
    name.innerHTML = data.name;
    pic.src = data.path;
    description.innerHTML = data.description;
    maker.innerHTML = data.manufacturer;
    reviews.innerHTML = data.reviews;
    price.innerHTML = data.price;
    document.getElementById("title").innerHTML = "ACME | " + data.name;
}


