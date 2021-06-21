const getData = async (url = '', options = {}) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(err => {
        console.log("Error getting information-",err.message)
    })
    return res.json();
}

export default getData;