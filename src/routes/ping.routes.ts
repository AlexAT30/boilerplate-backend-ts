import { Request, Response, Router } from "express";

const router = Router();

router.get("/ping", (_req: Request, res: Response) => {
  res.json({
    msg: "pong"
  })
});

export default router;