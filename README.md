﻿# My-Confessions it is a Confessions posting app where user can post their innner confessions freely without worrying about their identity being revield to the other users and readers . A user can also read confessions of other , this helps in furling confidence in the user knowing that there are other people as well who are going through somethings which are not usuall as per normal mindset 

#pre-requisite 
1.Normal packages which are required to run any app are required along with some dependecies which are mentioned below as it is a MERN project so Node js , MongoDB , Mongosh(If you want to use local database ie MongoDB compass) Express and react , ohter are :-

FOR BACKEND 
 "dependencies": {
        "bcryptjs": "^2.4.3",
        "cloudinary": "^1.41.2",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "express-async-handler": "^1.2.0",
        "jsonwebtoken": "^9.0.2",
        "mongodb": "^6.3.0",
        "mongoose": "^8.0.4",
        "nodemon": "^3.0.2"
      }

FOR FRONT_END
 "dependencies": {
        "@chakra-ui/react": "^2.8.2",
        "@emotion/react": "^11.11.3",
        "@emotion/styled": "^11.11.0",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^1.6.5",
        "framer-motion": "^10.18.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^5.3.4",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      }


for connecting to SERVER and establishing connection to local databas (MongoDB Compass ) change following things in .env file 

PORT = As per your Convenience ||5000
MONGO_URI = run mongosh command on cmd once the mongoDB compass is connected a URI will be visible in green colot , paste it here 

JWT_SECRET = as per your wish 


FOR relation between backent and Front end add proxy URL in frontend dependecies 

EXAMPLE :- "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://127.0.0.1:5000",

In  my project server is on 5000 and client(frontend) in on 3000
