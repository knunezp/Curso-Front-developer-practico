const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon= document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
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

function openProductdDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}


function renderProduct(arr){
  for(product of arr){
    const productCard=document.createElement("div");
    productCard.classList.add("product-card");

    const productImage=document.createElement("img");
    productImage.setAttribute("src",product.image);
    productImage.addEventListener("click",openProductdDetailAside);

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