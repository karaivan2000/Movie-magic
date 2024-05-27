const express = require(`express`);
const router = express.Router();
const homeController = require(`./controllers/homeConroller`);

router.use(homeController);

module.exports = router;

