// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Admins } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "@/lib/dbConnect";
const secretKey = "SERCERT";

type Data = {
  token?: Object;
  message?: string;
};

//signup router
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();

  const { email, password } = req.body;

  console.log(email, password);

  if (!email || !password) {
    res
      .status(400)
      .json({ message: "Please Enter your Email or Password Correctly." });
  } else {
    const existingUser = await Admins.findOne({
      email: email,
      password: password,
    });

    if (existingUser) {
      res.status(400).json({ message: "Admin already exists!" });
    } else {
      const obj = { email, password };
      await Admins.create(obj);
      if (!secretKey) {
        console.log("Token missing or malformed secret key");
        return res
          .status(401)
          .json({ message: "Token missing or malformed secret key" });
      }
      const token = jwt.sign(obj, secretKey, {
        expiresIn: "4h",
      });

      res
        .status(200)
        .json({ message: "Admin created successfully", token: token });
    }
  }
}
