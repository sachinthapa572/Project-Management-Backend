import { Router } from "express";
import { getCurrentUserController } from "../controllers/user.controller";

const userRoutes = Router();

/**
 * @swagger
 * /user/current:
 *   get:
 *     summary: Get the current user
 *     responses:
 *       200:
 *         description: Current user details
 */
userRoutes.get("/current", getCurrentUserController);

export default userRoutes;
