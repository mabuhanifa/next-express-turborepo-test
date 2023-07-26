import { Router } from "express";
import { createPost } from "../controllers/postController";

const router = Router();

router.route("/").post(createPost);

export default router;
