# <p align="center">React-Practical-7</p>

<br />

---

## About Practical

---

<br />

User management app

- Create a dummy project named “user-management-react-app” in react using any of the above methods - CRA or webpack from scratch.
- Setup redux architecture in the app.
- Add two routes using react-router-dom - /signup and /home
- /signup - page before login - UI should be as below:

- /home - page after login - UI should contain profile picture and the following text:
  “Hello {Name}, you are registered with the email id - {Email} and phone number - {PhoneNo}”
  Along with a logout button on the top right.
- Use Formik library for handling the following form validations:
  - Name: required, at least 15 char.
  - email: validate email convention, required
  - phoneNo: Indian phone no. is only valid, required
  - password and confirm password should match and also
  - the image should be of type jpg or png, or less than 2Mb
- On pressing submit, validate the entered form details and if valid, save user data to redux store.
- Then take the user to the “/home” route i.e. home page. There you need to show the logged-in user’s profile picture, name, email, phone number as discussed above.
- On the home page, when the user clicks on the logout button, reset the saved user data in the redux store and redirect the user to the signup page i.e. “/signup” route.
- If a user tries to access the home page without logging in, redirect to the signup page.
- If a user tries to access the signup page after logging in, redirect to the home page.

<img src="https://github.com/princesimform/React-Practical-7/assets/125016923/c94bdeca-2010-4019-870f-acdad485f4e7" align="center"/> 

<!-- <br />

---

## Live Working Link

---

<br />

- [Production Link](https://prince-react-practical-6.netlify.app)
- [Development Link](https://codesandbox.io/p/github/princesimform/React-Practical-6/feature)

<br />

---

## Technologies

---

- Html
- Css
- Tailwind
- Javascript
- ReactJs
- Redux
- RTK Query

<br />

---

## Project Setup

---

<br />

- ### **Recommended IDE Setup**

  > VsCode/ sublime text

- ### **Install Package**

  > `npm install`

- ### **Compile and Hot-reload for Development**

  > `npm run dev`

- ### **Type Check, Compile and Minify for Production**
  > `npm run build`

<br />

---

## About Features

---

<br />

- The User List APP application includes the following features:

  - You can able to show all user list
  - on hover any specific user you can able to she it's profile card
  - Data Fetch Using RTK Query So the Unique Data Fetched only Once

- API : [https://test-react-5cd74-default-rtdb.firebaseio.com/users.json](https://test-react-5cd74-default-rtdb.firebaseio.com/users.json)
  <br />

---

## Environment Setup

---

<br />

- <b> For Environment Setup </b>

- Create a file called .env at the root of your project.
- Inside the .env file, define your environment variable
- In your React code, you can access the environment variable using `process.env.NODE_ENV`
- Restart the development server or rebuild your app to apply the changes.

- <b> How to run in different mode </b>
  - `npm run dev` run in Development Mode
  - `npm run start` run in Production Mode

<br />

---

## Unique of the Practical

---

<br />

- Unique Data Fetched only Once
- When any Profle care Show only the specific Profile card is render , not any other are rendering

<br />

---

## Live Practical Demo

---

<br />

<img src="https://github.com/princesimform/React-Practical-6/assets/125016923/1a55aa6d-19bd-42e3-a687-9e3b8dcf8d14" align="center"/>

<img src="https://github.com/princesimform/React-Practical-6/assets/125016923/505ec1b6-b0b7-4563-b482-0e8cbc1e8d35" align="center"/> -->

Pages

- Sign Up (Done)
- Login (Done)
- 404 (Done)
- Home (Done)
- Welcome

functionality
  Routing (React-Router-Dom) (Done)
  firebase for Auth
  Validation(Formik)
  Error Show below input
