const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");

const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");

const cardsContainer=document.querySelector(".cards-container");

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);

function toggleDesktopMenu(){
  desktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu(){
  mobileMenu.classList.toggle("inactive");
}

const productList=[];

productList.push(
  {
    name:"Bike",
    price:120,
    image:"./assets/bike.jpg"
  }
);
productList.push(
  {
    name:"Bike",
    price:120,
    image:"./assets/bike.jpg"
  }
);
productList.push(
  {
    name:"Bike",
    price:120,
    image:"./assets/bike.jpg"
  }
);

function renderProduct(arr){
  for(product of arr){
    const productCard=document.createElement("div");
    productCard.classList.add("product-card");

    const productImage=document.createElement("img");
    productImage.setAttribute("src",product.image);

    const productInfo=document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv=document.createElement("div");

    const productPrice=document.createElement("p");
    productPrice.innerText="$"+product.price;

    const productName=document.createElement("p");
    productName.innerText=product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure=document.createElement("figure");
    const productImgCart=document.createElement("figure");

    const img2=document.createElement("img");
    img2.setAttribute("src","./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfoFigure.appendChild(img2);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

  }
}


renderProduct(productList);