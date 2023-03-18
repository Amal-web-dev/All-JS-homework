let hotel = [
    [
      {
        room: 1,
        price: 300,
        brand: "Luxe",
        children: false,
      },
      {
        room: 2,
        price: 4000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 3,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 4,
        price: 900,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 5,
        price: 700,
        brand: "Luxe",
        children: true,
      },
      {
        room: 6,
        price: 79000,
        brand: "President",
        children: true,
      },
      {
        room: 7,
        price: 600,
        brand: "Luxe",
        children: false,
      },
      {
        room: 8,
        price: 950,
        brand: "Luxe",
        children: true,
      },
    ],
    [
      {
        room: 9,
        price: 1900,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 10,
        price: 5000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 11,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 12,
        price: 250,
        brand: "Luxe",
        children: false,
      },
    ],
    [
      {
        room: 13,
        price: 10000,
        brand: "President",
        children: true,
      },
      {
        room: 14,
        price: 8000,
        brand: "President",
        children: false,
      },
    ],
  ];

  
  
  let rooms = {
    all_roms: [],
    rooms: 0,
  };



  let brands = {
    President: [],
    Deluxe: [],
    Luxe: [],
  };
  
  let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
  };

  let totalPrice = hotel.reduce((a, b) => {
    return a + b[1].price
   }, 0)

  for(let item of hotel) {
    for(let categ of item){
      hotel.eting = true
        if(categ.brand == Object.keys(brands)) {
            brands.push(categ.brand)
            console.log('yes');
        } 
    }
}
  console.log(brands);