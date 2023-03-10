// Hier maak de de burgers array aan die er voor zorgt dat die ik kan gebruiken later
const burgers = [
  { name: 'Big King XL',
    price: 5.95,
    picture: 'bigking.png'
  },
  { name: 'Bacon King XL',
    price: 6.15,
    picture: 'baconking.png'
  },
  { name: 'Crispy Chicken',
    price: 4.90,
    picture: 'crispychicken.png'
  },
  { name: 'King Pollo',
    price: 4.50,
    picture: 'kingpollo.png'
  },
  { name: 'Whopper',
    price: 3.95,
    picture: 'whopper.png'
  },
  { name: 'Angry Whopper',
    price: 5.20,
    picture: 'whopperangry.png'
  }
]


// Deze functie word opgeroepen wanneer de pagina is geladen
function init() {
  // Hier sorteert hij de burgers van klein naar groot
  burgers.sort(function(a, b) {
    if (a.price > b.price) return +1;
    if (a.price < b.price) return -1;
    return 0;
  })
  // Hier selecteer ik de menu en voor elke element in de array maakt hij de burger aan
  const menu = document.querySelector('.menu');
  burgers.forEach(element => {
    let item = document.createElement('li');
    item.innerHTML =  `<img alt='img' src='img/${element.picture}'>` +
                      `<p class='name'>${element.name}</p>` +
                      `<p class='price'>${element.price}</p>`;
    // Hier zet hij de item in de menu
    menu.append(item);
  });
}
