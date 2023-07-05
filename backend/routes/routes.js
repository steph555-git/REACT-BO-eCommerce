const express = require('express')
const router = express.Router()

const getAllArticlesCTRL = require('../controllers/getAllArticles.ctrl')
const getArticleCTRL = require('../controllers/getArticle.ctrl')
const getSubNavCTRL = require('../controllers/getSubNav.ctrl')

router.route('/getallarticles')
    .get(getAllArticlesCTRL)

router.route('/getarticle')
    .get(getArticleCTRL)

router.route('/subnav')
    .get(getSubNavCTRL)

module.exports = router