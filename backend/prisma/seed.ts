import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  // ============================================
  // 1. CREATE ADMIN USER
  // ============================================
  console.log('Creating admin user...');
  
  const adminPassword = await bcrypt.hash('admin123', 12);
  
  const admin = await prisma.user.upsert({
    where: { email: 'gloriouslabs.connect@gmail.com' },
    update: {},
    create: {
      email: 'gloriouslabs.connect@gmail.com',
      name: 'Admin User',
      passwordHash: adminPassword,
      role: 'ADMIN',
      emailVerified: true,
      verifiedAt: new Date(),
    },
  });
  
  console.log('✅ Admin created:', admin.email);

  // ============================================
  // 2. CREATE SAMPLE STUDENTS (for testing)
  // ============================================
  console.log('Creating sample students...');
  
  const studentPassword = await bcrypt.hash('student123', 12);
  
  const students = await Promise.all([
    prisma.user.upsert({
      where: { email: 'student1@test.com' },
      update: {},
      create: {
        email: 'student1@test.com',
        name: 'Rahul Sharma',
        college: 'IIT Delhi',
        semester: 6,
        branch: 'Computer Science',
        githubUrl: 'https://github.com/rahul',
        passwordHash: studentPassword,
        emailVerified: true,
      },
    }),
    prisma.user.upsert({
      where: { email: 'student2@test.com' },
      update: {},
      create: {
        email: 'student2@test.com',
        name: 'Priya Patel',
        college: 'NIT Trichy',
        semester: 4,
        branch: 'Information Technology',
        passwordHash: studentPassword,
        emailVerified: true,
      },
    }),
  ]);
  
  console.log(`✅ Created ${students.length} sample students`);

  // ============================================
  // 3. CREATE INTERNSHIPS (Your Initial Catalog)
  // ============================================
  console.log('Creating internship catalog...');

  const internships: Array<{
    title: string;
    slug: string;
    domain: string;
    shortDesc: string;
    description: string;
    learningOutcomes: string[];
    techStack: string[];
    prerequisites: string[];
    projectOverview: string;
    whatYouWillBuild: string;
    difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
    duration: number;
    estimatedHours: number;
    price: number;
    tier: 'BASIC' | 'PRO' | 'PREMIUM';
    isActive: boolean;
    isFeatured: boolean;
  }> = [
    {
      title: 'Full-Stack Web Development with MERN',
      slug: 'mern-fullstack-internship',
      domain: 'Web Development',
      shortDesc: 'Build production-ready web applications using MongoDB, Express, React, and Node.js',
      description: `Master the complete MERN stack and build real-world web applications from scratch. 
      
This internship will take you through building a complete project including authentication, database design, RESTful APIs, and modern React frontend. You'll learn industry-standard practices for code organization, error handling, security, and deployment.

By the end, you'll have a portfolio-worthy project deployed to the cloud and a deep understanding of full-stack development.`,
      learningOutcomes: [
        'Build RESTful APIs with Node.js and Express',
        'Design MongoDB schemas and handle data relationships',
        'Create responsive UIs with React and modern hooks',
        'Implement secure JWT-based authentication',
        'Deploy full-stack apps to cloud platforms',
        'Follow industry-standard code organization and best practices',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      prerequisites: ['JavaScript fundamentals', 'Basic HTML/CSS', 'Git basics'],
      projectOverview: 'You will build a complete Task Management System with user authentication, real-time updates, file uploads, and role-based access control.',
      whatYouWillBuild: 'A production-ready task management application similar to Trello/Asana with dashboard, team collaboration features, and cloud deployment.',
      difficulty: 'INTERMEDIATE',
      duration: 30,
      estimatedHours: 60,
      price: 99,
      tier: 'BASIC',
      isActive: true,
      isFeatured: true,
    },
    {
      title: 'Machine Learning with Python - Beginner to Intermediate',
      slug: 'machine-learning-python',
      domain: 'Machine Learning',
      shortDesc: 'Learn ML fundamentals and build predictive models using scikit-learn and TensorFlow',
      description: `Start your machine learning journey with hands-on projects covering supervised learning, unsupervised learning, and neural networks.
      
This internship focuses on practical implementation rather than heavy theory. You'll work with real datasets, build models, evaluate performance, and deploy ML applications.

Perfect for students who want to transition from data science theory to practical ML engineering.`,
      learningOutcomes: [
        'Understand ML algorithms (Linear Regression, Decision Trees, Neural Networks)',
        'Preprocess and clean real-world datasets',
        'Build and train models using scikit-learn and TensorFlow',
        'Evaluate model performance and tune hyperparameters',
        'Deploy ML models as REST APIs',
        'Create data visualizations and insights',
      ],
      techStack: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'TensorFlow', 'Matplotlib'],
      prerequisites: ['Python basics', 'High school mathematics', 'Basic statistics'],
      projectOverview: 'Build an end-to-end ML pipeline for house price prediction with data preprocessing, model training, evaluation, and API deployment.',
      whatYouWillBuild: 'A complete ML project including exploratory data analysis, multiple model comparisons, and a Flask API to serve predictions.',
      difficulty: 'BEGINNER',
      duration: 21,
      estimatedHours: 40,
      price: 99,
      tier: 'BASIC',
      isActive: true,
      isFeatured: true,
    },
    {
      title: 'React Native Mobile App Development',
      slug: 'react-native-mobile-app',
      domain: 'Mobile Development',
      shortDesc: 'Build cross-platform mobile apps for iOS and Android using React Native',
      description: `Learn to build beautiful, performant mobile applications that work on both iOS and Android using a single codebase.
      
This internship covers everything from UI components and navigation to API integration, local storage, and app deployment to app stores.

You'll follow modern React Native practices including hooks, context API, and popular libraries like React Navigation and Expo.`,
      learningOutcomes: [
        'Build mobile UIs with React Native components',
        'Handle navigation and routing in mobile apps',
        'Integrate with REST APIs and handle async data',
        'Use device features (camera, location, notifications)',
        'Implement local storage and state management',
        'Deploy apps to Google Play and Apple App Store',
      ],
      techStack: ['React Native', 'Expo', 'React Navigation', 'AsyncStorage', 'Firebase'],
      prerequisites: ['JavaScript fundamentals', 'React basics (helpful)', 'Basic mobile UI concepts'],
      projectOverview: 'Create a full-featured e-commerce mobile app with product catalog, cart, checkout, and user authentication.',
      whatYouWillBuild: 'A production-ready shopping app with smooth animations, offline support, and backend integration.',
      difficulty: 'INTERMEDIATE',
      duration: 25,
      estimatedHours: 50,
      price: 119,
      tier: 'BASIC',
      isActive: true,
      isFeatured: false,
    },
    {
      title: 'Generative AI & LangChain Applications',
      slug: 'generative-ai-langchain',
      domain: 'Artificial Intelligence',
      shortDesc: 'Build intelligent AI applications using LangChain, OpenAI GPT, and vector databases',
      description: `Dive into the world of Generative AI and learn to build production-grade AI applications using LangChain framework.
      
You'll work with Large Language Models (LLMs), create AI chatbots, build RAG (Retrieval Augmented Generation) systems, and integrate vector databases for semantic search.

This internship is perfect for those who want to be at the forefront of AI application development.`,
      learningOutcomes: [
        'Understand LLM fundamentals and prompt engineering',
        'Build AI chatbots with conversation memory',
        'Implement RAG systems with vector databases',
        'Chain multiple AI models for complex tasks',
        'Handle embeddings and semantic search',
        'Deploy AI applications to production',
      ],
      techStack: ['Python', 'LangChain', 'OpenAI API', 'Pinecone/ChromaDB', 'FastAPI', 'Streamlit'],
      prerequisites: ['Python programming', 'Basic API knowledge', 'Understanding of NLP concepts (helpful)'],
      projectOverview: 'Build an intelligent document Q&A system that can answer questions from uploaded PDFs using RAG architecture.',
      whatYouWillBuild: 'A complete AI-powered knowledge base system with document parsing, embeddings, vector search, and conversational interface.',
      difficulty: 'ADVANCED',
      duration: 30,
      estimatedHours: 70,
      price: 149,
      tier: 'PRO',
      isActive: true,
      isFeatured: true,
    },
    {
      title: 'DevOps Pipeline & Cloud Deployment',
      slug: 'devops-cloud-deployment',
      domain: 'DevOps',
      shortDesc: 'Master CI/CD, Docker, Kubernetes, and cloud deployment on AWS/Azure',
      description: `Learn the complete DevOps lifecycle - from version control to automated deployments and monitoring.
      
This internship covers containerization with Docker, orchestration with Kubernetes, CI/CD pipelines with GitHub Actions, and cloud deployment strategies.

You'll gain hands-on experience with industry-standard tools and practices used by top tech companies.`,
      learningOutcomes: [
        'Containerize applications with Docker',
        'Set up CI/CD pipelines with GitHub Actions',
        'Deploy and manage apps with Kubernetes',
        'Configure cloud infrastructure on AWS/Azure',
        'Implement monitoring and logging',
        'Follow infrastructure-as-code practices',
      ],
      techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS/Azure', 'Terraform', 'Prometheus'],
      prerequisites: ['Linux basics', 'Git fundamentals', 'Basic networking knowledge'],
      projectOverview: 'Build a complete CI/CD pipeline that automatically tests, builds, and deploys a microservices application to Kubernetes.',
      whatYouWillBuild: 'An automated deployment pipeline with containerized microservices, load balancing, auto-scaling, and monitoring dashboards.',
      difficulty: 'INTERMEDIATE',
      duration: 28,
      estimatedHours: 55,
      price: 119,
      tier: 'BASIC',
      isActive: true,
      isFeatured: false,
    },
  ];

  for (const internshipData of internships) {
    await prisma.internship.upsert({
      where: { slug: internshipData.slug },
      update: {},
      create: internshipData,
    });
  }

  console.log(`✅ Created ${internships.length} internships`);

  // ============================================
  // 4. CREATE SAMPLE ENROLLMENT (for testing)
  // ============================================
  console.log('Creating sample enrollment...');

  const mernInternship = await prisma.internship.findUnique({
    where: { slug: 'mern-fullstack-internship' },
  });

  if (mernInternship && students[0]) {
    await prisma.enrollment.upsert({
      where: {
        userId_internshipId: {
          userId: students[0].id,
          internshipId: mernInternship.id,
        },
      },
      update: {},
      create: {
        userId: students[0].id,
        internshipId: mernInternship.id,
        amount: mernInternship.price,
        paymentStatus: 'SUCCESS',
        status: 'ACTIVE',
        paidAt: new Date(),
        startedAt: new Date(),
        expectedEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
    });

    console.log('✅ Created sample enrollment');
  }

  console.log('\n🎉 Database seeding completed successfully!\n');
  console.log('📊 Summary:');
  console.log('  - 1 Admin user');
  console.log('  - 2 Sample students');
  console.log('  - 5 Internships');
  console.log('  - 1 Sample enrollment');
  console.log('\n🔑 Login credentials:');
  console.log('  Admin: gloriouslabs.connect@gmail.com / admin123');
  console.log('  Student: student1@test.com / student123');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
