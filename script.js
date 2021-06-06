// Get the modal
var modal = document.getElementById("project-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  resetProjectData();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetProjectData();
  }
};

function launchModal(project) {
  // When the user clicks on the button, open the modal
  console.log(project_data[project].title);
  setProjectData(project_data[project]);
  modal.style.display = "block";
}

function setProjectData(data) {
  // Set project title
  document.getElementById("project-title").innerHTML = data.title;
  insertTags(data.tags, document.getElementById("project-tags"));
  document.getElementById("project-image").src = "./assets/" + data.image;
  document.getElementById("project-description").innerHTML = data.description;
  assignLinks(data.live_link, data.source_link);
}

function insertTags(arr, target) {
  arr.forEach((el) => {
    target.innerHTML += '<span class="tag">' + el + "</span>";
  });
}

function resetProjectData() {
  document.getElementById("project-title").innerHTML = "";
  document.getElementById("project-tags").innerHTML = "";
  document.getElementById("project-image").src = "";
  document.getElementById("project-description").innerHTML = "";
  document.getElementById("project-links").innerHTML = "";
}

function assignLinks(live_link, source_link) {
  let links = [];
  if (live_link != "") {
    links.push(
      '<span class="link-with-icon"><a href="' +
        live_link +
        '" target="_blank" id="project-live-link">See live<i class="fas fa-external-link-alt"></i></a></span>'
    );
  }
  if (source_link != "") {
    links.push(
      '<span class="link-with-icon"><a href="' +
        source_link +
        '" target="_blank" id="project-source-link">Check source<i class="fab fa-github-square"></i></a></span>'
    );
  }
  links.forEach((el) => {
    document.getElementById("project-links").innerHTML += el;
  });
}

function sendEmail() {
  let subject =
    "Portfolio Contact Form Email from " +
    document.getElementById("name").value +
    " (email: " +
    document.getElementById("email").value +
    ")";
  let body = document.getElementById("body").value;
  window.open(
    "mailto:zil.norvilis@gmail.com" + "?subject=" + subject + "&body=" + body,
    "Sending email",
    "width = 200, height = 200"
  );
}

let project_data = {
  1: {
    title: "Online Book Store Design",
    tags: ["HTML/CSS", "Bootstrap"],
    image: "online-shop-screenshot.png",
    description: "Online shop design built with Bootstrap and custom HTML/CSS.",
    live_link: "https://zilton7.github.io/online-shop/",
    source_link: "https://github.com/zilton7/online-shop",
  },
  2: {
    title: "Gift Grouping App",
    tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
    image: "grouping-app-screenshot.png",
    description:
      "Gift Grouping is a mobile-only app where you can sign up and/or sign in, create groups and add gifts. View created groups created by all users and view only signed in user's added gifts.",
    live_link: "https://grouping-app.herokuapp.com/",
    source_link: "https://github.com/zilton7/grouping-app",
  },
  3: {
    title: "Complete CRUD Application",
    tags: ["Ruby on Rails", "PostgreSQL", "HTML/CSS"],
    image: "launchzilla-screenshot.png",
    description:
      "Complete CRUD application that allows users to sign in/sign up and create/edit/delete announcements on the page, add images to their announcement, and view announcements by categories, authors, and networks.",
    live_link: "http://launchzilla.herokuapp.com/",
    source_link: "",
  },
  4: {
    title: "Telegram Birthday Bot",
    tags: ["Ruby", "Telegram API"],
    image: "telegram-bot-screenshot.png",
    description:
      "A bot that uses a couple of gems and the hiztory.org API to assess a user's birthday input and check if it's a valid date. If so, it fetches data from the external API. This data consists of famous people born on the same month/day. All this information is returned to the user as a Telegram message.",
    live_link: "",
    source_link: "https://github.com/zilton7/telegram-bot",
  },
  5: {
    title: "Zilda - RPG Game",
    tags: ["JavaScript", "Phaser 3"],
    image: "zilda-screenshot.png",
    description:
      "An RPG game built using the Phaser 3 Framework. This fully working game was built in five days using best JavaScript practices.",
    live_link: "https://zilton7.github.io/zilda-rpg/",
    source_link: "https://github.com/zilton7/zilda-rpg",
  },
  6: {
    title: "Flagify Game",
    tags: ["JavaScript", "HTML/CSS"],
    image: "flagify-screenshot.png",
    description:
      "A simple vanilla JavaScript country flag guessing game that uses Firebase to store high scores.",
    live_link: "https://zilton7.github.io/flagify/",
    source_link: "https://github.com/zilton7/flagify",
  },
  7: {
    title: "Weather App",
    tags: ["JavaScript", "HTML/CSS"],
    image: "weather-app.png",
    description:
      "A weather application with basic styling, built using JavaScript and the OpenWeatherMap.org's API. The visitor is able to input the name of the city and instantly get weather information for the provided location.",
    live_link: "https://zilton7.github.io/weather-app/",
    source_link: "https://github.com/zilton7/weather-app",
  },
  8: {
    title: "Todo App",
    tags: ["JavaScript", "Node", "HTML/CSS"],
    image: "todo-app-screenshot.JPG",
    description:
      "A simple To-Do-List app built using Node and webpack. Users have the ability to add projects, add tasks to each project, and include project description, due date, and priority.",
    live_link: "https://aymanjabr.github.io/To-do-list-app/",
    source_link: "https://github.com/zilton7/To-do-list-app",
  },
  9: {
    title: "Restaurant Page",
    tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
    image: "restaurant-app-screenshot.png",
    description:
      "A very basic restaurant page built using only JavaScript modules and webpack. All pages are generated using Javascript DOM manipulation and HTML Element creation methods.",
    live_link: "https://zilton7.github.io/restaurant-page/",
    source_link: "https://github.com/zilton7/To-do-list-app",
  },
};
