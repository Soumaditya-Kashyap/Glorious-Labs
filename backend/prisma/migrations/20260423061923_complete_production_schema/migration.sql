/*
  Warnings:

  - The values [CANCELLED] on the enum `EnrollmentStatus` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[razorpayPaymentId]` on the table `enrollments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectOverview` to the `internships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDesc` to the `internships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatYouWillBuild` to the `internships` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PriceTier" AS ENUM ('BASIC', 'PRO', 'PREMIUM');

-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('GOOD', 'EXCELLENT', 'OUTSTANDING');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'APPROVED', 'REJECTED', 'NEEDS_REVISION');

-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('SENT', 'DELIVERED', 'OPENED', 'CLICKED', 'FAILED', 'BOUNCED');

-- AlterEnum
BEGIN;
CREATE TYPE "EnrollmentStatus_new" AS ENUM ('DRAFT', 'ACTIVE', 'SUBMITTED', 'UNDER_REVIEW', 'COMPLETED', 'REJECTED', 'EXPIRED');
ALTER TABLE "public"."enrollments" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "enrollments" ALTER COLUMN "status" TYPE "EnrollmentStatus_new" USING ("status"::text::"EnrollmentStatus_new");
ALTER TYPE "EnrollmentStatus" RENAME TO "EnrollmentStatus_old";
ALTER TYPE "EnrollmentStatus_new" RENAME TO "EnrollmentStatus";
DROP TYPE "public"."EnrollmentStatus_old";
ALTER TABLE "enrollments" ALTER COLUMN "status" SET DEFAULT 'DRAFT';
COMMIT;

-- AlterTable
ALTER TABLE "enrollments" ADD COLUMN     "expectedEndDate" TIMESTAMP(3),
ADD COLUMN     "performanceGrade" "Grade",
ADD COLUMN     "razorpayPaymentId" TEXT,
ADD COLUMN     "studentFeedback" TEXT,
ADD COLUMN     "studentRating" INTEGER,
ADD COLUMN     "submittedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "internships" ADD COLUMN     "avgRating" DOUBLE PRECISION,
ADD COLUMN     "estimatedHours" INTEGER,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "learningOutcomes" TEXT[],
ADD COLUMN     "maxEnrollments" INTEGER,
ADD COLUMN     "prerequisites" TEXT[],
ADD COLUMN     "projectGuideUrl" TEXT,
ADD COLUMN     "projectOverview" TEXT NOT NULL,
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "shortDesc" TEXT NOT NULL,
ADD COLUMN     "starterCodeUrl" TEXT,
ADD COLUMN     "techStack" TEXT[],
ADD COLUMN     "thumbnailUrl" TEXT,
ADD COLUMN     "tier" "PriceTier" NOT NULL DEFAULT 'BASIC',
ADD COLUMN     "totalCompleted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalEnrolled" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "whatYouWillBuild" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "branch" TEXT,
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "lastLoginAt" TIMESTAMP(3),
ADD COLUMN     "linkedinUrl" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "semester" INTEGER,
ADD COLUMN     "verifiedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "submissions" (
    "id" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "githubRepoUrl" TEXT NOT NULL,
    "liveUrl" TEXT,
    "videoUrl" TEXT,
    "comments" TEXT,
    "reviewStatus" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "feedback" TEXT,
    "grade" "Grade",
    "codeQualityScore" INTEGER,
    "hasReadme" BOOLEAN,
    "hasTests" BOOLEAN,
    "isDeployed" BOOLEAN,
    "version" INTEGER NOT NULL DEFAULT 1,
    "isLatest" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_logs" (
    "id" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "cc" TEXT,
    "bcc" TEXT,
    "subject" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'resend',
    "status" "EmailStatus" NOT NULL DEFAULT 'SENT',
    "errorMsg" TEXT,
    "metadata" JSONB,
    "openedAt" TIMESTAMP(3),
    "clickedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "metadata" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "submissions_enrollmentId_idx" ON "submissions"("enrollmentId");

-- CreateIndex
CREATE INDEX "submissions_userId_idx" ON "submissions"("userId");

-- CreateIndex
CREATE INDEX "submissions_reviewStatus_idx" ON "submissions"("reviewStatus");

-- CreateIndex
CREATE INDEX "submissions_createdAt_idx" ON "submissions"("createdAt");

-- CreateIndex
CREATE INDEX "email_logs_to_idx" ON "email_logs"("to");

-- CreateIndex
CREATE INDEX "email_logs_template_idx" ON "email_logs"("template");

-- CreateIndex
CREATE INDEX "email_logs_status_idx" ON "email_logs"("status");

-- CreateIndex
CREATE INDEX "email_logs_createdAt_idx" ON "email_logs"("createdAt");

-- CreateIndex
CREATE INDEX "activity_logs_userId_idx" ON "activity_logs"("userId");

-- CreateIndex
CREATE INDEX "activity_logs_action_idx" ON "activity_logs"("action");

-- CreateIndex
CREATE INDEX "activity_logs_entity_idx" ON "activity_logs"("entity");

-- CreateIndex
CREATE INDEX "activity_logs_createdAt_idx" ON "activity_logs"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_razorpayPaymentId_key" ON "enrollments"("razorpayPaymentId");

-- CreateIndex
CREATE INDEX "enrollments_createdAt_idx" ON "enrollments"("createdAt");

-- CreateIndex
CREATE INDEX "internships_slug_idx" ON "internships"("slug");

-- CreateIndex
CREATE INDEX "internships_domain_idx" ON "internships"("domain");

-- CreateIndex
CREATE INDEX "internships_isActive_idx" ON "internships"("isActive");

-- CreateIndex
CREATE INDEX "internships_isFeatured_idx" ON "internships"("isFeatured");

-- CreateIndex
CREATE INDEX "internships_difficulty_idx" ON "internships"("difficulty");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "enrollments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
