var itemList = [
  (item1 = {
    img1: "Aakash/shop/img/shop02.jpg",
    img2: "Aakash/shop/img/shop08.jpg",
    rating: 0,
    name: "Asperiores Repellat",
    old_cost: null,
    cost: "£56.00",
  }),
  (item2 = {
    img1: "Aakash/shop/img/shop16.jpg",
    img2: "Aakash/shop/img/shop14.jpg",
    rating: 0,
    name: "Blanditiis Praesentium",
    old_cost: "£100.00",
    cost: "£90.00",
  }),
  (item3 = {
    img1: "Aakash/shop/img/shop05.jpg",
    img2: "Aakash/shop/img/shop09.jpg",
    rating: 2,
    name: "Consequuntur Magni",
    old_cost: "£115.00",
    cost: "£102.00",
  }),
  (item4 = {
    img1: "Aakash/shop/img/shop06.jpg",
    img2: "Aakash/shop/img/shop02.jpg",
    rating: 2,
    name: "Cras Eget Augue",
    old_cost: null,
    cost: "£110.00",
  }),
  (item5 = {
    img1: "Aakash/shop/img/shop17.jpg",
    img2: "Aakash/shop/img/shop16.jpg",
    rating: 0,
    name: "Doloremque Laudantium",
    old_cost: "£120.00",
    cost: "£107.00",
  }),
  (item6 = {
    img1: "Aakash/shop/img/shop08.jpg",
    img2: "Aakash/shop/img/shop10.jpg",
    rating: 4,
    name: "Ipsum Amet Dummy",
    old_cost: "£95.00",
    cost: "£77.00",
  }),
  (item7 = {
    img1: "Aakash/shop/img/shop15.jpg",
    img2: "Aakash/shop/img/shop13.jpg",
    rating: 2,
    name: "Lorem Ipsum",
    old_cost: null,
    cost: "£98.00",
  }),
  (item8 = {
    img1: "Aakash/shop/img/shop12.jpg",
    img2: "Aakash/shop/img/shop06.jpg",
    rating: 4,
    name: "Mauris Eget Diam",
    old_cost: null,
    cost: "£80.00",
  }),
  (item9 = {
    img1: "Aakash/shop/img/shop13.jpg",
    img2: "Aakash/shop/img/shop10.jpg",
    rating: 3,
    name: "Molestiae Consequatur",
    old_cost: null,
    cost: "£88.00",
  }),
  (item10 = {
    img1: "Aakash/shop/img/shop01.jpg",
    img2: "Aakash/shop/img/shop12.jpg",
    rating: 3,
    name: "Nam Libero Tempore",
    old_cost: null,
    cost: "£88.00",
  }),
  (item11 = {
    img1: "Aakash/shop/img/shop11.jpg",
    img2: "Aakash/shop/img/shop07.jpg",
    rating: 2,
    name: "Nam Mattis Eros",
    old_cost: null,
    cost: "£80.00",
  }),
  (item12 = {
    img1: "Aakash/shop/img/shop04.jpg",
    img2: "Aakash/shop/img/shop15.jpg",
    rating: 0,
    name: "Nemo Enim Ipsam",
    old_cost: null,
    cost: "£70.00",
  }),
  (item13 = {
    img1: "Aakash/shop/img/shop14.jpg",
    img2: "Aakash/shop/img/shop05.jpg",
    rating: 3,
    name: "Quisque Sed Diam",
    old_cost: null,
    cost: "£35.00",
  }),
  (item14 = {
    img1: "Aakash/shop/img/shop03.jpg",
    img2: "Aakash/shop/img/shop11.jpg",
    rating: 1,
    name: "Sapiente Delectus",
    old_cost: "£85.00",
    cost: "£68.00",
  }),
  (item15 = {
    img1: "Aakash/shop/img/shop10.jpg",
    img2: "Aakash/shop/img/shop04.jpg",
    rating: 5,
    name: "Specimen Book",
    old_cost: null,
    cost: "£100.00",
  }),
  (item16 = {
    img1: "Aakash/shop/img/shop07.jpg",
    img2: "Aakash/shop/img/shop03.jpg",
    rating: 0,
    name: "Totam Rem Aperiam",
    old_cost: null,
    cost: "£150.00",
  }),
  (item17 = {
    img1: "Aakash/shop/img/shop09.jpg",
    img2: "Aakash/shop/img/shop16.jpg",
    rating: 5,
    name: "Voluptatem Accusantium",
    old_cost: null,
    cost: "£98.00",
  }),
];
// Product Categories
var cleanser = [
  item1,
  item3,
  item4,
  item6,
  item8,
  item9,
  item11,
  item13,
  item14,
  item15,
  item16,
];
var concealers = [item1, item7];
var eye_makeup = [item7, item10, item16, item17];
var face_powder = [item15];
var hair_care = [item4, item7, item10, item14, item15, item16, item17];
var hair_sprays = [item12];
var lip_makeup = [
  item3,
  item4,
  item6,
  item8,
  item10,
  item11,
  item12,
  item14,
  item16,
  item17,
];
var makeup = [item2, item10, item16];
var nail_care = [item7, item10];
var night_creams = [item5];
var uncategorized = [];
// Product Tags
var adipiscing = [item6, item8, item11, item14];
var augue = [item2, item3, item7];
var bibendum = [item4, item17];
var cras = [item2, item3, item7];
var dapibus = [item10, item13];
var eget = [item2, item3, item4, item7, item17];
var etiam = [item5, item15];
var leo = [item4, item17];
var pretium = [item1, item9, item12, item16];
var quis = [item1, item9, item12, item16];
var sem = [item6, item8, item11, item14];
var ultricies = [item5, item15];
var viverra = [item10, item13];

function categorized(category) {
  let old_children = document.querySelector(
    ".featured-p > .prodContainer.flex"
  ).children;
  let n = old_children.length;
  for (let i = 0; i < n; i++) {
    old_children[0].remove();
  }
  for (let i = 0; i < category.length; i++) {
    makeItem(category[i]);
  }
  let catOrTag = this.parentElement.parentElement.children[0].innerHTML;

  if (catOrTag == "Product Categories")
    document.getElementById(
      "result-count"
    ).innerHTML = `Showing ${category.length} products with category "${this.innerHTML}"`;
  else
    document.getElementById(
      "result-count"
    ).innerHTML = `Showing ${category.length} products with tag "${this.innerHTML}"`;
  EventListenFn();
}

function EventListenFn() {
  var toCartBtn = document.querySelectorAll('.btn[title="Add to Cart"]');
  for (let i = 0; i < toCartBtn.length; i++) {
    toCartBtn[i].addEventListener("click", (e) => {

      let prodCard = e.currentTarget.parentElement.parentElement;
      let a = prodCard.children[4].children[0].innerHTML;
      let b = prodCard.children[5].innerHTML;
      storeItem(a, b);
    });
  }
}

// window.onload = () => {
  // let addBtn = document.querySelectorAll(".cards .btn");
  // for (let i = 0; i < addBtn.length; i++) {
  //   addBtn[i].addEventListener("click", (e) => {
  //     const Btn = e.currentTarget;
  //     let a, b;
  //     a = Btn.parentElement.children[1].innerHTML;
  //     b = Btn.parentElement.children[2].innerHTML;
  //     storeItem(a, b);
  //     Btn.classList.add('added');
  //     Btn.setAttribute('disabled', 'disabled');
  //     setTimeout( function() {
  //       Btn.classList.remove('added')
  //       Btn.removeAttribute('disabled');
  //     }, 1500);
  //   });
  // }
// };

function makeItem(
  item,
  parent = document.querySelector(".featured-p .prodContainer.flex")
) {
  let prod = document.createElement("div");
  parent.appendChild(prod);

  let temp;
  if (item.old_cost !== null)
    temp = `<span class="old-cost">${item.old_cost}</span>`;
  else temp = "";

  let star = "";
  for (let i = 0; i < 5; i++) {
    for (i; i < item.rating; i++) {
      star += `<span class="fa fa-star checked"></span>`;
    }
    if (i != 5) star += `<span class="fa fa-star"></span>`;
  }
  prod.outerHTML = `<div class="prod rel">
    <a href="Aakash/shop/products/${item.name}.html"><img class="img1" src="${
    item.img1
  }" alt=""/></a>
    <a href="Aakash/shop/products/${item.name}.html"><img class="img2" src="${
    item.img2
  }" alt=""/></a>
    <div class="prod-btn flex abs">
      <button onclick="storeWishItem(this.children[0].innerHTML)" title="Add to Wishlist" class="btn fa fa-heart"><span style="display:none">${JSON.stringify(
        item
      )}</span></button>
      <button title="Add to Cart" class="btn fa fa-cart-plus"></button>
    </div>
    <div class="star-container">
    ${star}
    </div>
    <p><a href="Aakash/shop/products/${item.name}.html">${item.name}</a></p>
    ${temp}
    <span class="prod-cost">${item.cost}</span>
  </div>`;
}

function makeWishItem(item) {
  let prod = document.createElement("div");
  document.querySelector(".featured-p > .prodContainer.flex").appendChild(prod);

  let temp;
  if (item.old_cost !== null)
    temp = `<span class="old-cost">${item.old_cost}</span>`;
  else temp = "";

  let star = "";
  for (let i = 0; i < 5; i++) {
    for (i; i < item.rating; i++) {
      star += `<span class="fa fa-star checked"></span>`;
    }
    if (i != 5) star += `<span class="fa fa-star"></span>`;
  }

  prod.outerHTML = `<div style="border:1px solid #eee" class="prod rel">
    <a href="Aakash/shop/products/${item.name}.html"><img class="img1" src="${item.img1}" alt=""/></a>
    <a href="Aakash/shop/products/${item.name}.html"><img class="img2" src="${item.img2}" alt=""/></a>
    <div class="prod-btn flex abs">
      <button title="Add to Cart" class="btn fa fa-cart-plus"></button>
      <button class="btn fa fa-arrows-alt"></button>
    </div>
    <div class="star-container">
    ${star}
    </div>
    <p><a href="Aakash/shop/products/${item.name}.html">${item.name}</a></p>
    ${temp}
    <span class="prod-cost">${item.cost}</span></br></br>
    <div style="text-align:center"><button class='btn wishRemove'>Remove</button></div>
  </div>`;
}
