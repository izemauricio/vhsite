// event types
const eventsType = {
  PREMIUM: "PREMIUM",
  LEAP: "LEAP",
  MISSION: "MISSION",
  VANHACKTHON: "VANHACKTHON",
  WEBINAR: "WEBINAR",
  MEETUP: "MEETUP",
};

// event mock data
const eventsArray = [
  {
    type: eventsType.PREMIUM,
    title: "MOCK PREMIUM 1",
    photo: "https://source.unsplash.com/nPz8akkUmDI",
    date: "11/Aug/2020",
    deadline: "04/Aug/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.MISSION,
    title: "MOCK MISSION 2",
    photo: "https://source.unsplash.com/k_T9Zj3SE8k",
    date: "18/Jun/2020",
    deadline: "05/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.VANHACKTHON,
    title: "MOCK VANHACKTHON 2",
    photo: "https://source.unsplash.com/j_MgyPHGRP0",
    date: "28/Jun/2020",
    deadline: "08/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },

  {
    type: eventsType.LEAP,
    title: "MOCK LEAP 1",
    photo: "https://source.unsplash.com/_MhmVVwTyjY",
    date: "22/Jun/2020",
    deadline: "06/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },

  {
    type: eventsType.MEETUP,
    title: "MOCK MEETUP 1",
    photo: "https://source.unsplash.com/PTRzqc_h1r4",
    date: "12/Jun/2020",
    deadline: "05/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },

  {
    type: eventsType.VANHACKTHON,
    title: "MOCK VANHACKTHON 1",
    photo: "https://source.unsplash.com/j_MgyPHGRP0",
    date: "28/Jun/2020",
    deadline: "08/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.PREMIUM,
    title: "MOCK PREMIUM 2",
    photo: "https://source.unsplash.com/nPz8akkUmDI",
    date: "10/Jun/2020",
    deadline: "08/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.MEETUP,
    title: "MOCK MEETUP 3",
    photo: "https://source.unsplash.com/PTRzqc_h1r4",
    date: "12/Jun/2020",
    deadline: "05/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.WEBINAR,
    title: "MOCK WEBINAR 1",
    photo: "https://source.unsplash.com/97HfVpyNR1M",
    date: "10/Jun/2020",
    deadline: "08/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
  {
    type: eventsType.MISSION,
    title: "MOCK MISSION 1",
    photo: "https://source.unsplash.com/Kzmd7HSelJw",
    date: "18/Jun/2020",
    deadline: "05/Jun/2020",
    description:
      "Adajs djai daidj asiodjas. Lorem ipsum, dolor sit amet consectetu adipisicing elit.",
  },
];

// link card-type to event-type
const premiumTypes = [eventsType.PREMIUM];
const specialTypes = [
  eventsType.LEAP,
  eventsType.MISSION,
  eventsType.VANHACKTHON,
];
const normalTypes = [eventsType.WEBINAR, eventsType.MEETUP];

window.onload = function () {
  const card = document.getElementById("card");

  eventsArray.forEach((item) => {
    // clone dom
    let clonedCard = card.cloneNode(true);

    // apply the right style
    if (item.type === eventsType.PREMIUM) {
      clonedCard.classList.add("premium");
    } else if (specialTypes.includes(item.type)) {
      clonedCard.classList.add("special");
    } else if (normalTypes.includes(item.type)) {
      clonedCard.classList.add("normal");
    } else {
      return;
    }

    // update card fields and events
    clonedCard.style.display = "flex";
    clonedCard.getElementsByClassName("title")[0].textContent = item.title;
    clonedCard.getElementsByClassName("type")[0].textContent = item.type;
    clonedCard.getElementsByClassName("description")[0].textContent =
      item.description;
    clonedCard.getElementsByClassName("deadline")[0].textContent =
      item.deadline;
    clonedCard.getElementsByClassName(
      "image-data"
    )[0].style.background = `url('${item.photo}') center no-repeat`;
    clonedCard.getElementsByClassName("date")[0].textContent = item.date;
    clonedCard.getElementsByClassName("detail")[0].onclick = function () {
      openDetailMenu(item);
    };

    // insert to grid
    document.getElementById("grid").appendChild(clonedCard);
  });
};

function openDetailMenu(item) {
  const nav = document.getElementById("myNav");
  const detail = document.getElementById("eventDetailsContent");
  detail.getElementsByClassName("title")[0].textContent = item.title;
  detail.getElementsByClassName("apply")[0].onclick = function () {
    console.log("applyToEvent");
    applyToEvent(item);
  };
  nav.style.display = "flex";
  nav.style.width = "100%";
  detail.style.display = "flex";
}

function closeDetailMenu() {
  document.getElementById("myNav").style.width = "0%";
  const content = document.getElementById("eventDetailsContent");
  const applySuccess = document.getElementById("eventApplyContentSuccess");
  const applyError = document.getElementById("eventApplyContentError");
  content.style.display = "none";
  applySuccess.style.display = "none";
  applyError.style.display = "none";
}

function applyToEvent(item) {
  const content = document.getElementById("eventDetailsContent");
  const applySuccess = document.getElementById("eventApplyContentSuccess");
  const applyError = document.getElementById("eventApplyContentError");
  content.style.display = "none";
  if (item.type === eventsType.PREMIUM) {
    applyError.style.display = "flex";
    applyError.getElementsByClassName("title")[0].textContent = item.title;
  } else {
    applySuccess.style.display = "flex";
    applySuccess.getElementsByClassName("title")[0].textContent = item.title;
    applySuccess.getElementsByClassName("data")[0].textContent = item.date;
  }
}
