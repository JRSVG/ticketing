import express, { Request, Response } from "express";
import {
  requireAuth,
} from "@jrsvgtickets/common";
import { Order } from "../models/order";

const router = express.Router();

router.get(
  "/api/payments",
  requireAuth,
  async (req: Request, res: Response) => {
    const orders = await Order.find({
      userId: req.currentUser!.id,
    });
  
    res.send(orders);
  }
);

export { router as indexChargeRouter };
