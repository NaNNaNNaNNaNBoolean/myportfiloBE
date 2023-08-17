const { Router } = require('express');

const ProjectController = require('../controllers/projects.js');

const ProjectRouter = Router();

ProjectRouter.get("/", ProjectController.index);
ProjectRouter.get("/:id", ProjectController.show);
ProjectRouter.patch("/:id", ProjectController.updatelikes);

module.exports = ProjectRouter;
