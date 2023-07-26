import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/postController";

const router = Router();

router.route("/").post(createPost).get(getAllPosts);

export default router;
