# GAA NFL 2024 Website

A data driven component-based website built using AngularJS framework, Express.js for building RESTful APIs with Node.js, and MySQL database following a three-tier architecture.

# How to Run

1. Install XAMPP. Start Apache and MySQL module from XAMPP Control Panel.
2. Download SQL database files provided in folder `gaa-nfl-2024/database/`.
3. Open MySQL admin from XAMPP Control Panel and import both SQL databases.
4. Now MySQL server is running on localhost.
5. Install Node.js to setup REST API server and Angular server.
6. Download the project repository.
7. Open both folders `gaa-nfl-2024/a2restapi_` and `gaa-nfl-2024/a2ng_` separately in Windows Terminal.
8. Enter the following command in the REST API terminal to run REST API server:

```
npm install
```

```
node index.js
```

9. Now REST API server is running on localhost.
10. Enter the following commands in the Angular terminal:

```
npm install
```

```
ng serve
```

11. Now Angular server is running on localhost.
12. Website is up and running by implementing three-tier architecture. Thanks :)
