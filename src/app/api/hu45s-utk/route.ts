import { prisma } from '@/app/lib/prisma';

export async function GET() {
  const pages = await prisma.page.findMany({ orderBy: { number: 'asc' } });
  return Response.json(pages);
}

export async function POST(request: Request) {
  const { number } = await request.json();
  const page = await prisma.page.findUnique({
    where: { number },
  });
  if (page) {
    await prisma.page.update({
      where: { number },
      data: { accesses: page.accesses + 1 },
    });
  } else {
    await prisma.page.create({
      data: { number: parseInt(number), accesses: 1 },
    });
  }
  return Response.json({ status: 200 });
}
