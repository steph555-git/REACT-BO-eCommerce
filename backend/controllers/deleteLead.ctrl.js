const db = require('../app')

const deleteLeadCTRL = async (req, res) => {
    try {
        const query = `DELETE * FROM "BO_Schema"."TB_LEADS" WHERE "id"=${req.params.id}`
        const result = await db.query(query)
        console.log('Query sent')
        return res.status(200).send(result.rows)
    } catch (error) {
        return res.status(500).send('Query Error')
    }
}

module.exports = deleteLeadCTRL