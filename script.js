var mainListDiv = document.getElementById("mainListDiv");
mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function() {
  mainListDiv.classList.toggle('show_list');
  mediaButton.classList.toggle('active');
}

function updateCountdown() {
const endDate = new Date("May 10, 2024 12:00:00").getTime();

const now = new Date().getTime();
const timeRemaining = endDate - now;

const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

document.getElementById("days").innerText = formatTime(days);
document.getElementById("hours").innerText = formatTime(hours);
document.getElementById("minutes").innerText = formatTime(minutes);
document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
return time < 10 ? "0" + time : time;
}
// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);
// Initial call to the function to avoid delay in displaying the countdown
updateCountdown();




function BikeInfo(Name,event) {
  document.getElementById('Brand').style.display = 'block';

  fetch('BikeInfo.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch JSON file');
      }
      return response.json();
    })

    .then(data => {
      document.getElementById('BrandName').textContent = event.target.textContent;
      for (var i = 1; i <= Object.keys(data[Name]).length; i++) {
        let bike = document.getElementById('bike' + i);
        let bikeInfo = data[Name][Name + i];
        bike.querySelector('h3').innerHTML = bikeInfo.h3;
        bike.querySelector('p').innerHTML = bikeInfo.p;
        bike.querySelector('h2').innerHTML = bikeInfo.h2;
        bike.querySelector('img').src = bikeInfo.image;
      };
      document.getElementById('dropdownlist').classList.remove('dropdown-content-show');
    })

    .catch(error => console.error('Error fetching JSON:', error));
}




function slideshow(event){

  fetch('BikeDetails.json')
  .then(response => {
    if(!response.ok) {
      throw new Error('Error to fetch Json file');
    }
    return response.json();
  })
  .then(data => {
    let Name = event.target.parentElement.querySelector('h3').innerHTML;
    // console.log(Name);

    for(var i = 1; i <= Object.keys(data[Name]).length; i++) {

      let BikeDetails = data[Name];
      // console.log(BikeDetails);
      let slide = document.getElementById('sliderTemp');

      slide.querySelector('h1').textContent = Name;
      slide.querySelector('img').src = BikeDetails.Image;
      slide.querySelector('#description').innerHTML = `<small>${BikeDetails.Description}</small>`;
      slide.querySelector('#engine').innerHTML = `<strong>Engine :</strong> ${BikeDetails.Engine}`;
      slide.querySelector('#max-power').innerHTML = `<strong>Max Power :</strong> ${BikeDetails.Max_Power}`;
      slide.querySelector('#max-torque').innerHTML = `<strong>Max Torque :</strong> ${BikeDetails.Max_Torque}`;
      slide.querySelector('#mileage').innerHTML = `<strong>Mileage :</strong> ${BikeDetails.Mileage}`;
      slide.querySelector('#top-speed').innerHTML = `<strong>Top Speed :</strong> ${BikeDetails.Top_Speed}`;
      slide.querySelector('#color').innerHTML = `<strong>Color :</strong> ${BikeDetails.Colors.join(', ')}`;
      slide.querySelector('#tank-capacity').innerHTML = `<strong>Tank Capacity :</strong> ${BikeDetails.Tank_Capacity}`;
      slide.querySelector('#wheelbase').innerHTML = `<strong>Wheelbase :</strong> ${BikeDetails.Wheelbase}`;      
      slide.querySelector('#input').innerHTML = `<strong>Price :</strong> ${BikeDetails.Price}`;
    }
  })
  .catch(error => console.error('Error fetching Json:', error));
}



function scrollToSliderTemp() {
  document.getElementById('slider').scrollIntoView({ behavior: 'smooth' });
}


function AccessoriesBike(event){
  let bikeElement = event.target.parentElement.parentElement;
  let bike = document.getElementById('Accessories');
  let Name = bikeElement.querySelector('h1').textContent;
  bike.querySelector('h1').textContent = Name;
  bike.querySelector('p').textContent = bikeElement.querySelector('#description').textContent;
  bike.querySelector('h3').textContent = bikeElement.querySelector('#input').textContent;
  if(bikeElement.querySelector('h1').textContent.includes('Royal Enfield'))
    bike.querySelector('img').src = `image/Bike Image/Royal Enfield/Original/${Name}.png`;
  else if(bikeElement.querySelector('h1').textContent.includes('Yamaha'))
    bike.querySelector('img').src = `image/Bike Image/Yamaha/Original/${Name}.png`;
  else if(bikeElement.querySelector('h1').textContent.includes('Bajaj'))
    bike.querySelector('img').src = `image/Bike Image/Bajaj/Original/${Name}.png`;
  else if(bikeElement.querySelector('h1').textContent.includes('Honda'))
    bike.querySelector('img').src = `image/Bike Image/Honda/Original/${Name}.png`;
  else if(bikeElement.querySelector('h1').textContent.includes('KTM'))
    bike.querySelector('img').src = `image/Bike Image/KTM/Original/${Name}.png`;
}



function Accessories(event){
  fetch('parts.json')
  .then(response => {
    if(!response.ok) {
      throw new Error('Error to fetch Json file');
    }
    return response.json();
  })
  .then(data => {
    const accessoriesBoxes = document.querySelectorAll('.AccessoriesBox');
    accessoriesBoxes.forEach(box => {
    box.remove();
    });
    let Name = event.target.parentElement.parentElement.querySelector('h1').textContent;
    for(var i = 1; i <= Object.keys(data[Name]).length; i++) {
      // console.log(data[Name]['Accessories'+i]);
      
      let Accessory = data[Name]['Accessories'+i];

      const targetDiv = document.getElementById('AccessoriesCTN');

      const newDiv = document.createElement('div');
      newDiv.classList.add('box');
      newDiv.classList.add('AccessoriesBox');
      newDiv.id = 'Accessories' + i;

      const imgDiv = document.createElement('div');
      imgDiv.classList.add('img');

      const img = document.createElement('img');
      img.src = Accessory.image; 

      const flexDiv = document.createElement('div');
      flexDiv.classList.add('flex1');

      const heartIcon = document.createElement('i');
      heartIcon.classList.add('fas');
      heartIcon.classList.add('fa-heart');

      flexDiv.appendChild(heartIcon);
      imgDiv.appendChild(img);
      imgDiv.appendChild(flexDiv);

      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('details');

      const h3 = document.createElement('h3');
      h3.textContent = Accessory.h3;

      const p = document.createElement('p');
      p.textContent = Accessory.p;

      const h2 = document.createElement('h2');
      h2.innerHTML = Accessory.h2;

      const button = document.createElement('button');
      button.classList.add('btn');
      button.textContent = 'Buy Now';

      detailsDiv.appendChild(h3);
      detailsDiv.appendChild(p);
      detailsDiv.appendChild(h2);
      detailsDiv.appendChild(button);

      newDiv.appendChild(imgDiv);
      newDiv.appendChild(detailsDiv);

      targetDiv.appendChild(newDiv);

    }
  })
  .catch(error => console.error('Error fetching Json:', error));
}



function scrollToAccessoriesTemp() {
  document.getElementById('Accessories').scrollIntoView({ behavior: 'smooth' });
}


function dropdownContentShow(){
  let dropdown = document.getElementById('dropdownlist');
  if(!dropdown.classList.contains('dropdown-content-show'))
  {
    dropdown.classList.add('dropdown-content-show');
      
  } else {
    dropdown.classList.remove('dropdown-content-show');
  }
}