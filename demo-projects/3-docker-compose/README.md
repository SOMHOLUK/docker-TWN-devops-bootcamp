## Demo Project – Docker compose. Running multiple services with docker compose.

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
  - mongo-express is a web-based mongodb admin interface that allows you to view, manage, and interact with the mongodb database through a browser, without needing to use the command line.

---

#### If you have just finished doing the demo in `2-developing-with-docker` , make sure you stop and ideally also remove the mongodb container and the mongo-express container, before proceeding with this demo. If you do not stop those containers, you will not be able to use ports 27017 (MongoDB) and 8081 (Mongo Express) on the host. You can stop the containers using their IDs: docker stop <container-id-1> <container-id-2>

```
docker stop <container-id-1> <container-id-2>
```

#### And you can remove those containers using their IDs:

```
docker rm docker rm <container-id-1> <container-id-2>
```

---

## ▶️ Steps to start the User Profile App using docker compose.

#### Step 1 : Start the containers mongodb and mongo-express, mentioned in the mongo.yaml file using the following command:

```
docker-compose -f mongo.yaml up
```

After using this command, docker compose creates a network and runs the mongodb and the mongo-express containers inside of that network.

#### Step 2 : Check the network that has been created by using the following command:

```
docker network ls
```

You'll see that the name of the network is `2-docker-compose_default`.

#### Step 3 : Check that both the mongodb and the mongo-express containers are running by using the following command:

```
docker ps
```

#### Step 4 : Visit mongo-express at [http://localhost:8081](http://localhost:8081)

In the previous project when we used `docker run` , we had created a database and collection. However, that is gone now because we recreated the container now using docker compose. When you recreate a container, everything you configured in that container's application is gone. So data is lost. There is no data persistence in the containers. To have data persistence even when you recreate the container you would need something called: Docker Volumes.

#### Step 5 : Create the database `user-account` and the collection `users` again at mongo-express [http://localhost:8081](http://localhost:8081)

#### Step 6: Navigate to the app directory (folder) `3-docker-compose` using the following command:

```
cd docker-TWN-devops-bootcamp/demo-projects/3-docker-compose
```

#### Step 7: Now that you are inside the `3-docker-compose` directory (folder), run the following command to install all required dependencies:

```
npm install
```

#### Step 8:Then start the app with:

```
node server.js
```

#### Step 9: Open your browser and go to [http://localhost:3000](http://localhost:3000). Edit the user profile there — the updated information should appear in the `users` collection of the `user-account` MongoDB database. The updated user profile information is saved permanently after refreshing the page as there is data persistence because of the connected MongoDB.

#### ⚠️ Important: This data is only saved while the MongoDB container is running. If you stop and remove the MongoDB container the data will be lost.To keep the data even after restarting or recreating the MongoDB container, you need to use Docker volumes. This will be discussed later.
