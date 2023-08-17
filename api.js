const express = require('express');
const cors = require('cors');

const projectRouter = require('./routers/projects');

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
    res.json({
        title: "Project list",
        description: "my projects! see fall list at /projects and /projects/:id for more info, tho it would be easier to just check out the Frontend"
    })
})

api.use("/projects", projectRouter);

module.exports = api;
