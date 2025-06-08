## Demo Project – App Without MongoDB database

### 📄 Summary/Overview

This demo app is a **simple user profile application (Node.js app)** built with a Node.js backend using Express.js,
and a frontend using pure HTML, CSS, and JavaScript.

This **user profile app (Node.js app)** allows a user to:

- View profile information (name, email, interests, and profile picture)
- Edit profile details such as name, email, and interests by pressing the `edit profile` button.
- See changes immediately on the page after pressing the `update profile` button
- However, **the updates are temporary** — the updated information is not saved after refreshing the page, because there is no database connected to store the data. In other words, the updated information will be lost if you refresh the page and you will get back the original information that was there at the beginning.

---

### 🛠 Technologies Used

- HTML + CSS + JavaScript
- Node.js
- Express.js

---

## Prerequisites:

- Node.js installed on your laptop.
- Npm installed (comes bundled with Node.js)

---

## ▶️ Follow the steps below to run the User Profile App (Node.js app), as this will be the app you will be using throughout the following demo projects.

#### Step 1: Clone this repository

```
git clone <repository-url>

```

#### Step 2: After cloning the repository, navigate to the app directory (folder) `1-app-without-mongodb` using the following command:

```
cd <path-to-project-folder>

```

#### Step 3: Now that you are inside the `1-app-without-mongodb` directory (folder), run the following command to install all required dependencies:

```
npm install
```

##### This command will create a `node_modules` directory (folder) which contains all the libraries the app (Node.js app) needs to run.

#### Step 4: Run the following command to start the server:

```
node server.js
```

##### Make sure you're still in the `1-app-without-mongodb` directory (folder) when running this command.

##### You should see a message like this in the terminal:

```
app listening on port 3000!
```

#### Step 5: Open your browser and navigate to:

```
http://localhost:3000
```

##### You should see the user profile page

---

## How to use the page

### ✏️ Edit the Profile

- **Click the "Edit Profile" button to change or modify the user's details:**

  - Name
  - Email
  - Interests

- **After making the changes, click the "Update Profile" button.**

  - The page will update instantly with the new profile information.

- **Refresh the page.**

  - After refreshing the page, you will see that the new profile information you had updated, **has not been saved permanently.** The reason being, **there is no data persistence (permanent storage of data) because there is no database (MongoDB) connected to this user profile app (Node.js app).**

---

## What’s Next?

Once you’ve run the above user profile app locally (on your laptop), try the follow-up project in the `2-developing-with-docker` directory (folder). This project uses the same user profile app but adds a connection to a MongoDB database to enable data persistence.
