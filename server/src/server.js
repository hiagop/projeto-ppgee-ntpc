import express from 'express'
import session from 'express-session'
import FileStoreGenerator from 'session-file-store'
import uuid from 'uuid'
// import CORS from 'cors'

const port = process.env.SERVER_PORT || 8000

// let sessionConfig = {
//     genid: (req) => {
//         console.log("inside the session config callback:")
//         console.log(req.sessionID)
//         return uuid()
//     },
//     secret: 'patati patata',
//     resave: false,
//     saveUninitialized: true
//}

const server = new express()

const FileStore = new FileStoreGenerator(session)

server.use(session({
    genid: (req) => {
        console.log("inside the session config callback:")
        console.log(req.sessionID)
        return uuid()
    },
    store: new FileStore(),
    secret: 'patati patata',
    resave: false,
    saveUninitialized: true
}))

server.get("/", (req, res) => {
    // console.log(req)
    console.log("inside the / callback:")
    console.log(req.sessionID + "\n")
    res.send("Home\n")
})

server.listen(port, () => {
    console.log("Server running on port:", port)
})
