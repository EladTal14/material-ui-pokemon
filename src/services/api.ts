interface IGetPokemons {
    url: string
}

export const getPokemons = async (url: string) => {
    try {
        const res = await fetch(url)
        const {results, next} = await res.json()
        const urls = results.map((result: { name: string, url: string }) => result.url)
        const data = urls.map(async (url: string) => {
                const data = await fetch(url)
                return await data.json()
            }
        )
        const pokes = await Promise.all(data)
        return {pokes, next}
    } catch (err) {
        console.log(err)
    }


}
export const getUsers = async (url: string) => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=10')
        const {results} = await res.json()
        // const urls = results.map((result: { name: string, url: string }) => result.url)
        // const data = urls.map(async (url: string) => {
        //         const data = await fetch(url)
        //         return await data.json()
        //     }
        // )
        // const pokes = await Promise.all(data)
        console.log(results)
        return results
    } catch (err) {
        console.log(err)
    }

}