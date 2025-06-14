import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddPatientButton from "./_components/add-patient-button";

const PatientsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  const patients = await db.query.patientsTable.findMany({
    where: eq(patientsTable.clinicId, session.user.clinic.id),
  });
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pacientes</PageTitle>
          <PageDescription>
            Gerencie os pacientes da sua clínica
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddPatientButton />
        </PageActions>
      </PageHeader>
      <PageContent>
        <div className="grid grid-cols-3 gap-6">
          {patients.map((patient) => (
            <div key={patient.id} className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">{patient.name}</h3>
              <p className="text-sm text-muted-foreground">{patient.email}</p>
              <p className="text-sm text-muted-foreground">
                {patient.phoneNumber}
              </p>
              <p className="text-sm text-muted-foreground">
                {patient.sex === "male" ? "Masculino" : "Feminino"}
              </p>
            </div>
          ))}
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default PatientsPage;
