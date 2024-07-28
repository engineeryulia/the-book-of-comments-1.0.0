const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const typeDevs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const MONGODB = 'mongodb+srv://engineeryulia:Blue5055@cluster0.a79pfrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log("MongoDB Connection successful")
    return server.listen({port: 5000})
        .then((res) => {
            console.log(`server running at ${res.url}`)
        })
})