// SIDEBAR TOGGLE
let cart = document.getElementById("cart");
let sidebar = document.querySelector(".sidebar");
let cross = document.querySelector("svg");

cart.addEventListener("click", () => {
  sidebar.style.visibility = "visible";
  sidebar.style.opacity = "1";
});

cross.addEventListener("click", () => {
  sidebar.style.opacity = "0";
  setTimeout(() => {
    sidebar.style.visibility = "hidden";
  }, 200);
});

window.addEventListener("click", function (e) {
  if (e.target === sidebar) {
    sidebar.style.opacity = "0";
    setTimeout(() => {
      sidebar.style.visibility = "hidden";
    }, 200);
  }
});

// DESCRIPTION TEXT CHANGE
let description = document.getElementById("description");
let ingredients = document.getElementById("ingredients");
let content = document.getElementById("description-ingredients");

description.addEventListener("click", () => {
  description.style.borderBottom = "2px solid #353535";
  ingredients.style.borderBottom = "2px solid #3535352a";
  content.innerText =
    "Our chocolate chip cookie dough is a delicious, timeless classic. It's our OG recipe, and always a fan favorite. Enjoy this chocolatey delight raw or baked into a soft, gooey cookie.";
});

ingredients.addEventListener("click", () => {
  description.style.borderBottom = "2px solid #3535352a";
  ingredients.style.borderBottom = "2px solid #353535";
  content.innerText =
    "Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate {Vitamin B1), Riboflavin {Vitamin B2}, Folic Acid), Sugar, Palm and/or Canola Oil, Cocoa (Processed with Alkali), High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Salt, Soy Lecithin, Chocolate.";
});
// BUTTONS

// INCREMENT/DECREMENT
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let quontity = document.querySelectorAll(".quontity");
let button = document.querySelectorAll(".content-main__button-quantity");

for (i = 0; i < quontity.length; i++) {
  let chosenQuontity = quontity[i];
  let count = 1;
  const increment = () => {
    count++;
    chosenQuontity.innerText = count;
    if (count > 50) {
      chosenQuontity.innerText = 50;
      count = 50;
    }
  };

  const decrement = () => {
    count--;
    chosenQuontity.innerText = count;
    if (count < 1) {
      chosenQuontity.innerText = 1;
      count = 1;
    }
  };

  plus[i].addEventListener("click", increment);

  minus[i].addEventListener("click", decrement);
}

// ADD TO CART

// CAROUSEL
let rigthArrow = document.querySelector("#rigth-carousel-arrow");
console.log(rigthArrow);

let carousel = document.querySelector(".image");
let carouselImage = carousel.querySelectorAll(".carousel-image");
console.log(carouselImage[0]);

// rigthArrow.addEventListener("click", () => {
//   carouselImage.forEach((image, i) => {
//     imageLength = image[i].clientWidth;
//     console.log(imageLength);
//     image[i++]
//   });
//   carousel.style.transform = `translateX(-${imageLength}px)`;
//   console.log("click");
// });

rigthArrow.addEventListener("click", () => {
 for (let i = 0; i < carouselImage.length; i++) {
  let carouselImageIndex = carouselImage[i];
  imageLength = carouselImageIndex.clientWidth;
carousel.style.transform = `translateX(-${imageLength}px)`;
i++;
console.log("click");
} 
})
