/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        if (page.path.match(/^\/layout-controller/)) {
            // It's assumed that `landingPage.js` exists in the `/layouts/` directory
            console.log('matched');

            page.layout = "layoutController";

            // Update the page.
            createPage(page);
        }

        resolve();
    });
};