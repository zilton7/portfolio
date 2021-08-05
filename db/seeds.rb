# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
when "development"
  Admin.destroy_all
  Admin.create(email: 'zil@norvilis.com', password: '123456', password_confirmation: '123456')
  p 'Admin created'
end



projects = [
  {
  "name": 'Online Book Store Design',
  "description": 'Online shop design built with Bootstrap and custom HTML/CSS.',
  "tags": 'HTML/CSS, Bootstrap',
  "image": 'https://i.ibb.co/BVV74Rk/online-shop-screenshot.png',
  "live_link": 'https://zilton7.github.io/online-shop/',
  "source_link": 'https://github.com/zilton7/online-shop',
  "position": '1'
  },
  {
    "name": 'Gift Grouping App',
    "description": 'Gift Grouping is a mobile-only app where you can sign up and/or sign in, create groups and add gifts. View created groups created by all users and view only signed in user\'s added gifts.',
    "tags": ' Ruby on Rails, PostgreSQL, Bootstrap ',
    "image": 'https://i.ibb.co/SVSSQ4t/grouping-app-screenshot.png',
    "live_link": 'https://grouping-app.herokuapp.com/',
    "source_link": 'https://github.com/zilton7/grouping-app',
    "position": '2'
  },
  {
    "name": 'Complete CRUD Application',
    "description": 'Complete CRUD application that allows users to sign in/sign up and create/edit/delete announcements on the page, add images to their announcement, and view announcements by categories, authors, and networks.',
    "tags": ' Ruby on Rails, PostgreSQL, HTML/CSS',
    "image": 'https://i.ibb.co/drfPLgZ/launchzilla-screenshot.png',
    "live_link": 'http://launchzilla.herokuapp.com/',
    "source_link": '',
    "position": '3'
  },
  {
    "name": 'Telegram Birthday Bot',
    "description": 'A bot that uses a couple of gems and the hiztory.org API to assess a user\'s birthday input and check if it\'s a valid date. If so, it fetches data from the external API. This data consists of famous people born on the same month/day. All this information is returned to the user as a Telegram message.',
    "tags": 'Ruby, Telegram API',
    "image": 'https://i.ibb.co/2hvhw0w/telegram-bot-screenshot.png',
    "live_link": '',
    "source_link": 'https://github.com/zilton7/telegram-bot',
    "position": '4'
  },
  {
    "name": 'Zilda - RPG Game',
    "description": 'An RPG game built using the Phaser 3 Framework. This fully working game was built in five days using best JavaScript practices.',
    "tags": 'JavaScript, Phaser 3',
    "image": 'https://i.ibb.co/QnJWmzy/zilda-screenshot.png	',
    "live_link": 'https://zilton7.github.io/zilda-rpg/',
    "source_link": 'https://github.com/zilton7/zilda-rpg',
    "position": '5'
  },
  {
    "name": 'Flagify Game',
    "description": 'An RPG game built using the Phaser 3 Framework. This fully working game was built in five days using best JavaScript practices.',
    "tags": 'JavaScript, HTML/CSS',
    "image": 'https://i.ibb.co/Vq5LLjV/flagify-screenshot.png',
    "live_link": 'https://zilton7.github.io/flagify/',
    "source_link": 'https://github.com/zilton7/flagify',
    "position": '6'
  },
  {
    "name": 'Weather App',
    "description": 'A weather application with basic styling, built using JavaScript and the OpenWeatherMap.org\'s API. The visitor is able to input the name of the city and instantly get weather information for the provided location.',
    "tags": 'JavaScript, HTML/CSS',
    "image": 'https://i.ibb.co/vq0mG30/weather-app.png',
    "live_link": 'https://zilton7.github.io/weather-app/',
    "source_link": 'https://github.com/zilton7/weather-app',
    "position": '7'
  },
  {
    "name": 'Todo App',
    "description": 'A simple To-Do-List app built using Node and webpack. Users have the ability to add projects, add tasks to each project, and include project description, due date, and priority.',
    "tags": 'JavaScript, Node, HTML/CSS',
    "image": 'https://i.ibb.co/7n2m2cG/todo-app-screenshot.jpg',
    "live_link": 'https://aymanjabr.github.io/To-do-list-app/',
    "source_link": 'https://github.com/zilton7/To-do-list-app',
    "position": '8'
  },
  {
    "name": 'Restaurant Page',
    "description": 'A simple To-Do-List app built using Node and webpack. Users have the ability to add projects, add tasks to each project, and include project description, due date, and priority.',
    "tags": 'JavaScript, Bootstrap, HTML/CSS',
    "image": 'https://zil.norvilis.com/assets/restaurant-app-screenshot.png',
    "live_link": 'https://zilton7.github.io/restaurant-page/',
    "source_link": 'https://github.com/zilton7/To-do-list-app',
    "position": '9'
  }
]

Project.destroy_all
projects.each do |project|
  Project.create(project)
end
# 8.times do |index|
#   if index == 1
#     projects[1][:position] = (index+1).to_s
#     Project.create(projects[1])
#     next
#   end
#   projects[0][:position] = (index+1).to_s
#   Project.create(projects[0])
# end

p 'projects created'


texts = { 
  "intro_title": "Zil Norvilis",
  "intro_description": "Hello! I am a Full-Stack Developer with a love for Ruby on Rails, React, and Redux. I can build a product, feature, or website for you. I am a remote work and pair-programming enthusiast. Take your time to look through some of my work and experience. ",
  "portfolio_title": "Portfolio",
  "aboutme_title": "About me",
  "aboutme_description": " I am Zil Norvilis, a certified web developer who loves building interactive applications with Ruby on Rails, Javascript, and React. I am fluent in multiple languages, frameworks, and technologies, and capable of learning quickly and efficiently. I have a passion for problem-solving, and a knack for debugging, and love learning new tools and technologies. I am skilled in working remotely using GitHub, industry-standard git-flow, and with communicating and collaborating with international remote developers. I'm open to full-stack remote opportunities. ",
  "resume_link": "https://drive.google.com/file/d/1FNIY6TRGNBLmK13cPXTF7kr36o1buqjc",
  "contact_title": "Contact",
  "contact_description": "If you have any questions or propositions, please don't hesitate to get in touch with me. You can email me at zil.norvilis@gmail.com or just use the contact form bellow. ",
  "analytics": "G-DZLYSZWR8M"
 }

 Text.destroy_all
 Text.create(texts)
 p 'texts created'


 links = [
   {
     "name": "GitHub",
     "link": "https://github.com/zilton7",
     "icon": "fab fa-github-square"
   },
   {
     "name": "LinkedIn",
     "link": "https://www.linkedin.com/in/zil-norvilis/",
     "icon": "fab fa-linkedin"
   },
   {
     "name": "StackOverflow",
    "link": "https://stackoverflow.com/users/9882101/zilton-7",
    "icon": "fab fa-stack-overflow"
  },
   {
     "name": "Twitter",
     "link": "https://twitter.com/devnor7",
     "icon": "fab fa-twitter"
   },
   {
     "name": "Medium",
     "link": "https://zilnor.medium.com/",
     "icon": "fab fa-medium"
   },
   {
     "name": "AngelList",
     "link": "https://angel.co/u/zil-norvilis",
     "icon": "fab fa-angellist"
   }

 ]

 Link.destroy_all
 Link.create(links)
 p 'links created'
 

 abilities = [
   {
   "name": "Languages",
   "icon": "fas fa-hashtag",
   "skills": "Ruby, JavaScript, Python, PHP"
 },
  {
    "name": "Frameworks",
    "icon": "fas fa-crop-alt",
    "skills": "Bootstrap, Ruby on Rails, RSpec, Selenium"
  },
  {
    "name": "Skills",
    "icon": "far fa-lightbulb",
    "skills": "GitHub, Terminal, GitLab, Linux"
  },
  {
    "name": "Soft skills",
    "icon": "far fa-heart",
    "skills": "Communication, Problem-solving, Patience, Adaptability"
  }
]


Ability.destroy_all
Ability.create(abilities)
p 'abilities created'
