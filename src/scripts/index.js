import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger");
    const drawerMenu = document.getElementById("drawer-menu");
  
    hamburgerBtn.addEventListener("click", function (event) {
      drawerMenu.classList.toggle("open");
      document.body.classList.toggle("nav-open");
      event.stopPropagation();
    });
  
    hamburgerBtn.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        drawerMenu.classList.toggle("open");
        document.body.classList.toggle("nav-open");
        event.preventDefault();
      }
    });
  
    drawerMenu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  
    document.addEventListener("click", function () {
      drawerMenu.classList.remove("open");
      document.body.classList.remove("nav-open");
    });
  
    // Mengambil data dari data,json
    fetch("data/DATA.json")
      .then((response) => response.json())
      .then((data) => displayRestaurants(data.restaurants))
      .catch((error) => console.error("Error loading restaurant data:", error));
  
    function displayRestaurants(restaurants) {
      const restaurantContainer = document.querySelector(".restaurant-container");
      restaurantContainer.innerHTML = "";
  
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement("div");
        restaurantItem.classList.add("restaurant");
  
        const restaurantImage = document.createElement("img");
        restaurantImage.classList.add("restaurant-image");
        restaurantImage.src = restaurant.pictureId;
        restaurantImage.alt = restaurant.name;
  
        const restaurantDetails = document.createElement("div");
        restaurantDetails.classList.add("restaurant-details");
  
        const restaurantName = document.createElement("h3");
        restaurantName.classList.add("restaurant-name");
        const restaurantLink = document.createElement("a");
        restaurantLink.href = "#";
        restaurantLink.textContent = restaurant.name;
        restaurantName.appendChild(restaurantLink);
  
        const restaurantCity = document.createElement("p");
        restaurantCity.classList.add("city");
        restaurantCity.textContent = restaurant.city;
  
        const restaurantRating = document.createElement("p");
        restaurantRating.classList.add("rating");
        restaurantRating.textContent = `Rating: ${restaurant.rating}`;
  
        const restaurantDescription = document.createElement("p");
        restaurantDescription.classList.add("description");
        restaurantDescription.textContent = restaurant.description;
  
        restaurantDetails.appendChild(restaurantName);
        restaurantDetails.appendChild(restaurantCity);
        restaurantDetails.appendChild(restaurantRating);
        restaurantDetails.appendChild(restaurantDescription);
  
        restaurantItem.appendChild(restaurantImage);
        restaurantItem.appendChild(restaurantDetails);
  
        restaurantContainer.appendChild(restaurantItem);
      });
    }
  });
