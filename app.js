const express = require("express");
const vhost = require("vhost");

// create an app for the top-level domain
const app = express();

// create an app for each subdomain
const alpha = express();
const beta = express();

// Set the domain based on whether it's in production.
const domain =
    process.NODE_ENV === "production" ? "example.com" : "mysite.local";

// mount the extra apps on their subdomains
app.use(vhost(`alpha.${domain}`, alpha));
app.use(vhost(`beta.${domain}`, beta));

// a router for the root domain
app.get("/", (req, res) => {
    res.send(`hello world`);
});

// a router for the alpha subdomain
alpha.get("/", (req, res) => {
    res.send("here is the alpha subdomain");
});

// a router for the beta subdomain
beta.get("/", (req, res) => {
    res.send("here is the beta subdomain");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at 127.0.0.1:${PORT}`));
