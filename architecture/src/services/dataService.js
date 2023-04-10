const baseUrl = 'http://localhost:3030/data/architecture'

const getAll = async () => {
    const responce = await fetch(baseUrl)
        .catch(err => console.log(err))
    const result = await responce.json()
    console.log(result)

    return result
}


export {
    getAll
}