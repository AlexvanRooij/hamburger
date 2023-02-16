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



function init() {
  burgers.sort(function(a, b) {
    if (a.price > b.price) return +1;
    if (a.price < b.price) return -1;
    return 0;
  })
  const menu = document.querySelector('.menu');
  burgers.forEach(element => {
    let item = document.createElement('li');
    item.innerHTML =  `<img alt='img' src='img/${element.picture}'>` +
                      `<p class='name'>${element.name}</p>` +
                      `<p class='price'>${element.price}</p>`;
    menu.append(item);
  });
}
