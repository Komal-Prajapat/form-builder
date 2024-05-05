import express from "express";
import { register ,login, getAllUser, getUserById } from "../controllers/user.js";
import { authenticate } from "../middlewares/Auth.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "this is home route",
  });
  console.log("this is home route");
});

router.post("/register", register);
router.post("/login", login);

router.get("/users", getAllUser);

router.get("/auth", authenticate , (req,res)=>res.json({message:"This s super man !..." , user:req.user}));

router.get("/user/:id",authenticate , getUserById )

export default router;
