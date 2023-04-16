const baseUrl = 'http://localhost:3030/data/architecture'

const getAll = async () => {
    const responce = await fetch(baseUrl)
        .catch(err => console.log(err))
    const result = await responce.json()

    return result
}


export {
    getAll
}