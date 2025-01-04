document.addEventListener("DOMContentLoaded", () => {
  const carList = document.getElementById("car-list");

  // Fetch car data from JSON server
  fetch("http://localhost:3001/cars")
    .then((response) => response.json())
    .then((data) => displayCars(data))
    .catch((error) => console.error("Error fetching cars:", error));

  // Display car data
  function displayCars(cars) {
    cars.forEach((car) => {
      const carDiv = document.createElement("div");
      carDiv.classList.add("car");

      carDiv.innerHTML = `
        <img src="${car.image}" alt="${car.name}" class="car-image" />
        <h3>${car.name}</h3>
        <p>Price: ${car.price}</p>
        <button data-id="${car.id}">More Info</button>
      `;

      // Add event listeners for interaction
      const carImage = carDiv.querySelector(".car-image");
      carImage.addEventListener("mouseover", () => carDiv.classList.add("car-hover"));
      carImage.addEventListener("mouseout", () => carDiv.classList.remove("car-hover"));
      carImage.addEventListener("click", () => alert(`You clicked on ${car.name}`));

      carList.appendChild(carDiv);
    });
  }
});
