export const fetchBackendDataBase = async (slug) => {
    const response = await fetch(`http://localhost:4000/${slug}`);
    const jsonData = await response.json();
    return jsonData
}