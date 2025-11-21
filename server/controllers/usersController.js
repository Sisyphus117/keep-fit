import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const data = await prisma.users.findUnique({
      where: { id: userId },
    });

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
