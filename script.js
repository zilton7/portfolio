// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  resetProjectData();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetProjectData();
  }
}

function launchModal(project){
  // When the user clicks on the button, open the modal
  console.log(project_data[project].title);
  setProjectData(project_data[project]);
  modal.style.display = "block";
}

function setProjectData(data){
  // Set project title
  document.getElementById("project-title").innerHTML = data.title;
  insertTags(data.tags, document.getElementById('project-tags'));
  document.getElementById("project-image").src = './assets/' + data.image;
  document.getElementById("project-description").innerHTML = data.description;
  assignLinks(data.live_link, data.source_link);
  
}

function insertTags(arr, target){
  arr.forEach(el => {
    target.innerHTML += '<span class="tag">' + el + '</span>';
  });
}

function resetProjectData(){
  document.getElementById("project-title").innerHTML = '';
  document.getElementById('project-tags').innerHTML = '';
  document.getElementById("project-image").src = '';
  document.getElementById("project-description").innerHTML = '';
  document.getElementById('project-links').innerHTML = '';
}

function assignLinks(live_link, source_link){
  let links = [];
  if(live_link!=''){
    links.push('<span class="link-with-icon"><a href="'+ live_link +'" target="_blank" id="project-live-link">See live<i class="fas fa-external-link-alt"></i></a></span>');
  };
  if(source_link!=''){
    links.push('<span class="link-with-icon"><a href="'+ source_link +'" target="_blank" id="project-source-link">Check source<i class="fab fa-github-square"></i></a></span>');
  };
  links.forEach(el => {
    document.getElementById('project-links').innerHTML +=  el;
  });
}


let project_data = { 1: {
  title: 'Gift Grouping App',
  tags: ['HTML/CSS', 'Bootstrap'],
  image: 'grouping-app-screenshot.png',
  description: 'Gift Grouping is a mobile-only app where you can sign up (and/or sign in), create groups and add gifts. View created groups created by all users and view only signed in user\'s added gifts.',
  live_link: 'https://grouping-app.herokuapp.com/',
  source_link: 'https://github.com/zilton7/grouping-app'
  },
  2: {
    title: 'Online Book Store Design',
    tags: ['HTML/CSS', 'Bootstrap'],
    image: 'online-shop-screenshot.png',
    description: 'Online shop design built with Bootstrap and custom HTML/CSS',
    live_link: 'https://zilton7.github.io/online-shop/',
    source_link: 'https://github.com/zilton7/online-shop'
    }
}