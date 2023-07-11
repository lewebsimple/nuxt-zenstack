export default defineEventHandler(async (event) => {
  const prisma = getExtendedPrisma(event);
  return {
    nbUsers: await prisma.user.count(),
    nbPosts: await prisma.post.count(),
  };
});
