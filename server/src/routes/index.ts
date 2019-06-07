import express from 'express';

let api = express();

api.get("/", (req, res) => {
    res.json({ 
                path: req.path,
                session_id: req.sessionID })
})

api.get("/login", (req, res) => {
    res.json({ 
                path: req.path,
                session_id: req.sessionID })
})

api.get("/login/callback", (req, res) => {
    res.json({ 
                path: req.path,
                session_id: req.sessionID 
             })
})

api.get("/logout", (req, res) => {
    res.json({ 
                path: req.path,
                session_id: req.sessionID 
             })
})

api.post("/questions", (req, res) => {
    console.log(req.body)
    res.json({ 
                path: req.path,
                session_id: req.sessionID,
                data: req.body 
             })
})

export default api;