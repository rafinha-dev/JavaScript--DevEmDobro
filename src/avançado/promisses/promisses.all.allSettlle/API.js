const loadUsers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if(!response.ok){
        throw new Error(`Github API returned status code ${response.status}`)
    }

    const user = await response.json()

    return user
}
const loadRepositories = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    if(!response.ok) {
        throw new Error(`Github API returned status code ${response.status}`)
    }

    const repositories = await response.json()
    return repositories.map((repo) => ({id: repo.id, namde: repo.name}))
    // usado para retornar somente esses dois tipos
}

const loadEvents = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/events`)
        if (!response.ok){
            throw new Error(`Github API returned status code ${response.status}`)
        }
        const events = await response.json()
        // transforma em json
        return events.map((event) => ({
            id: event.id,
            name: event.type
        }))
}

const loadAll = async () => {
    try{
        const results = await Promise.all([
            loadUsers("rafinha-dev"),
            loadRepositories("rafinha-dev"),
            loadEvents("rafinha-dev")
        ])
        console.log(results)
    }catch(boll){
        console.log(boll)
    }
}
loadAll()