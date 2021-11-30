import { useState, useEffect } from "react"
import { Axios } from "axios";
import { isCompositeComponent } from "react-dom/test-utils";

const List = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filter, setFilter] = useState([])

    useEffect(() => {
        async function pegaDados() {
            const response = await fetch('https://api.github.com/users/ylanaportela/repos')
            const data = await response.json()
            console.log(data)

            setRepos(data)
        }
        pegaDados()
    }, [])

    useEffect(() =>
        setFilter(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
       
        ), [repos, busca])


    return (
        <main>
            <h1>Meus Repos</h1>
            <input placeholder="Digite um Repo" onChange={(e) => setBusca(e.target.value)} />

            <ul>
                {filter.map(item =>
                    <li key={item.id}>{item.name}</li>
                )
                }
            </ul>

        </main>
    )
}

export default List


