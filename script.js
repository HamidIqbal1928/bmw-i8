
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });


  // Gallery filter 
  function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }



  // video
  function openEngineModal(videoSrc) {
    const modal = document.getElementById("engineModal");
    const video = document.getElementById("engineVideo");
    video.src = videoSrc;
    modal.style.display = "flex";
  }

  function closeEngineModal() {
    const modal = document.getElementById("engineModal");
    const video = document.getElementById("engineVideo");
    video.pause();
    video.currentTime = 0;
    video.src = '';
    modal.style.display = "none";
  }

  // car compare
  const models = {
    "3 Series": {
      name: "BMW 3 Series",
      img: "https://cdn.pixabay.com/photo/2022/01/13/12/53/night-6935142_1280.jpg",
      horsepower: "255 HP",
      speed: "0–100 km/h: 5.8s",
      topSpeed: "Top Speed: 250 km/h",
      efficiency: "Fuel Efficiency: 15 km/l",
      price: "$41,000"
    },
    "7 Series": {
      name: "BMW 7 Series",
      img: "https://www.autozonic.com/wp-content/uploads/2023/05/bmw-7-series-2023145-1280_645a714e91e67.jpg",
      horsepower: "523 HP",
      speed: "0–100 km/h: 4.3s",
      topSpeed: "Top Speed: 280 km/h",
      efficiency: "Fuel Efficiency: 10 km/l",
      price: "$93,000"
    },
    "X5": {
      name: "BMW X5",
      img: "https://th.bing.com/th/id/OIP.RVEHyTlZMXZPEcC9g-yp-gHaEo?rs=1&pid=ImgDetMain",
      horsepower: "375 HP",
      speed: "0–100 km/h: 5.3s",
      topSpeed: "Top Speed: 250 km/h",
      efficiency: "Fuel Efficiency: 11 km/l",
      price: "$65,000"
    },
    "i8": {
      name: "BMW i8",
      img: "https://th.bing.com/th/id/R.9053c13bb7c0be68f3382809f3cf8d9f?rik=Cqcy4T3IlVS8rA&pid=ImgRaw&r=0",
      horsepower: "369 HP",
      speed: "0–100 km/h: 4.4s",
      topSpeed: "Top Speed: 250 km/h",
      efficiency: "Fuel Efficiency: 47 km/l (Hybrid)",
      price: "$147,000"
    }
  };

  const model1Select = document.getElementById('model1');
  const model2Select = document.getElementById('model2');
  const comparisonContainer = document.getElementById('comparison');

  // Populate dropdowns
  Object.keys(models).forEach(model => {
    const opt1 = new Option(models[model].name, model);
    const opt2 = new Option(models[model].name, model);
    model1Select.appendChild(opt1);
    model2Select.appendChild(opt2.cloneNode(true));
  });

  function updateComparison() {
    const model1 = model1Select.value;
    const model2 = model2Select.value;
    comparisonContainer.innerHTML = '';

    [model1, model2].forEach((key) => {
      if (key && models[key]) {
        const car = models[key];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${car.img}" alt="${car.name}">
          <h2>${car.name}</h2>
          <ul>
            <li><strong>Horsepower:</strong> ${car.horsepower}</li>
            <li><strong>Acceleration:</strong> ${car.speed}</li>
            <li><strong>${car.topSpeed}</strong></li>
            <li><strong>${car.efficiency}</strong></li>
            <li><strong>Price:</strong> ${car.price}</li>
          </ul>
        `;
        comparisonContainer.appendChild(card);
      }
    });
  }


// Chart

  const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Top Speed (km/h)', '0-100 km/h (s)', 'Horsepower (HP)', 'Fuel Efficiency (km/l)'],
        datasets: [
          {
            label: 'BMW 3 Series',
            data: [250, 5.8, 255, 15],
            backgroundColor: 'rgba(0, 123, 255, 0.7)'
          },
          {
            label: 'BMW 7 Series',
            data: [280, 4.3, 523, 10],
            backgroundColor: 'black'
          }
        ]
      },
      options: {
        responsive: true,
        animation: {
          duration: 1500,
          easing: 'easeOutBounce'
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });