const URL_PATH = "https://asa-playground-public.s3.amazonaws.com";

var DEFAULT_ITEMS = [
  {
    id: 1,
    name: "Eras Tour Tickets",
    price: "$1500",
    location: "At Albert & Neena's",
    images: [`${URL_PATH}/ErasTour.webp`, `${URL_PATH}/cc-swift.jpg`],
  },
  {
    id: 2,
    name: "Barbie Dolls",
    price: "$30",
    location: "Ships to you",
    images: [
      `${URL_PATH}/barbie.jpeg`,
      `${URL_PATH}/doll1.jpeg`,
      `${URL_PATH}/doll2.jpeg`,
      `${URL_PATH}/doll3.jpeg`,
    ],
  },
  {
    id: 3,
    name: "Spa Day",
    price: "$175",
    location: "With spa dog",
    images: [
      `${URL_PATH}/mk-spa-day.jpeg`,
      `${URL_PATH}/spa-day.jpeg`,
      `${URL_PATH}/water.jpeg`,
    ],
  },
  {
    id: 4,
    name: "Cake",
    price: "$30",
    location: "At neighbor's place",
    images: [`${URL_PATH}/mk-cake.jpeg`, `${URL_PATH}/cake.jpeg`],
  },
  {
    id: 5,
    name: "Sounder's Tickets",
    price: "$185",
    location: "In the mail",
    images: [`${URL_PATH}/mk-sounders.jpeg`, `${URL_PATH}/soccer-tickets.png`],
  },
  {
    id: 6,
    name: "Trampoline",
    price: "$35",
    location: "Down the street",
    images: [`${URL_PATH}/mk-trampoline.jpeg`, `${URL_PATH}/trampoline.jpeg`],
  },
  {
    id: 7,
    name: "Alpine Lake Hike",
    price: "$18",
    location: "On a Mountain",
    images: [
      `${URL_PATH}/mk-alpine-lake.jpeg`,
      `${URL_PATH}/hike.jpeg`,
      `${URL_PATH}/hike-2.jpeg`,
    ],
  },
  {
    id: 8,
    name: "Paint Job",
    price: "$75",
    location: "Comes to You",
    images: [`${URL_PATH}/mk-paint.jpeg`, `${URL_PATH}/paint-job.jpeg`],
  },
  {
    id: 9,
    name: "Motel Stay",
    price: "$145",
    location: "On Aurora",
    images: [
      `${URL_PATH}/mk-motel.jpeg`,
      `${URL_PATH}/motel-job.jpeg`,
      `${URL_PATH}/motel.jpeg`,
      `${URL_PATH}/laundry.png`,
    ],
  },
  {
    id: 10,
    name: "Four-legged friend",
    price: "$500",
    location: "Comes on Command",
    images: [
      `${URL_PATH}/mk-dog.jpeg`,
      `${URL_PATH}/cc-dog.jpg`,
      `${URL_PATH}/c-and-bo.jpeg`,
      `${URL_PATH}/c-and-bo2.jpeg`,
    ],
  },
  {
    id: 11,
    name: "Love Lock",
    price: "Priceless",
    location: "On a pier in SF",
    images: [`${URL_PATH}/mk-love-lock.jpeg`, `${URL_PATH}/lock.jpeg`],
  },
  {
    id: 12,
    name: "Tulips",
    price: "$65",
    location: "In your Yard",
    images: [`${URL_PATH}/mk-tulips.jpeg`, `${URL_PATH}/flowers.jpeg`],
  },
  {
    id: 13,
    name: "Meditation Retreat",
    price: "$1200",
    location: "Somewhere quiet",
    images: [
      `${URL_PATH}/mk-meditation.jpeg`,
      `${URL_PATH}/meditation-retreat.jpeg`,
      `${URL_PATH}/bed.jpeg`,
    ],
  },
  {
    id: 14,
    name: "Fancy Dinner",
    price: "$115",
    location: "Where Eli is",
    images: [
      `${URL_PATH}/mk-fancy-meal.jpeg`,
      `${URL_PATH}/nice-meal.jpeg`,
      `${URL_PATH}/nice-meal2.jpeg`,
      `${URL_PATH}/pasta.jpeg`,
      `${URL_PATH}/bun.jpeg`,
      `${URL_PATH}/asian-dessert.jpeg`,
      `${URL_PATH}/farm-to-table-dinner.jpeg`,
      `${URL_PATH}/chinese-food.jpeg`,
    ],
  },
  {
    id: 15,
    name: "Kayak",
    price: "$215",
    location: "On the water",
    images: [`${URL_PATH}/mk-kayak.jpeg`, `${URL_PATH}/kayak.jpeg`],
  },
  {
    id: 16,
    name: "Ice Cream",
    price: "$12",
    location: "Within Walking Distance",
    images: [`${URL_PATH}/mk-ice-cream.jpeg`, `${URL_PATH}/icecream.jpeg`],
  },
  {
    id: 17,
    name: "REI Date",
    price: "$25",
    location: "Just down the road",
    images: [`${URL_PATH}/mk-rei.jpeg`, `${URL_PATH}/REI-date.jpeg`],
  },
  {
    id: 18,
    name: "Home Cooked Meal",
    price: "$55",
    location: "In Fridge",
    images: [`${URL_PATH}/mk-home-cooked-meal.jpeg`, `${URL_PATH}/bread.jpeg`],
  },
  {
    id: 19,
    name: "Open House",
    price: "$5",
    location: "In Your Favorite Neighborhood",
    images: [
      `${URL_PATH}/mk-house.jpeg`,
      `${URL_PATH}/house-tour-1.jpeg`,
      `${URL_PATH}/house-tour-2.jpeg`,
      `${URL_PATH}/house.jpeg`,
      `${URL_PATH}/house2.jpeg`,
      `${URL_PATH}/carpet.jpeg`,
      `${URL_PATH}/sf-move.jpeg`,
    ],
  },
  {
    id: 20,
    name: "Notarization",
    price: "$45",
    location: "UPS Store",
    images: [`${URL_PATH}/mk-notary.jpeg`, `${URL_PATH}/notary.jpeg`],
  },
  {
    id: 21,
    name: "Yoga Class",
    price: "$32",
    location: "On the beach",
    images: [`${URL_PATH}/mk-yoga.jpeg`, `${URL_PATH}/yoga-class.jpeg`],
  },
  {
    id: 22,
    name: "Sailing Trip",
    price: "$3200",
    location: "Between Islands",
    images: [`${URL_PATH}/mk-sailboat.jpeg`, `${URL_PATH}/bvi-trip.jpeg`],
  },
  {
    id: 23,
    name: "Couch",
    price: "$650",
    location: "The apartment across town",
    images: [`${URL_PATH}/mk-couch.jpeg`, `${URL_PATH}/couch.jpeg`],
  },
];

var STEP1 = [
  {
    id: 9.5,
    name: "Non-alcoholic Beer",
    price: "Free!",
    location: "Somewhere in the house",
    images: [`${URL_PATH}/mk-beeer.jpeg`],
  },
];

var STEP2 = [
  {
    id: 16.5,
    name: "Pickleball with Family",
    price: "Free!",
    location: "Parent's House",
    images: [`${URL_PATH}/mk-pickleball.jpeg`, `${URL_PATH}/pickleball.jpeg`],
  },
];

var STEP3 = [
  {
    id: 4.5,
    name: "DoorDash",
    price: "Free!",
    location: "Somewhere outside the house",
    images: [`${URL_PATH}/mk-doordash.jpeg`, `${URL_PATH}/doordash.jpeg`],
  },
];

var MARKETPLACE = {
  0: [...STEP1, ...DEFAULT_ITEMS],
  1: [...STEP2, ...DEFAULT_ITEMS],
  2: [...STEP3, ...DEFAULT_ITEMS],
};

var ALL_ITEMS = [...STEP1, ...STEP2, ...DEFAULT_ITEMS];
