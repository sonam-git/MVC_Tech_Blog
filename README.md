# MVC_Tech_Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

MVC Tech blog is Heroku deployed application, which serves as a CMS-style platform designed for the users that allows to publish blog posts based on their thoughts and opinions. Additionally, the comment section below, allows users to interact and engage with another post and user. The application follows the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)

# Overview

## The Challenge:

The challenge of building this application involved creating a scalable and robust platform that could support multiple users, blog post and comments. The application was designed with security in mind, allowing users to authenticate themselves and protect their personal data. Furthermore, the application had to be built using modern web development technologies and follow best practices, including the MVC architecture pattern.

## Assigned User Story:
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria:
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete posts
```


## Usage Instructions:

#### Visit the homepage, "Login" or "Sign Up" for an account if you don't already have one.

1. Option: A) Account login: click on "login" in the navigation menu - enter Username and Password then click "Sign In" to proceed.
1. Option: B) Account Sign Up: click on "Sign Up" in the navigation menu - once open, enter Username and Password then click "Sign Up" to proceed.
2. Once you have an account, you can create blog posts and comment on other users' posts.
3. Create a blog post: click on the "dashboard" option in the navigation menu and click "Create New Post."
4. Enter a title and contents for your Blog Contribution, then click "Create Post" to save and publish.
5. View existing blog posts by clicking on "Home" in the navigation menu.
6. Comment: to view or "add a new comment" go to any blog post in the Home page, click on the title or icon near any blog post - title, you may view the comment history as well as add a new comments.
7. Edit or delete your blog post: click on the "dashboard" option in the navigation menu and select the post you wish to edit or delete by clicking on the edit icon on the right side of the title or title itself.
8. Account Log out: click on "logout" in the navigation menu.
9. You can only see the list of blog post unless you sign up or log into the app.

## Deployed Application Link:
[Deployed Application Link:](https://sj-mvc.herokuapp.com)

## GitHub Repository:
[GitHub Repository:](https://github.com/sonam-git/MVC_Tech_Blog)

## Screenshots:
### Figure 1. Home
<img width="1380" alt="Screenshot 2023-05-15 at 5 55 22 PM" src="https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/b292c941-5a3e-482f-a197-b6a916620dd2">

### Figure 2. Sign up
<img width="1395" alt="Sign up" src="https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/f17a92d2-3e8a-4ddf-b5d8-96a9f275a171">

### Figure 3. Login
<img width="1415" alt="Log in" src="https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/51e55884-3b84-404f-89de-34d23645d48e">

### Figure 4. Dashboard
<img width="1365" alt="Screenshot 2023-05-15 at 5 54 58 PM" src="https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/231080d2-0ccf-4091-bf9c-28a0440576ba">

### Figure 5. Create a Post
![Screenshot 2023-05-15 at 5 56 18 PM](https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/714864d8-7e45-4cc1-aeb0-e56dd9796542)

### Figure 6. Edit a Post
![Screenshot 2023-05-15 at 5 56 36 PM](https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/845bfd4b-b81b-403d-a4fb-eff7af6f269d)

### Figure 7. Add / View Comments
![Screenshot 2023-05-15 at 5 56 00 PM](https://github.com/sonam-git/MVC_Tech_Blog/assets/89502092/e2d6703e-a090-468a-83f6-19a5a0057c66)


## Installation Process
1. Clone the Repository from GitHub 
(or) Download Zip Folder from Repository from GitHub
Open the cloned (or downloaded) repository in any source code editor.

## Built With:
- JSON:[ JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Bcryptjs: [2.4.3](https://www.npmjs.com/package/bcryptjs)
- Connect Session Store using Sequelize: [7.0.4](https://www.npmjs.com/package/connect-session-sequelize)
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Express Handlebars: [5.2.0](https://www.npmjs.com/package/express-handlebars)
- Express-Session: [1.17.1](https://www.npmjs.com/package/express-session)
- Handlebars.js: [4.7.6](https://www.npmjs.com/package/handlebars)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- Postman: [Postman](https://www.postman.com/)
- Luxon: [Luxon](https://moment.github.io/luxon/)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:
1. Implementing Model-View-Controller (MVC) architecture.
2. Creating and interacting with a MySQL database using Sequelize ORM.
3. Creating and using Express.js servers and routes.
4. Using Handlebars.js to create and display dynamic templates.
5. Implementing user authentication and password hashing with bcrypt.
6. Apply css for styling, which help to recall what we learned during first month of the class.

### Continued Development:
1. Pagination for blog posts and comments.
2. Editing and deleting comments.
3. User profile pages.

## License
This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

## Author
Follow me on Github at [Sonam J Sherpa](https://github.com/sonam-git).
Additional questions or concerns? feel free to contact me at sherpa.sjs@gmail.com
