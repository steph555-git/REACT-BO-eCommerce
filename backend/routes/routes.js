const express = require('express')
const router = express.Router()

const getAllArticlesCTRL = require('../controllers/getAllArticles.ctrl')
const getArticleCTRL = require('../controllers/getArticle.ctrl')
const getSubNavCTRL = require('../controllers/getSubNav.ctrl')
const getAllLeadsCTRL = require('../controllers/getAllLeads.ctrl')
const getLeadCTRL = require('../controllers/getLead.ctrl')
const postNewLeadCTRL = require('../controllers/postNewLead.ctrl')
const updateLeadCTRL = require('../controllers/updateLead.ctrl')

router.route('/getallarticles')
    .get(getAllArticlesCTRL)

router.route('/getarticle')
    .get(getArticleCTRL)

router.route('/subnav')
    .get(getSubNavCTRL)

router.route('/newlead')
    .post(postNewLeadCTRL)

router.route('/getallleads')
    .get(getAllLeadsCTRL)

router.route('/getlead/:id')
    .get(getLeadCTRL)

router.route('/updatelead/:id')
    .put(updateLeadCTRL)
module.exports = router