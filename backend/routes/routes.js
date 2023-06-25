const express = require('express')
const router = express.Router()

const getAllArticlesCTRL = require('../controllers/getAllArticles.ctrl')
const getArticleCTRL = require('../controllers/getArticle.ctrl')

router.route('/getallarticles')
    .get(getAllArticlesCTRL)

router.route('/getarticle')
    .get(getArticleCTRL)
module.exports = router