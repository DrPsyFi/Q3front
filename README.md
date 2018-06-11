# Checkpoint

## Getting Started

To get started with this checkpoint, you will need to fork, clone, and install dependencies for this repo, then run the following in your terminal:

```shell
git clone https://github.com/<your-github-handle>/react-router-checkpoint.git
cd react-router-checkpoint
npm install
```

## Overview

Clone this repo on to your home computer: [https://github.com/gSchool/react-router-checkpoint](https://github.com/gSchool/react-router-checkpoint)

Your job is to hook up the routing for an authentication system that fits the following user stories. The following things have been created for you in advance:

- 3 Components - Login, Signup, and UserProfile
- Redux Actions
- Redux Reducers

> NOTE: This was built with the [Reactstrap Component Library](https://reactstrap.github.io).

## User Stories

- Root Route `/`
  - As a user, when I navigate to `/` the first time, I am automatically redirected to `/login`

- Login Route `/login`
  - As a user, when I click the submit button on the login form and I entered the correct credentials, I am sent to `/profile`
  - As a user, when I click on the submit button on the login form and I enter incorrect credentials, a message appears that tells me I have entered incorrect credentials
  - As a user, when I click the "Not a member?" link, I am redirected to `/signup`

- Signup Route `/signup`
  - As a user, when I properly fill out the signup form and click the submit button, I am redirected to `/login`
  - As a user, when I improperly fill out the signup form and click the submit button, a message appears in the Signup component that tells me in some way I have filled out the form incorrectly

- User Profile Route
  - As a user, when I arrive at the profile page, I see the user's name, email, company, phone, and address, as well as a profile photo

- Navbar
  - As a user, after I log in, the "Login" and "Sign up" buttons in the navigation bar should be replaced with "Log out"
  - As a user, when I click the "Log out" button in the navigation bar, I am taken back to `/login`

## Test Login

```text
Email: carpenterwatts@enerforce.com
Password: hello
```
