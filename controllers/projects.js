const Project = require("../models/projects.js");

async function index (req, res) {
    try {
        const projects = await Project.getAll();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const project = await Project.getOneById(id);
        res.status(200).json(project);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function updatelikes (req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const project = await Project.getOneById(id);
        const result = await project.updatelikes(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, updatelikes
}
