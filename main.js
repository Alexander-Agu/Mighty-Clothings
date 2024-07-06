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
}