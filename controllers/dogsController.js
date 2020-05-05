// This function generates the page on the dogs domain.

/**
 * Dog home page
 */
function dogPage(req, res) {
    // this content could come from the database or wherever
    const pageData = {
        title: "Dog Page",
        pic: "https://placedog.net/500",
        body: "[caption]",
    };
    res.render("dog", pageData);
}

module.exports = {
    dogPage,
};
