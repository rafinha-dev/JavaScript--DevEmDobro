// simulando uma chamada de API 
const loadUsers = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {id: 1, name: 'John'},
                {id: 2, name: 'Jane'}
            ])
        },2000)
    })
}
const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject(new Error("Erro ao carregar os eventos"))
            // instanciando o construtor de erro do JS
            // resolve([
            //     {id: 1, name: 'John'},
            //     {id: 2, name: 'Jane'}
            // ])
        },2000)
    })
}

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                {id: 1, name: 'John'},
                {id: 2, name: 'Jane'}
            ])
        },2000)
    })
}

const loadAll = async () => {
    try{
        const result = await Promise.all([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ])
    console.log(result)
    } catch (err){

    }
}

loadAll()