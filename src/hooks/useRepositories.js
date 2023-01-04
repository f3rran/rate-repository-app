//import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
    const { data= {}, loading, refetch } = useQuery(GET_REPOSITORIES)
    const {repositories = null} = data

    /*const [repositories, setRepositories] = useState(null)

    const fetchRepositories = async () => {
        const response = await globalThis.fetch('http://192.168.1.221:5000/api/repositories').catch(error => console.log(error))
        if (response) {
            const json = await response.json() ?? null
            setRepositories(json)
        }
    }

    useEffect(() => {
        fetchRepositories()
    }, [])*/

    const repositoriesNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : []

    return {loading, repositories: repositoriesNodes, refetch}
}

export default useRepositories