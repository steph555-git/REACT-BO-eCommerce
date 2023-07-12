export const getFetchBackendDataBase = async (slug, id) => {
    try {
        const url = id ? `http://localhost:4000/${slug}/${id}` : `http://localhost:4000/${slug}`
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
        } else {
            console.error('Data update Error :', response.statusText);
        }
    } catch (error) {
        console.error('Request error :', error);
    }
}