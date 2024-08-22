// ----- HEADER ----- \\
const sidebar = document.querySelector(".sidebar");
function closeMenu(){
    sidebar.style.display = 'none';
};
function showMenu(){
    sidebar.style.display = 'flex';
}

// ----- COUPONS ----- \\
// 3 buttons that reveal a mistery gift
// only 1 button can be clicked out of the 3
let buttonClicked = false;
const couponOne = document.getElementById("coupon1");
const couponTwo = document.getElementById("coupon2");
const couponThree = document.getElementById("coupon3");

couponOne.onclick =()=>{
    buttonClicked = true;
    couponOne.innerHTML = '';
    couponOne.style.backgroundColor = "black";

    couponOne.style.border = '2px solid white';
    let h2 = document.createElement("h2");
    h2.textContent = "37% OFF Your first purchase";
    h2.id = 'won-coupon';
    couponOne.append(h2);
    checkClicked(buttonClicked, couponOne);
};
couponTwo.onclick =()=>{
    buttonClicked = true;
    couponTwo.innerHTML = '';
    couponTwo.style.backgroundColor = "black";

    couponTwo.style.border = '2px solid white';
    let h2 = document.createElement("h2");
    h2.textContent = "Your first pair of JORDANS are on the house";
    h2.id = 'won-coupon';
    couponTwo.append(h2);
    checkClicked(buttonClicked, couponTwo);
};
couponThree.onclick =()=>{
    buttonClicked = true;
    couponThree.innerHTML = '';
    couponThree.style.backgroundColor = "black";

    couponThree.style.border = '2px solid white';
    let h2 = document.createElement("h2");
    h2.textContent = "Sorry We only sell our items to good looking people only!!!";
    h2.id = 'won-coupon';
    couponThree.append(h2);
    checkClicked(buttonClicked, couponThree);
};

function checkClicked(btn, coupon){
    if(btn === true){
        if(coupon === couponOne){
            coupon.onclick = null;
            couponTwo.onclick = null;
            couponThree.onclick = null;
        }
        else if(coupon === couponTwo){
            coupon.onclick =null;
            couponOne.onclick = null;
            couponThree.onclick = null;
        }
        else if(coupon === couponThree){
            coupon.onclick =null;
            couponOne.onclick = null;
            couponTwo.onclick = null;
        }
    }
};

// ----- Scrolling ----- \\
let scrollContainer = document.querySelector(".coupon-gallery");
let leftBTN = document.getElementById("left");
let rightBTN = document.getElementById("right");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
});

rightBTN.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 150
});
leftBTN.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 150
});

// ----- SHOPPING CART ----- \\
// Constant Variable
const kickShopButton = document.getElementById('kick-btn');
const cargoShopButton = document.getElementById('cargp-btn');
const acesoryShopButton = document.getElementById('acces-btn');
const mainElement = document.querySelector('main');
/* const storeContainer = document.querySelector('.store-container'); */
const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati dolorum odit provident';

// Contains all the products added to the cart
// Returns one of these objects that are true
let basket = JSON.parse(localStorage.getItem('Mighty Cart')) || [];

// Product class that contains all the properties of my Kicks, Cargos and Accesories
class Product{
    constructor(img, name, price, des){
        this.img = img;
        this.name = name;
        this.price = price;
        this.des = des;
        this.quantity = 0;
    };
}

// Displays products and its valaues
Product.prototype.displayProduct = function(){
    for(let i = 0; i < basket.length; i++){
        if(basket[i].name === this.name){
            this.quantity = basket[i].quantity;
        };
    };

    return document.querySelector('.store-container').innerHTML += `
    <div class="store-item">
        <img src=${this.img} alt="KICKS" loading="eager">
        <h2>${this.name}</h2>
        <p>${this.des}</p>

        <div class="price">
            <h3>R${this.price}</h3>

            <div class="quantity">
                <button id='subtract-${this.name}'>
                    <span class="material-symbols-outlined">
                        remove
                    </span>
                </button>
 
                <p id='${this.name}-quantity'>${this.quantity > 0 ? this.quantity : 0}</p>

                <button id='add-${this.name}'>
                    <span class="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>
        </div>
    </div>
    `
};

// Gives the increase button functionality
Product.prototype.increaseItem = function(){
    // Gave every item a unique ID to make the add button work independently on all products 
    return document.getElementById(`add-${this.name}`).onclick = () => {
        if(this.quantity > 0){
            this.quantity += 1;
            for(let i = 0; i < basket.length; i++){
                if(basket[i].name === this.name){
                    basket[i].quantity = this.quantity;
                };
            };
        } else{
            this.quantity+= 1;
            basket.push({
                img: this.img,
                name: this.name,
                price: this.price,
                quantity: this.quantity,
                des: this.des
            });
        };
        saveData();

        // Displays the quantity of products
        document.getElementById(`${this.name}-quantity`).textContent = this.quantity;
    };
};

Product.prototype.decreaseButton = function(){
    // Gave every item a unique ID to make the subtract button work independently on all products 
    return document.getElementById(`subtract-${this.name}`).onclick = () => {
        this.quantity -= 1;
        if(this.quantity > 0){
            for(let i = 0; i < basket.length; i++){
                if(basket[i].name === this.name){
                    basket[i].quantity = this.quantity;
                };
            };
        } 
        else if(this.quantity === 0){
            basket.pop({
                img: this.img,
                name: this.name,
                price: this.price,
                quantity: this.quantity,
                des: this.des
            });
        };
        saveData()

        // Displays the quantity of products
        document.getElementById(`${this.name}-quantity`).textContent = this.quantity;
    };
};

// Saves Information to local storage
function saveData(){
    localStorage.setItem('Mighty Cart', JSON.stringify(basket));
}
console.log(basket)

// Instantiate kick products
const kick1 = new Product('img/Kicks/kick1.jpg', 'Jordan 1', 2500, description);
const kick2 = new Product('img/Kicks/kick2.jpg', 'Jordan 2', 200, description);
const kick3 = new Product('img/Kicks/kick3.jpg', 'Air Jordan', 3000, description);
const kick4 = new Product('img/Kicks/kick4.jpg', 'Air Max Trainers', 2300, description);

// Creates the Store Container div and appends it in the Main HTML Element
function createStoreContainer(){
    let div = document.createElement('div');
    div.className = 'store-container';
    mainElement.append(div);
};

// Easier and faster way to call all the prototypes eventListners on the products
function displayKicks(){
    const kickItems = [kick1, kick2, kick3, kick4];

    // To display product info in the HTML
    kickItems.map(x => x.displayProduct());

    // For the increase button functionaly
    kickItems.map(y => y.increaseItem());

    // For the decrease button functionaly
    kickItems.map(y => y.decreaseButton());
};

// Displays the kick products
kickShopButton.onclick = () => {
    mainElement.innerHTML = '';
    createStoreContainer();
    displayKicks();
};