const express = require('express')
const router = express.Router()

const getAllArticlesCTRL = require('../controllers/getAllArticles.ctrl')
const getArticleCTRL = require('../controllers/getArticle.ctrl')

const getSubNavCTRL = require('../controllers/getSubNav.ctrl')

const getAllLeadsCTRL = require('../controllers/getAllLeads.ctrl')
const getLeadCTRL = require('../controllers/getLead.ctrl')
const postNewLeadCTRL = require('../controllers/postNewLead.ctrl')
const updateLeadCTRL = require('../controllers/updateLead.ctrl')
const deleteLeadCTRL = require('../controllers/deleteLead.ctrl')

router.route('/getallarticles')
    .get(getAllArticlesCTRL)

router.route('/getarticle')
    .get(getArticleCTRL)

router.route('/subnav')
    .get(getSubNavCTRL)

router.route('/lead')
    .get(getAllLeadsCTRL)
    .post(postNewLeadCTRL)
router.route('/lead/:id')
    .get(getLeadCTRL)
    .put(updateLeadCTRL)
    .delete(deleteLeadCTRL)

module.exports = router