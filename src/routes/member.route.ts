import { Router } from "express";
import { joinWorkspaceController } from "../controllers/member.controller";

const memberRoutes = Router();

/**
 * @swagger
 * /member/workspace/{inviteCode}/join:
 *   post:
 *     summary: Join a workspace using an invite code
 *     parameters:
 *       - in: path
 *         name: inviteCode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Joined workspace successfully
 */
memberRoutes.post("/workspace/:inviteCode/join", joinWorkspaceController);

export default memberRoutes;
