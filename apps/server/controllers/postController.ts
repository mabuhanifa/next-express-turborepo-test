import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createPost = async (req: Request, res: Response) => {
  const { title, body, authorId } = req.body;

  if (!title || !body) {
    res.status(400).send("Please enter all fields");
  }

  const user = await prisma.post.create({
    data: {
      title,
      body,
      authorId,
    },
  });

  res.status(201).send(user);

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  const users = await prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });

  res.status(201).send(users);

  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
