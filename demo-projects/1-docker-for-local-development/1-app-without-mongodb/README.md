# Demo Project – App Without MongoDB database

## 📄 Project Description

This **user profile app** allows a user to:

- View profile information (name, email, interests, and profile picture)
- Edit profile details such as name, email and interests via a form
- See changes immediately on the page
- However, **the updates are temporary** — the updated information is not saved permanently (there is no data persistence). In other words, the updated information will be lost if you refresh the page and you will get back the original information that was there at the beginning.

---

## 🛠 Technologies Used

- HTML + CSS + JavaScript
- Node.js
- Express.js

---

# ▶️ Steps to Run the User Profile App

### Step 1: Clone this repository

```
git clone ...
```

### Step 2: Navigate to the project directory (folder). Make sure the folder contains the package.json file.

```
cd
```

### Step 3: Install dependencies. Run the command (npm install) inside the folder that contains the package.json file. This command will create the folder called node_modules.

```
npm install
```

### Step 4: Start the Node.js server

```
node server.js
```

### Step 5: View the application in your browser. You will see the user profile page. Open your browser and navigate to:

```
http://localhost:3000
```

---

# How to use the page

## ✏️ Edit the Profile

- Click the **"Edit Profile"** button to modify your details:

  - **Name**
  - **Email**
  - **Interests**

- After making your changes, click the **"Update Profile"** button.

✅ The page will update instantly with your new profile information.

> ⚠️ **Note: Your changes are not saved permanently.
> if you refresh the page the changes will not be saved. There is no data persistence (permanent storage of data) because there is no database (MongoDB) connected to this app.**

## Step 6: What’s Next?

Once you have run this app locally (on your laptop), try the follow-up project in the directory (folder) called `app-with-mongodb`", where you connect the **user profile app** to MongoDB database. Using the MongoDB database enables data persistence (permanent data storage).

**The follow-up project in the `app-with-mongodb` folder is an app with MongoDB (database).**
