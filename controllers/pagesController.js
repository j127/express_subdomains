// These functions generate the pages on the top-level domain.

/**
 * The home page
 */
function homePage(req, res) {
    // this content could come from the database or wherever
    const pageData = {
        title: "Home Page",
        body: `
        <p>The links wouldn't be hard-coded in production, but this
        is a quick example.</p>
        <ul>
            <li><a href="/about">about</a></li>
            <li><a href="http://cats.mysite.local:3000/">subdomain 1</a></li>
            <li><a href="http://dogs.mysite.local:3000/">subdomain 2</a></li>
        </ul>
        `,
    };
    res.render("page", pageData);
}

/**
 * The about page
 */
function aboutPage(req, res) {
    const pageData = {
        title: "About Page",
        body: "lorem ipsum",
    };
    res.render("page", pageData);
}

module.exports = {
    homePage,
    aboutPage,
};
