const baseUrl = 'http://localhost:3030'

const logIn = async (data) => {
    const responce = await fetch(`${baseUrl}/users/login`,
        {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .catch(err => console.log(err))

    const result = await responce.json()

    return result
}

const logOut = async (token) => {
    console.log(token)
    const responce = await fetch(`${baseUrl}/users/logout`, {
        method: "GET",
        headers: {
            'X-Authorization': token
            // 'content-type': 'application/json'
        },
        // body: JSON.stringify(data)
    })
        .catch(err => console.log(err))

    const result = await responce
    
    return result
}

export {
    logIn,
    logOut
}