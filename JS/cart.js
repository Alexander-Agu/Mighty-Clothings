// Users should be able to see their selected products to the cart
// They should be able toincrease and decrease their products
// They should also be able to check out

// Their final product price will be dertmined by the number of products and product prices

// Constant Variables
const cartContainer = document.querySelector('.cart-container');
const totalPrice = document.getElementById('total-price');

// Contains the cart data from local storage
let basket = JSON.parse(localStorage.getItem('Mighty Cart')) || [];
console.log(basket);

// Iterates throgh an array and display content on the html page
function searchBasket(){
    for(let i = 0; i < basket.length; i++){
        // Displays cart
        const displayCartItems = () => {
            return cartContainer.innerHTML += `
            <div class="cart-item">
                <img src=${basket[i].img} alt="" width="200">

                <div class="cart-info">
                    <h2>${basket[i].name}</h2>

                    <h2 id="total-price">R${basket[i].price}</h2>

                    <div class="cart-quantity">
                        <button>
                            <span class="material-symbols-outlined">
                                remove
                            </span>
                        </button>
            
                        <p>${basket[i].quantity}</p>

                        <button>
                            <span class="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            `
        };
        displayCartItems();
    };
};
searchBasket();



