const URL_PATH = "https://asa-playground-public.s3.amazonaws.com";

var DEFAULT_ITEMS = [
  {
    id: 1,
    name: "Eras Tour Tickets",
    price: "$1500",
    location: "At Albert & Neena's",
    images: [`${URL_PATH}/ErasTour.webp`, `${URL_PATH}/cc-swift.jpg`],
    msg: "I'm sorry I give TSwift a hard time. Maybe I'm slightly jealous cause I want to be the star that Christine adores. And not in that cute-furry-butt kinda way 🍑. Glad I got to experience the concert with you and sorry you blacked out",
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
    msg: "Damn, that's my wife! Honestly, where can I order these barbies? They really get me going 🍆",
  },
  {
    id: 3,
    name: "Spa Day",
    price: "$175",
    location: "With spa dog",
    images: [
      `${URL_PATH}/mk-spa-day.jpeg`,
      `${URL_PATH}/spa-day.jpeg`,
      `${URL_PATH}/bed.jpeg`,
      `${URL_PATH}/water.jpeg`,
    ],
    msg: "This is secretly one of my favorite parts about you. It's the true 'I don't give a shit that you know I use dry shampoo christine attitude' that makes me know you do things for you and not for anyone else. You do you babe! Keep laying out in complete relaxation. That's my wife!",
  },
  {
    id: 4,
    name: "Cake",
    price: "$33",
    location: "At neighbor's place",
    images: [`${URL_PATH}/mk-cake.jpeg`, `${URL_PATH}/cake.jpeg`],
    msg: "We haven't made your favorite molten chocolate cake in the rose bundt pan yet. I guess we should get it out of the store heading into winter so we can host more dinners and eat more desserts. Thanks for being the one in our relationship who makes sure everyone (even my family and friends) are well-fed, satisfied, and happy",
  },
  {
    id: 5,
    name: "Sounder's Tickets",
    price: "$185",
    location: "In the mail",
    images: [
      `${URL_PATH}/mk-sounders.jpeg`,
      `${URL_PATH}/soccer-tickets.png`,
      `${URL_PATH}/soccer-group.jpg`,
    ],
    msg: "Referee sir! Remember how I got the good food and you and Eli got not so great burgers? Who would have guessed that my hot dog craving was spot on. Semi-related, I'm still impressed about how knowledgeable you are about baseball",
  },
  {
    id: 6,
    name: "Trampoline",
    price: "$35",
    location: "Down the street",
    images: [`${URL_PATH}/mk-trampoline.jpeg`, `${URL_PATH}/trampoline.jpeg`],
    msg: "Although I'm generally not excited about new free stuff, it does put a smile on my face to see photos like this one. Christine living her best life 😊",
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
    msg: "If we had an eco-lodge, would it be at the top of a mountain near an alpine lake? It makes me happy that you love alpine lake hikes as much as I remembered how awesome they used to be. Thanks for allowing us to take a pause on pickleball to drive out into the mountains and swim in high altitude cold water 🏔",
  },
  {
    id: 8,
    name: "Paint Job",
    price: "$75",
    location: "Comes to You",
    images: [`${URL_PATH}/mk-paint.jpeg`, `${URL_PATH}/paint-job.jpeg`],
    msg: "What home improvement are we going to do next?? I'm so thankful that my partner doesn't also freeze up like I do when it comes to going to home depot or trying to decide on what color handles to get for the cabinets. Moving across states and upgrading our home together has been",
  },
  {
    id: 9,
    name: "Motel Stay",
    price: "$145",
    location: "On Aurora",
    images: [
      `${URL_PATH}/mk-motel.jpeg`,
      `${URL_PATH}/motel-job.jpeg`,
      `${URL_PATH}/laundry.png`,
    ],
    msg: "My little laundry soldier is all grown up! She's running not only one but two whole businesses that both run 24/7 ?! I'm so proud of what you've been able to accomplish and I'm inspired by how you've been able to navigate so many challenging scenarios along the way. I hope you're finding the work rewarding and I hope I can continue to support you even if it means just sleeping in the back-office ❤️ ",
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
    msg: "Thanks for letting me take care of Bo. It brings me a lot of joy and relaxation to wash him, brush him, pick up his poop, and cut his hair to my liking. I hope both you and Bo actually like the hair cuts, too.",
  },
  {
    id: 11,
    name: "Love Lock",
    price: "Priceless",
    location: "On a pier in SF",
    images: [`${URL_PATH}/mk-love-lock.jpeg`, `${URL_PATH}/lock.jpeg`],
    msg: "Maybe when we go to San Francisco we can visit the pier and see if our lock is still there? Where else do you want to cement a sign of our love?",
  },
  {
    id: 12,
    name: "Tulips",
    price: "$65",
    location: "In your Yard",
    images: [`${URL_PATH}/mk-tulips.jpeg`, `${URL_PATH}/flowers.jpeg`],
    msg: "Next April will be super interesting. I really hope the tulips you planted come back to bloom. It would actually be so cool to get a friendly reminder every year of our time at the tulip farm and our efforts of nesting come to a bloom 🏡🌹",
  },
  {
    id: 13,
    name: "Meditation Retreat",
    price: "$1200",
    location: "Somewhere quiet",
    images: [
      `${URL_PATH}/mk-meditation.jpeg`,
      `${URL_PATH}/meditation-retreat.jpeg`,
    ],
    msg: "I honestly don't think meditation is for you. But I still love our joint meditation sessions. Hope we can take some more time in this next year to pause, breathe, and feel alive",
  },
  {
    id: 15,
    name: "Kayak",
    price: "$215",
    location: "On the water",
    images: [`${URL_PATH}/mk-kayak.jpeg`, `${URL_PATH}/kayak.jpeg`],
    msg: "Remember that time you had such a precise 20 min walk in mind? Do you think we need to get an ice cream maker like Eli? Thanks for always being open to share some bites of your flavors with me even when I might say I won't eat any to begin with 😳",
  },
  {
    id: 16,
    name: "Ice Cream",
    price: "$12",
    location: "Within Walking Distance",
    images: [`${URL_PATH}/mk-ice-cream.jpeg`, `${URL_PATH}/icecream.jpeg`],
    msg: "Remember that time you had such a precise 20 min walk in mind?? ",
  },
  {
    id: 17,
    name: "REI Date",
    price: "$25",
    location: "Just down the road",
    images: [`${URL_PATH}/mk-rei.jpeg`, `${URL_PATH}/REI-date.jpeg`],
    msg: "I love our REI dates. They feel like the Seattle version of our Costco dates. I love telling people that we might become gear junkies as we continue to add more sports and outdoor activities to our list of fun things to do. Maybe one day we we'll be camping in the snow like you used to ❄️",
  },
  {
    id: 18,
    name: "Home Cooked Meal",
    price: "$55",
    location: "In Fridge",
    images: [`${URL_PATH}/mk-home-cooked-meal.jpeg`, `${URL_PATH}/bread.jpeg`],
    msg: "Don't worry, we'll get better at cooking and I'll continue to add greens to my 'complete meals.' Can you believe we've kept each other fed over the years?!",
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
    msg: "Wow, we moved across state boundaries! Although we won't know until after winter if we feel good about this decisions, I'm so glad we took a leep of faith. Just the couple summers alone in Seattle have felt like a big step towards what I like to get out of life on the regular. Cheers to long summer days and not worrying about our mail getting stolen 🥂 Remember it was just a few months ago that you were wandering the streets of the mission with the saddest sad face?? 😭",
  },
  {
    id: 20,
    name: "Notarization",
    price: "$45",
    location: "UPS Store",
    images: [`${URL_PATH}/mk-notary.jpeg`, `${URL_PATH}/notary.jpeg`],
    msg: "Can you believe it? We could have a 🐣 soon! What a crazy journey we've been on. You've been incredibly strong over the past few years. And I think we're doing it right. Pregnancy seems over-rated 😅",
  },
  {
    id: 21,
    name: "Yoga Class",
    price: "$32",
    location: "On the beach",
    images: [`${URL_PATH}/mk-yoga.jpeg`, `${URL_PATH}/yoga-class.jpeg`],
    msg: "We're such partners in crime. You even let me take pictures of your butt sometimes :). I love being active with you, it reminds me of the early days of us dating and going to all the weird classpass classes. I remember early on seeing a photo of you hanging upside down in that one silk/suspension class and thinking, wow, that's my babe! I'm one lucky guy!",
  },
  {
    id: 22,
    name: "Sailing Trip",
    price: "$3200",
    location: "Between Islands",
    images: [`${URL_PATH}/mk-sailboat.jpeg`, `${URL_PATH}/bvi-trip.jpeg`],
    msg: "Thanks for spending time with me and the Storytell friends. It meant so much to me that you came even though it was a bunch of strangers, you can't swim, and you often get seasick. I hope we can go on more fun sailing adventures together in the future ❤️l",
  },
  {
    id: 23,
    name: "Couch",
    price: "$650",
    location: "The apartment across town",
    images: [`${URL_PATH}/mk-couch.jpeg`, `${URL_PATH}/couch.jpeg`],
    msg: "Remember the time when we furnished the whole place for free?! Wow, your super power has really made our move to Seattle so smooth, enjoyable, and effortless. It's been so fun getting to nest with you in a true home and thanks for humoring my crazy store antic tendencies!",
  },
];

var STEP1 = [
  {
    id: 4.5,
    name: "DoorDash",
    price: "Free!",
    location: "Somewhere outside the house",
    images: [`${URL_PATH}/doordash.jpeg`],
    clue: "Congrats on claiming your first free item on the marketplace! Use this clue to locate it: In the realm of four-wheel dreams, where gears and pedals orchestrate the schemes. Behind glass and beneath the sun's hot regard, you'll find the place to drive forward.",
    msg: "Also, thanks for loving me even though I'm an 'eat-to-live' kind of person. In our next year in Seattle, I'll continue to return the favor by scheduling dates to the places you want to try like this one!",
  },
];

var STEP2 = [
  {
    id: 9.5,
    name: "Refreshing Drinks",
    price: "Free!",
    location: "Somewhere close-by!",
    images: [`${URL_PATH}/mk-beeer.jpeg`],
    clue: "Congrats on claiming your second free item on the marketplace! Use this clue to locate it: Where the bump, set, and spike unite, In a bag, snug and not in plain sight. A sport of sandy courts and nets above, In this gear bag, you'll find what you're thinking of.",
    msg: "I love our new found joy in non-alcoholism. Would you like to join me in creating a new social club for NAA?",
  },
];

var STEP3 = [
  {
    id: 14.5,
    name: "Fun food",
    price: "Free!",
    location: "Eli might take us here",
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
    clue: "Congrats on finding your third free item! Where comfort meets mystery, beneath your feet, A hidden clue awaits, where two worlds meet. Lift the veil where secrets discreetly rest, Beneath it, your next hint is the best.",
    msg: `Also, Thanks for loving me even though I'm an 'eat-to-live' kind of person. In our next year in Seattle, I'll continue to return the favor by scheduling dates to the places you want to try like this one!`,
  },
];

var STEP4 = [
  {
    id: 16.5,
    name: "Pickleball",
    price: "Free!",
    location: "Where our net goes",
    images: [`${URL_PATH}/mk-pickleball.jpeg`, `${URL_PATH}/pickleball.jpeg`],
    clue: "Congrats, you've found another free item! To find it, use this clue: Shield your eyes from the blazing day, where UV rays in vibrant play. Within this chamber of windows wide, where sunny smiles tend to hide.",
    msg: "Thanks for bringing pickleball to all of our lives and every home you visit 🥰",
    // Pickleball lessons
    // https://anc.apm.activecommunities.com/seattle/createaccount?onlineSiteId=0
  },
];

var MARKETPLACE = {
  0: [...DEFAULT_ITEMS],
  1: [...STEP1, ...DEFAULT_ITEMS],
  2: [...STEP2, ...DEFAULT_ITEMS],
  3: [...STEP3, ...DEFAULT_ITEMS],
  4: [...STEP4, ...DEFAULT_ITEMS],
};

var ALL_ITEMS = [...STEP1, ...STEP2, ...STEP3, ...STEP4, ...DEFAULT_ITEMS];
