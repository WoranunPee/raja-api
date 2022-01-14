-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "salary" DOUBLE PRECISION,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTitle" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "JobTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee_JobTitle" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER,
    "jobTitleId" INTEGER,

    CONSTRAINT "Employee_JobTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Residents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Residents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlotofLand" (
    "id" SERIAL NOT NULL,
    "commonFee" DOUBLE PRECISION NOT NULL,
    "landNumber" TEXT NOT NULL,
    "size" TEXT,
    "type" TEXT,

    CONSTRAINT "PlotofLand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Residents_PlotofLand" (
    "id" SERIAL NOT NULL,
    "residentsId" INTEGER,
    "plotofLandId" INTEGER,

    CONSTRAINT "Residents_PlotofLand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "Employee_JobTitle" ADD CONSTRAINT "Employee_JobTitle_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee_JobTitle" ADD CONSTRAINT "Employee_JobTitle_jobTitleId_fkey" FOREIGN KEY ("jobTitleId") REFERENCES "JobTitle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Residents_PlotofLand" ADD CONSTRAINT "Residents_PlotofLand_residentsId_fkey" FOREIGN KEY ("residentsId") REFERENCES "Residents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Residents_PlotofLand" ADD CONSTRAINT "Residents_PlotofLand_plotofLandId_fkey" FOREIGN KEY ("plotofLandId") REFERENCES "PlotofLand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
