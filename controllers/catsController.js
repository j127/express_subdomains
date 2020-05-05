// These functions generate the pages on the cats domain.

/**
 * Cats home page (list)
 */
function catListPage(req, res) {
    // this content could come from the database or wherever
    const pageData = {
        title: "Cats List",
        cats: [
            { name: "Alice", pic: "http://placekitten.com/200/200" },
            { name: "Bob", pic: "http://placekitten.com/199/201" },
        ],
    };
    res.render("catList", pageData);
}

/**
 * The cat detail page
 */
function catDetailPage(req, res) {
    const pageData = {
        title: "Some Cat",
        body: "lorem ipsum",
        pic: "http://placekitten.com/500/500",
    };
    res.render("catDetail", pageData);
}

module.exports = {
    catListPage,
    catDetailPage,
};
