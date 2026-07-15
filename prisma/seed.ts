import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database starting...");

  // 1. Roles & Permissions
  const permissionsList = [
    "manage_services",
    "manage_products",
    "manage_portfolio",
    "manage_blogs",
    "manage_categories",
    "manage_technologies",
    "manage_team",
    "manage_testimonials",
    "manage_faqs",
    "manage_careers",
    "manage_internships",
    "manage_leads",
    "manage_bookings",
    "manage_quotes",
    "manage_settings",
    "manage_seo",
    "manage_users",
  ];

  const dbPermissions = await Promise.all(
    permissionsList.map(async (action) => {
      return prisma.permission.upsert({
        where: { action },
        update: {},
        create: { action },
      });
    })
  );

  const superAdminRole = await prisma.role.upsert({
    where: { name: "Super Admin" },
    update: {},
    create: { name: "Super Admin" },
  });

  const adminRole = await prisma.role.upsert({
    where: { name: "Admin" },
    update: {},
    create: { name: "Admin" },
  });

  const editorRole = await prisma.role.upsert({
    where: { name: "Editor" },
    update: {},
    create: { name: "Editor" },
  });

  // Assign all permissions to Super Admin & Admin, some to Editor
  for (const perm of dbPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: superAdminRole.id,
          permissionId: perm.id,
        },
      },
      update: {},
      create: {
        roleId: superAdminRole.id,
        permissionId: perm.id,
      },
    });

    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: adminRole.id,
          permissionId: perm.id,
        },
      },
      update: {},
      create: {
        roleId: adminRole.id,
        permissionId: perm.id,
      },
    });

    // Editor has limited permissions
    if (["manage_blogs", "manage_portfolio", "manage_testimonials"].includes(perm.action)) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: editorRole.id,
            permissionId: perm.id,
          },
        },
        update: {},
        create: {
          roleId: editorRole.id,
          permissionId: perm.id,
        },
      });
    }
  }

  // 2. Default Users
  // Super Admin: admin@xpertbite.in / Admin@12345 (or from env)
  const adminEmail = process.env.ADMIN_EMAIL || "anilarangi6@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "123456";

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(adminPassword, salt);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      password: hashedPassword,
      roleId: superAdminRole.id,
    },
    create: {
      name: "Super Admin",
      email: adminEmail,
      password: hashedPassword,
      roleId: superAdminRole.id,
    },
  });

  // Delete all other user accounts so that only the configured email can log in
  await prisma.user.deleteMany({
    where: {
      email: {
        not: adminEmail,
      },
    },
  });


  // 3. Categories
  const categoryNames = ["FinTech", "Healthcare", "E-Commerce", "Education", "Logistics", "SaaS", "Development", "Design", "Infrastructure", "AI & Data"];
  const dbCategories = await Promise.all(
    categoryNames.map(async (name) => {
      const slug = name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
      return prisma.category.upsert({
        where: { name },
        update: {},
        create: { name, slug },
      });
    })
  );

  // 4. Technologies
  const techData = [
    { name: "React", category: "Frontend", proficiency: 98 },
    { name: "Next.js", category: "Frontend", proficiency: 97 },
    { name: "TypeScript", category: "Frontend", proficiency: 96 },
    { name: "Node.js", category: "Backend", proficiency: 97 },
    { name: "Python", category: "Backend", proficiency: 94 },
    { name: "PostgreSQL", category: "Database", proficiency: 96 },
    { name: "MySQL", category: "Database", proficiency: 94 },
    { name: "AWS", category: "Cloud", proficiency: 95 },
  ];

  await Promise.all(
    techData.map(async (tech) => {
      return prisma.technology.upsert({
        where: { name: tech.name },
        update: { proficiency: tech.proficiency },
        create: {
          name: tech.name,
          category: tech.category,
          proficiency: tech.proficiency,
          description: `${tech.name} framework integration.`,
        },
      });
    })
  );

  // 5. Testimonials
  const testimonials = [
    { name: "Sarah Mitchell", role: "CTO", company: "FinVault Inc.", content: "XpertBite transformed our fintech vision into reality.", rating: 5 },
    { name: "James Rodriguez", role: "CEO", company: "ShopNest Global", content: "Working with XpertBite was a game-changer for our business.", rating: 5 },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: t,
    });
  }

  // 6. FAQs
  const faqs = [
    { question: "What services does XpertBite Technologies offer?", answer: "We offer custom web development, mobile app design, SaaS construction, AI integration, and cloud migrations.", category: "General" },
    { question: "How long does a typical project take?", answer: "Usually between 4 weeks to 6 months depending on requirements complexity.", category: "Project" },
  ];

  for (const f of faqs) {
    await prisma.fAQ.create({
      data: f,
    });
  }

  console.log("Seeding complete successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
