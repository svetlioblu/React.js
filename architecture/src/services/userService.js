const baseUrl = 'http://localhost:3030'

const logIn = async (data) => {
    console.log(data);
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

    await fetch(`${baseUrl}/users/logout`, {
        method: "GET",
        headers: {
            'X-Authorization': token
        }
    })
        .catch(err => console.log(err))
}

const register = async (data) => {
    const responce = await fetch(`${baseUrl}/users/register`,
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

export {
    logIn,
    logOut,
    register
}