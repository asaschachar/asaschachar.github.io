const URL_PATH = "https://asa-playground-public.s3.amazonaws.com";

var DEFAULT_ITEMS = [
  {
    id: 1,
    name: "Eras Tour Tickets",
    price: "$1500",
    location: "At Albert & Neena's",
    images: [`${URL_PATH}/ErasTour.webp`, `${URL_PATH}/ErasTour.webp`],
  },
  {
    id: 2,
    name: "Barbie Dolls",
    price: "$30",
    location: "Ships to you",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 3,
    name: "Spa Day",
    price: "$175",
    location: "With spa dog",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 4,
    name: "Cake",
    price: "$30",
    location: "At neighbor's place",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 5,
    name: "Sounder's Tickets",
    price: "$185",
    location: "In the mail",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 6,
    name: "Trampoline",
    price: "$35",
    location: "Down the street",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 7,
    name: "Alpine Lake Hike",
    price: "$18",
    location: "On a Mountain",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 8,
    name: "Paint Job",
    price: "$75",
    location: "Comes to You",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 9,
    name: "Motel Stay",
    price: "$145",
    location: "On Aurora",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 10,
    name: "Four-legged friend",
    price: "$500",
    location: "Comes on Command",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 11,
    name: "Love Lock",
    price: "Priceless",
    location: "On a pier in SF",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 12,
    name: "Tulips",
    price: "$65",
    location: "In your Yard",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 13,
    name: "Meditation Retreat",
    price: "$1200",
    location: "Somewhere quiet",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 14,
    name: "Fancy Dinner",
    price: "$115",
    location: "Where Eli is",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 15,
    name: "Kayak",
    price: "$215",
    location: "On the water",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 16,
    name: "Ice Cream",
    price: "$12",
    location: "Within Walking Distance",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 17,
    name: "REI Date",
    price: "$25",
    location: "Just down the road",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 18,
    name: "Home Cooked Meal",
    price: "$55",
    location: "In Fridge",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 19,
    name: "Open House",
    price: "$5",
    location: "In Your Favorite Neighborhood",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 20,
    name: "Notarization",
    price: "$45",
    location: "UPS Store",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 21,
    name: "Yoga Class",
    price: "$32",
    location: "On the beach",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
  {
    id: 22,
    name: "Sailing Trip",
    price: "$3200",
    location: "Between Islands",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
];

var STEP1 = [
  {
    id: 9.5,
    name: "Non-alcoholic Beer",
    price: "Free!",
    location: "Somewhere in the house",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
];

var STEP2 = [
  {
    id: 16.5,
    name: "Pickleball with Family",
    price: "Free!",
    location: "Parent's House",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
];

var STEP3 = [
  {
    id: 4.5,
    name: "DoorDash",
    price: "Free!",
    location: "Somewhere outside the house",
    images: [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    ],
  },
];

var MARKETPLACE = {
  0: [...STEP1, ...DEFAULT_ITEMS],
  1: [...STEP2, ...DEFAULT_ITEMS],
  2: [...STEP3, ...DEFAULT_ITEMS],
};

var ALL_ITEMS = [...STEP1, ...STEP2, ...DEFAULT_ITEMS];
