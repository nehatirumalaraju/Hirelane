import { supabase } from "@/lib/supabase";

export async function getApplicationStats(
  userId: string
) {
  const { data, error } =
    await supabase
      .from("applications")
      .select("status")
      .eq("user_id", userId);

  if (error) {
    return { data: null, error };
  }

  const stats = {
    totalApplications: data.length,

    applied: data.filter(
      app => app.status === "Applied"
    ).length,

    interviewing: data.filter(
      app => app.status === "Interviewing"
    ).length,

    offered: data.filter(
      app => app.status === "Offered"
    ).length,

    rejected: data.filter(
      app => app.status === "Rejected"
    ).length,
  };

  return { data: stats, error: null };
}

export async function getUpcomingInterviews(
  applicationId: string
) {
  return await supabase
    .from("interviews")
    .select("*")
    .eq("application_id", applicationId)
    .gte(
      "interview_date",
      new Date().toISOString()
    )
    .order("interview_date");
}

export async function getUpcomingDeadlines(
  userId: string
) {
  return await supabase
    .from("applications")
    .select("*")
    .eq("user_id", userId)
    .gte(
      "deadline",
      new Date().toISOString().split("T")[0]
    )
    .order("deadline");
}