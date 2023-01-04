import ApolloClient from "apollo-boost";

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.1.221:4000/'
    })
}

export default createApolloClient