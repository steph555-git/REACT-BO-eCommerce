const db = require('../app')

const getAllLeadsCTRL = async (req, res) => {
    let archive = req.query.archive
    typeof archive === 'undefined' && (archive = false)

    try {
        const query = {
            text: `SELECT * FROM "BO_Schema"."TB_LEADS" WHERE "ARCHIVE" = $1 ORDER BY "id"  ASC`,
            values: [archive]
        }
        const result = await db.query(query)
        console.log('Query sent')
        return res.status(200).send(result.rows)
    } catch (error) {
        return res.status(500).send('Query Error')
    }
}

module.exports = getAllLeadsCTRL