const db = require('../app')

const getSubNavCTRL = async (req, res) => {
    try {
        const name = req.query.name

        const query = `SELECT field1,field2,field3,field4,field5 FROM "BO_Schema"."TB_SUB_NAV" where "PARENT_ELEM_NAME"= $1 `
        const result = await db.query(query, [name])
        return res.status(200).send(result.rows)
    } catch (error) {
        return res.status(500).send('Query Error')
    }
}

module.exports = getSubNavCTRL