// All church info lives in this file. Update it when leadership sends the real details.
// Anything written like "[Something]" is a placeholder and shows up underlined in gold on the site
// so it's easy to spot what still needs replacing.
//
// Images: drop photos in /public/images and set the path, e.g. image: "/images/worship.jpg".
// If image is null, a placeholder block is shown instead.

export const church = {
  name: "Oromo Evangelical Church of Atlanta",
  short: "OECA",
  tagline: "Faith that brings us together.",

  // small Oromo touches (Afaan Oromoo)
  welcomeOromo: "Baga nagaan dhuftan",
  welcomeEnglish: "Welcome, you have come in peace",
  blessingOromo: "Waaqayyo isin haa eebbisu",
  blessingEnglish: "May God bless you",

  hero: {
    image: null,
    imageAlt: "The OECA congregation gathered for Sunday worship",
  },

  // first one is used for the "This Sunday" section
  services: [
    { name: "Sunday Worship", day: "Sunday", time: "[Service time]" },
  ],

  // TEMPORARY: using Living Grace Lutheran Church until the real address is confirmed
  location: {
    venue: "Living Grace Lutheran Church",
    address: "[Current street address]",
    city: "Atlanta, GA",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Living+Grace+Lutheran+Church+Atlanta+GA",
  },

  contact: {
    phone: "[Phone number]",
    phoneHref: "", // e.g. "tel:+14045550000"
    email: "[Email address]",
    emailHref: "", // e.g. "mailto:info@example.org"
  },

  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  pastor: {
    name: "[Pastor's name]",
    role: "[Title, e.g. Senior Pastor]",
    image: null,
    bio: [
      "[Pastor biography placeholder. Add a short introduction here: where the pastor is from, how they came to faith and ministry, and how long they have served OECA.]",
      "[Second paragraph placeholder. Family, ministry focus, or a short personal note to people visiting for the first time.]",
    ],
  },
};

export const nav = [
  { label: "Visit", href: "#visit" },
  { label: "About", href: "#about" },
  { label: "Worship", href: "#worship" },
  { label: "Events", href: "#events" },
  { label: "Sermons", href: "#sermons" },
  { label: "Pastor", href: "#pastor" },
  { label: "Ministries", href: "#ministries" },
];

export const aboutImage = { image: null, alt: "Members of OECA talking together after the service" };
export const worshipImage = { image: null, alt: "The congregation singing during worship" };

export const expectations = [
  { title: "Worship", text: "We begin by praising God together in song. Sing along, or simply listen and take it in." },
  { title: "Preaching", text: "A message from the Bible that speaks to everyday life, to faith and to family." },
  { title: "Prayer", text: "We pray for one another, for our families and for our people, here and back home." },
  { title: "Fellowship", text: "After the service, stay a while and meet people. No one should leave as a stranger." },
  { title: "Community", text: "Elders, parents, young people and children side by side. Come as you are and bring the whole family." },
];

export const community = [
  { title: "Families", text: "A church home for parents, grandparents and children.", image: null },
  { title: "Youth", text: "Young Oromo-Americans growing in faith together.", image: null },
  { title: "Bible Study", text: "Opening the Scriptures together and learning from one another.", image: null },
  { title: "Fellowship", text: "Meals, celebrations and time together beyond Sunday.", image: null },
];

// Dates are placeholders on purpose. Don't put real dates here until they're confirmed.
export const events = [
  { title: "Sunday Worship", date: "[Date]", time: "[Time]", place: "Living Grace Lutheran Church", text: "Worship, preaching and prayer together as a church family." },
  { title: "Bible Study", date: "[Date]", time: "[Time]", place: "[Location]", text: "An evening in the Word with open discussion and prayer." },
  { title: "Youth Gathering", date: "[Date]", time: "[Time]", place: "[Location]", text: "Worship, conversation and friendship for our young people." },
  { title: "Community Event", date: "[Date]", time: "[Time]", place: "[Location]", text: "A time for the whole community to gather, eat and celebrate." },
];

// url: link to the YouTube video once there is one. Falls back to the channel link.
export const sermons = [
  { title: "[Sermon title]", speaker: "[Speaker]", date: "[Date]", url: "", thumb: null },
  { title: "[Sermon title]", speaker: "[Speaker]", date: "[Date]", url: "", thumb: null },
  { title: "[Sermon title]", speaker: "[Speaker]", date: "[Date]", url: "", thumb: null },
  { title: "[Sermon title]", speaker: "[Speaker]", date: "[Date]", url: "", thumb: null },
];

// Draft list. Church leadership will confirm the final ministries and descriptions.
export const ministries = [
  { name: "Children", text: "Teaching children the stories of Scripture and the love of Jesus." },
  { name: "Youth", text: "A place for teens and young adults to ask questions, grow and lead." },
  { name: "Adults", text: "Encouragement and discipleship for men and women in every season of life." },
  { name: "Bible Study", text: "Studying God's word together and applying it to daily life." },
  { name: "Prayer", text: "Standing with one another in prayer for our church, families and community." },
  { name: "Community & Fellowship", text: "Welcoming newcomers, caring for families and celebrating together." },
];
