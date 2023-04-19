const baseUrl = 'http://localhost:3030/data/architecture'

const getAll = async () => {
    const responce = await fetch(baseUrl)
        .catch(err => console.log(err))
    const result = await responce.json()

    return result
}
const getOne = async (id) => {
    const responce = await fetch(baseUrl + '/' + id)
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

const del = async (id, token) => {
    await fetch((baseUrl + '/' + id), {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
    })
        .catch(err => console.log(err))
}

const edit = async (id, token, data) => {
    const responce = await fetch((baseUrl + '/' + id), {
        method: "PUT",
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
    getOne,
    create,
    del,
    edit
}