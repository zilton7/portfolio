# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


projects = [{
  "name": 'Online Book Store Design',
  "description": 'Online shop design built with Bootstrap and custom HTML/CSS.',
  "tags": 'HTML/CSS, Bootstrap',
  "image": 'https://i.ibb.co/BVV74Rk/online-shop-screenshot.png',
  "live_link": 'https://zilton7.github.io/online-shop/',
  "source_link": 'https://github.com/zilton7/online-shop',
  "position": '1'
}
]

Project.destroy_all
9.times do |index|
  projects[0][:position] = (index+1).to_s
  Project.create(projects[0])
end

p 'projects created'


texts = { 
  "intro_title": "Zil Norvilis",
  "intro_description": "Hello! I am a Full-Stack Developer with a love for Ruby on Rails, React, and Redux. I can build a product, feature, or website for you. I am a remote work and pair-programming enthusiast. Take your time to look through some of my work and experience. ",
  "portfolio_title": "Portfolio",
  "aboutme_title": "About me",
  "aboutme_description": " I am Zil Norvilis, a certified web developer who loves building interactive applications with Ruby on Rails, Javascript, and React. I am fluent in multiple languages, frameworks, and technologies, and capable of learning quickly and efficiently. I have a passion for problem-solving, and a knack for debugging, and love learning new tools and technologies. I am skilled in working remotely using GitHub, industry-standard git-flow, and with communicating and collaborating with international remote developers. I'm open to full-stack remote opportunities. ",
  "resume_link": "https://drive.google.com/file/d/1FNIY6TRGNBLmK13cPXTF7kr36o1buqjc",
  "contact_title": "Contact",
  "contact_description": "If you have any questions or propositions, please don't hesitate to get in touch with me. You can email me at zil.norvilis@gmail.com or just use the contact form bellow. "
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
     "name": "Twitter",
     "link": "https://twitter.com/devnor7",
     "icon": "fab fa-twitter"
   }
 ]

 Link.destroy_all
 Link.create(links)
 p 'links created'
 