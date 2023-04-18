const baseUrl = 'http://localhost:3030/data/architecture'

const getAll = async () => {
    const responce = await fetch(baseUrl)
        .catch(err => console.log(err))
    const result = await responce.json()

    return result
}

const create = async (data, token) => {
    const responce = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
        .catch(err => console.log(err))

    const result = await responce.json()
    return result
}

export {
    getAll,
    create
}