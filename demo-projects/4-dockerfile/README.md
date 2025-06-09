## Demo Project – Building your own Docker image

### 📄 Project Description

This project shows how to containerise a Node.js application using Docker.

---

### 🛠 Technologies Used

- HTML + CSS + JavaScript (frontend)
- Node.js, Express.js (backend)
- Docker

---

#### Step 1 Create the dockerfile for the node application.

---

#### Step 2 Built the docker image using the dockerfile using the following command:

```
docker build -t my-app:1.0 .
```

---

#### Step 3 Check if the docker image has been built using the following command:

```
docker images
```

You should be able to see the newly built image in the list of images listed.

---

#### Step 4 Start running the container of the newly created docker Image, using the following command:

```
 docker run -it -p 3000:3000 my-app:1.0
```

You should now be able to check the website on your laptop at [http://localhost:3000](http://localhost:3000)

---

#### Step 5 Open a new terminal and check if you can see the container of the node.js app running, using the following command:

```
docker ps
```

---

#### Step 6 Go inside the node.js app container, using the following command:

```
docker exec -it my-container /bin/sh
```

This command will allow you to navigate folders and check files inside the container.

---

#### Step 7 Go inside inside the working directory of the container using the following commands:

```
1. cd /
2. ls /home/app
```

This will give you a list of the files present in the node.js app folder, such as the server.js, the package.json file, index.html file and the images folder. Furthermore, since you used `npm install` in the` Dockerfile`, you will also find the newly created `node modules` folder and `pacakge-lock.json` file.

---

#### step 8: You can leave the container by using the following command:

`exit`
