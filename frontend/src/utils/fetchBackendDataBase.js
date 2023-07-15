export const getFetchBackendDataBase = async (slug, id, archive = false) => {

    try {
        let url = id ? `http://localhost:4000/${slug}/${id}` : `http://localhost:4000/${slug}`
        archive && (url += "?archive=true")

        const response = await fetch(url)
        const jsonData = await response.json();
        return jsonData
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
export const putFetchBackendDataBase = async (slug, id, newData) => {
    try {
        const response = await fetch(`http://localhost:4000/${slug}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        if (response.ok) {
            console.log('Data update successfull !');
            return response.ok
        } else {
            console.error('Data update Error :', response.statusText);
            return response.ok
        }
    } catch (error) {
        console.error('Request error :', error);
    }
}