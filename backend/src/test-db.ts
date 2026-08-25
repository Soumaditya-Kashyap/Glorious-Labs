import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function testDatabase() {
  console.log('🧪 Testing database connection...\n');

  try {
    // Test 1: Count users
    const userCount = await prisma.user.count();
    console.log(`✅ Users in database: ${userCount}`);

    // Test 2: Get all internships
    const internships = await prisma.internship.findMany({
      select: { title: true, price: true, difficulty: true, domain: true }
    });
    console.log(`\n✅ Internships (${internships.length}):`);
    internships.forEach(i => {
      console.log(`   - ${i.title}`);
      console.log(`     Domain: ${i.domain} | Price: ₹${i.price} | Difficulty: ${i.difficulty}`);
    });

    // Test 3: Get enrollments with relations
    const enrollments = await prisma.enrollment.findMany({
      include: {
        user: { select: { name: true, email: true } },
        internship: { select: { title: true } }
      }
    });
    console.log(`\n✅ Enrollments (${enrollments.length}):`);
    enrollments.forEach(e => {
      console.log(`   - ${e.user.name} (${e.user.email})`);
      console.log(`     Enrolled in: ${e.internship.title}`);
      console.log(`     Status: ${e.status} | Payment: ${e.paymentStatus}`);
    });

    // Test 4: Check all tables exist
    const tables = await prisma.$queryRaw<Array<{ table_name: string }>>`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `;
    
    console.log(`\n✅ Database Tables (${tables.length}):`);
    tables.forEach(t => {
      console.log(`   - ${t.table_name}`);
    });

    // Test 5: Get admin user
    const admin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });
    console.log(`\n✅ Admin User:`);
    console.log(`   Email: ${admin?.email}`);
    console.log(`   Name: ${admin?.name}`);

    console.log('\n🎉 All database tests passed!');
    console.log('\n📝 Database is ready for development!');
  } catch (error) {
    console.error('❌ Database test failed:', error);
    throw error;
  }
}

testDatabase()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
