/*
  Warnings:

  - A unique constraint covering the columns `[employeeId]` on the table `Employee_JobTitle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobTitleId]` on the table `Employee_JobTitle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Employee_JobTitle_employeeId_key" ON "Employee_JobTitle"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_JobTitle_jobTitleId_key" ON "Employee_JobTitle"("jobTitleId");
