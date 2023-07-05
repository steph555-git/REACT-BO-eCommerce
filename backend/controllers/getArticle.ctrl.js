const db = require('../app')

const getArticleCTRL = async () => {
    console.log('route Get 1 Article')

    db.query(`SELECT * FROM "BO_Schema"."TB_SUB_NAV" where "PARENT_ELEM_NAME"='ARTICLES' `, (err, res) => {
        if (!err) {
            console.log(res.rows)
        } else {
            console.log(err)
        }
    })

}
module.exports = getArticleCTRL