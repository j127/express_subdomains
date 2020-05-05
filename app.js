const path = require("path");
const express = require("express");
const vhost = require("vhost");

// import routers
const mysiteRouter = require("./routes/index");
const catsRouter = require("./routes/cats");
const dogsRouter = require("./routes/dogs");

// create an app for the top-level domain
const app = express();

// create an app for each subdomain
const cats = express();
const dogs = express();

// add handlebars templating
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// TODO: there may be a better way to do this
cats.set("views", path.join(__dirname, "views"));
cats.set("view engine", "hbs");

dogs.set("views", path.join(__dirname, "views"));
dogs.set("view engine", "hbs");

// Set the domain based on whether it's in production.
const domain =
    process.NODE_ENV === "production" ? "example.com" : "mysite.local";

// mount the extra apps on their subdomains
app.use(vhost(`cats.${domain}`, cats));
app.use(vhost(`dogs.${domain}`, dogs));

// mount the router files for the main domain and subdomains
app.use(mysiteRouter);
cats.use(catsRouter);
dogs.use(dogsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at 127.0.0.1:${PORT}`));
