import { Router } from "express";
import {
  changeWorkspaceMemberRoleController,
  createWorkspaceController,
  deleteWorkspaceByIdController,
  getAllWorkspacesUserIsMemberController,
  getWorkspaceAnalyticsController,
  getWorkspaceByIdController,
  getWorkspaceMembersController,
  updateWorkspaceByIdController,
} from "../controllers/workspace.controller";

const workspaceRoutes = Router();

/**
 * @swagger
 * /workspace/create/new:
 *   post:
 *     summary: Create a new workspace
 *     responses:
 *       200:
 *         description: Workspace created successfully
 */
workspaceRoutes.post("/create/new", createWorkspaceController);

/**
 * @swagger
 * /workspace/update/{id}:
 *   put:
 *     summary: Update a workspace by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace updated successfully
 */
workspaceRoutes.put("/update/:id", updateWorkspaceByIdController);

/**
 * @swagger
 * /workspace/change/member/role/{id}:
 *   put:
 *     summary: Change a workspace member's role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Member role changed successfully
 */
workspaceRoutes.put("/change/member/role/:id", changeWorkspaceMemberRoleController);

/**
 * @swagger
 * /workspace/delete/{id}:
 *   delete:
 *     summary: Delete a workspace by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace deleted successfully
 */
workspaceRoutes.delete("/delete/:id", deleteWorkspaceByIdController);

/**
 * @swagger
 * /workspace/all:
 *   get:
 *     summary: Get all workspaces the user is a member of
 *     responses:
 *       200:
 *         description: List of workspaces
 */
workspaceRoutes.get("/all", getAllWorkspacesUserIsMemberController);

/**
 * @swagger
 * /workspace/members/{id}:
 *   get:
 *     summary: Get members of a workspace by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of workspace members
 */
workspaceRoutes.get("/members/:id", getWorkspaceMembersController);

/**
 * @swagger
 * /workspace/analytics/{id}:
 *   get:
 *     summary: Get analytics for a workspace by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace analytics
 */
workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

/**
 * @swagger
 * /workspace/{id}:
 *   get:
 *     summary: Get a workspace by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workspace details
 */
workspaceRoutes.get("/:id", getWorkspaceByIdController);

export default workspaceRoutes;
