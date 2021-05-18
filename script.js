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
    description: "Online shop design built with Bootstrap and custom HTML/CSS",
    live_link: "https://zilton7.github.io/online-shop/",
    source_link: "https://github.com/zilton7/online-shop",
  },
  2: {
    title: "Gift Grouping App",
    tags: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
    image: "grouping-app-screenshot.png",
    description:
      "Gift Grouping is a mobile-only app where you can sign up (and/or sign in), create groups and add gifts. View created groups created by all users and view only signed in user's added gifts.",
    live_link: "https://grouping-app.herokuapp.com/",
    source_link: "https://github.com/zilton7/grouping-app",
  },
  3: {
    title: "Complete CRUD Application",
    tags: ["Ruby on Rails", "PostgreSQL", "HTML/CSS"],
    image: "launchzilla-screenshot.png",
    description:
      "Complete CRUD application, that allows users to sign in/sign up and create/edit/delete announcements on the page. Add images to their announcement. View announcements by categories, authors and networks",
    live_link: "http://launchzilla.herokuapp.com/",
    source_link: "",
  },
  4: {
    title: "Telegram Birthday Bot",
    tags: ["Ruby", "Telegram API"],
    image: "telegram-bot-screenshot.png",
    description:
      "For this project I have used couple gems and hiztory.org API. The Bot waits for user's birth-date input and than checks if its valid date and if so it fetches the data from the external API. This data consists of famous people born on the same month/day. All this information is returned to the user as a Telegram message.",
    live_link: "",
    source_link: "https://github.com/zilton7/telegram-bot",
  },
  5: {
    title: "New York Times Clone Design",
    tags: ["HTML/CSS"],
    image: "nyt-clone-screenshot.png",
    description:
      "A clone of New York Times page design, using nothing but pure CSS.",
    live_link: "https://zilton7.github.io/nyt-copy/",
    source_link: "https://github.com/zilton7/nyt-copy",
  },
  6: {
    title: "Newsweek Clone Design",
    tags: ["HTML/CSS", "Bootstrap"],
    image: "newsweek-clone-screenshot.png",
    description:
      "Page design clone of the archived version of Newsweek Magazine of 2021/01/20, using Bootstrap and CSS",
    live_link: "https://zilton7.github.io/newsweek-copy/",
    source_link: "https://github.com/zilton7/newsweek-copy",
  },
  7: {
    title: "Weather App",
    tags: ["JavaScript", "HTML/CSS"],
    image: "weather-app.png",
    description:
      "I built a weather application, with basic styling, using JavaScript openweathermap.org and API. Visitor is able to input the name of the city and instantly get weather information for provided location.",
    live_link: "https://zilton7.github.io/weather-app/",
    source_link: "https://github.com/zilton7/weather-app",
  },
};
