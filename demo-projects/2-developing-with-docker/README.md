## Demo Project – App With MongoDB database

### 📄 Project Description

This demo app is a simple **user profile app** application built with a Node.js backend using Express.js,
and a frontend using pure HTML, CSS, and JavaScript.

This **user profile app** allows a user to:

- View profile information (name, email, interests, and profile picture)
- Edit profile details such as name, email, and interests using input fields and a button.
- The updated user profile information is saved permanently after refreshing the page
  as there is data persistence because of the connected MongoDB. This is different from the app in the `1-app-with-mongodb` folder, where the data disappeared because MongoDB was not connected.

⚠️ Important: This data is only saved while the MongoDB container is running. If you stop and remove the MongoDB container the data will be lost.
To keep the data even after restarting or recreating the MongoDB container, you need to use Docker volumes. This will be discussed later.

---

### 🛠 Technologies Used

- HTML + CSS + JavaScript (frontend)
- Node.js, Express.js (backend)
- MongoDB (running in a Docker container)
  - MongoDB is a NoSQL database.
- Mongo-express (running in a Docker container)

---

⚠️ Important: Make sure your MongoDB and mongo-express containers are running before starting the Node.js app. This ensures the app can connect to the database and that the Mongo Express UI is accessible.

---

## ▶️ Steps to start the user profile app with mongoDB

#### Step 1: Clone this repository

```
git clone <repository-url>

```

---

#### Step 2 : Download the mongodb docker image called [mongo](https://hub.docker.com/_/mongo) by using the following command:

```
docker pull mongo
```

The [mongo](https://hub.docker.com/_/mongo) image will then be downloaded to your laptop.

---

#### Step 3 : Download the mongo-express docker image called [mongo-express](https://hub.docker.com/_/mongo-express) by using the following command:

The [mongo-express](https://hub.docker.com/_/mongo-express) image will then be downnloaded to your laptop.

```
docker pull mongo-express
```

---

#### Step 4 : Check if you have the mongodb image (mongo) and the mongo-express image downloaded on your laptop by using the following command:

```
docker images
```

You should see them both listed

---

#### Step 5 : Create a docker network for the mongodb and the mongo-express called `mongo-network` by using the following command:

```
docker network create mongo-network
```

---

#### Step 6 : Ensure that mongo-network was successfully created by using the following command:

```
docker network ls
```

After using this command, you should see **`mongo-network`** listed in the output

---

#### Step 7 : Start the mongodb container by using the command below. Make sure you add the network option (`--net mongo-network`), so that the mongodb container will run in the mongo-network.

```
docker run -d \
  -p 27017:27017 \
  -e MONGO_INIT_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  --net mongo-network \
  --name mongodb \
  mongo

```

Now you have started the mongodb container and you will see the container-id that
comes with the newly created mongodb container.

---

#### Step 8 : Confirm mongodb is running without errors using the following command:

```
docker logs <container-id>
```

After entering >>docker logs + container-id, you should see the following message:

```
MongoDB init process complete; ready for start up.
```

This message is printed after the MongoDB Docker container finishes its initialisation tasks like setting environment variables (e.g. , username/password).

Then you will see something similar to the following line:

```
:"Listening on","attr":{"address":"0.0.0.0:27017"}}
```

This message appears after MongoDB has started running and is now ready to accept connections on port 27017.

---

#### Step 9 Start mongo-express.You want mongo-express to connect to the running mongodb container at startup.

```
docker run -d \
  -p 8081:8081 \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
  -e ME_CONFIG_BASICAUTH_USERNAME=user \
  -e ME_CONFIG_BASICAUTH_PASSWORD=pass \
  --net mongo-network \
  --name mongo-express \
  -e ME_CONFIG_MONGODB_SERVER=mongodb \
  -e ME_CONFIG_MONGODB_URL=mongodb://mongodb:27017 \
  mongo-express
```

Now you have started the mongo-express container which will connect to the running MongoDB container automatically and provide a web-based interface on port 8081.

---

#### Step 10 : Confirm that mongo-express started successfully and connected to MongoDB

To check the logs of the mongo-express container and ensure it started properly, use the following command:

```
docker logs <container-id>
```

You should see output similar to this:

```
Mongo Express server listening at http://0.0.0.0:8081
Server is open to allow connections from anyone (0.0.0.0)
```

This means the mongo-express web server is running, accepting connections on port 8081, and is accessible via your browser at [http://localhost:8081](http://localhost:8081).

The fact that the server started and is listening indicates that mongo-express successfully connected to the MongoDB container (via the mongo-network and the provided credentials).

---

#### Step 11: Access the mongo-express web interface

Open your browser and navigate to [http://localhost:8081](http://localhost:8081) to access the mongo-express UI.
You will be prompted to log in using the basic authentication credentials you provided earlier:

- Username: `user` from:

```
 -e ME_CONFIG_BASICAUTH_USERNAME=user

```

- Password: `pass` from:

```
 -e ME_CONFIG_BASICAUTH_PASSWORD=pass
```

This interface allows you to visually interact with your MongoDB data.

---

#### Step 12: Create a new database and collection using the mongo-express UI

By default, MongoDB includes the `admin`, `config`, and `local` databases.

Although you can initialize a custom database during MongoDB container creation using the `MONGO_INITDB_DATABASE` environment variable, in this example we will create the database manually through the mongo-express web interface at [http://localhost:8081](http://localhost:8081).

Open the mongo-express UI in your browser.

Click the "Create Database" button.

Enter `user-account` as the database name.

Under "Collection Name," enter `users` to create the first collection.

This will create a new database called `user-account` and an initial collection named `users`, which you can now use to store and manage your application data.

---

#### Step 13: Check that the containers mongodb and mongo-express are both running.

```
docker ps

```

---

#### Step 14: Configuring the Node.js app to connect to MongoDB.

The Node.js app connects to MongoDB through the following code in the server.js file, it is the connecting string:

```
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

```

⚠️Important: This hardcoded connection string is used here for learning purposes only to keep things simple. Since this setup is for local development, and your MongoDB instance runs on your own machine (localhost), not exposed publicly, the risk of unauthorized access is minimal.

However, if you plan to deploy this app to a shared or production environment, it is strongly recommended to use environment variables or other secure methods to manage your database credentials.

---

#### Step 15: Navigate to the app directory (folder) `2-developing-with-docker` using the following command:

```
cd docker-TWN-devops-bootcamp/demo-projects/2-developing-with-docker
```

---

#### Step 16: Now that you are inside the `2-developing-with-docker` directory (folder), run the following command to install all required dependencies:

```
npm install
```

##### This command will create a `node_modules` directory (folder) which contains all the libraries the app needs to run.

---

#### Step 17:Then start the app with:

```
node server.js
```

---

#### Step 18: Open your browser and go to [http://localhost:3000](http://localhost:3000). Edit the user profile there — the updated information should appear in the `users` collection of the `user-account` MongoDB database. The updated user profile information is saved permanently after refreshing the page as there is data persistence because of the connected MongoDB.

#### ⚠️ Important: This data is only saved while the MongoDB container is running. If you stop and remove the MongoDB container the data will be lost.To keep the data even after restarting or recreating the MongoDB container, you need to use Docker volumes. This will be discussed later.
