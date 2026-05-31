import { supabase } from "@/lib/supabase";

export async function createApplication(application: {
  user_id: string;
  company: string;
  role: string;
  location?: string;
  status?: string;
  applied_date?: string;
  deadline?: string;
  job_link?: string;
  notes?: string;
}) {
  const { data, error } =
    await supabase
      .from("applications")
      .insert([application]);

  return { data, error };
}

export async function getApplications(
  userId: string
) {
  const { data, error } =
    await supabase
      .from("applications")
      .select("*")
      .eq("user_id", userId);

  return { data, error };
}

export async function updateApplication(
  applicationId: string,
  updates: {
    company?: string;
    role?: string;
    location?: string;
    status?: string;
    deadline?: string;
    notes?: string;
  }
) {
  const { data, error } =
    await supabase
      .from("applications")
      .update(updates)
      .eq("id", applicationId);

  return { data, error };
}

export async function deleteApplication(
  applicationId: string
) {
  const { data, error } =
    await supabase
      .from("applications")
      .delete()
      .eq("id", applicationId);

  return { data, error };
}