const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// API Routes


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

const booksController = require("../controllers/booksController");

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/api/books/:id")
  .delete(booksController.remove);

module.exports = router;
