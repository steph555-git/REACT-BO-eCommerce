
const getSubNavFetch = async () => {
    try {
        const response = await fetch(`http://localhost:4000/subnav`)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error('Error:', error)
    }
}

module.exports = getSubNavFetch