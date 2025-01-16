import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  getAllProjectsInWorkspaceController,
  getProjectAnalyticsController,
  getProjectByIdAndWorkspaceIdController,
  updateProjectController,
} from "../controllers/project.controller";

const projectRoutes = Router();

/**
 * @swagger
 * /project/workspace/{workspaceId}/create:
 *   post:
 *     summary: Create a new project
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project created successfully
 */
projectRoutes.post("/workspace/:workspaceId/create", createProjectController);

/**
 * @swagger
 * /project/{id}/workspace/{workspaceId}/update:
 *   put:
 *     summary: Update a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project updated successfully
 */
projectRoutes.put(
  "/:id/workspace/:workspaceId/update",
  updateProjectController
);

/**
 * @swagger
 * /project/{id}/workspace/{workspaceId}/delete:
 *   delete:
 *     summary: Delete a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted successfully
 */
projectRoutes.delete(
  "/:id/workspace/:workspaceId/delete",
  deleteProjectController
);

/**
 * @swagger
 * /project/workspace/{workspaceId}/all:
 *   get:
 *     summary: Get all projects in a workspace
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of projects
 */
projectRoutes.get(
  "/workspace/:workspaceId/all",
  getAllProjectsInWorkspaceController
);

/**
 * @swagger
 * /project/{id}/workspace/{workspaceId}/analytics:
 *   get:
 *     summary: Get analytics for a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project analytics
 */
projectRoutes.get(
  "/:id/workspace/:workspaceId/analytics",
  getProjectAnalyticsController
);

/**
 * @swagger
 * /project/{id}/workspace/{workspaceId}:
 *   get:
 *     summary: Get a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project details
 */
projectRoutes.get(
  "/:id/workspace/:workspaceId",
  getProjectByIdAndWorkspaceIdController
);

export default projectRoutes;
