import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: any) {
  const body = await request;

  console.log("body", body);
  const { email, password, name } = body.data;

  if (!email || !password || !name) {
    return new NextResponse("Missing name, email, and password", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("User already exists", {
      status: 400,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hashPassword", hashPassword);
  console.log("prisma", prisma);
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashPassword,
    },
  });

  return NextResponse.json(user);
}
