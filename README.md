TaskNest Project Guide
This guide will walk you through the steps to set up and run the TaskNest project, a simple task manager with three categories: Today, Upcoming, and Completed.

Prerequisites
Before you begin, make sure you have the following installed on your machine:

Node.js: Download and install Node.js from nodejs.org.

npm (Node Package Manager): npm is included with the Node.js installation.

MongoDB: Install MongoDB and ensure it is running on your system.

Note for Windows Users:
If you are using Windows, ensure that npm and MongoDB are correctly set up in your system’s PATH environment variable. You can check if npm is installed by running:


npm -v
And check MongoDB by running:


mongod --version
Getting Started
First, clone the repository to your local machine using the following command:


git clone https://github.com/BaarbCampos/DevopBackend
Navigate to the project directory:


cd tasknest
Installing Dependencies
Before running the project, install the necessary dependencies:


npm install
Running the Backend
To start the backend server, make sure MongoDB is running, then execute:


node server.js
If everything is set up correctly, you should see:


Server running on port 5000
MongoDB Connected
