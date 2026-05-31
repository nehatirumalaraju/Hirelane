import { supabase } from "@/lib/supabase";

export async function createInterview(
  interview: {
    application_id: string;
    round_name: string;
    interview_date?: string;
    preparation_notes?: string;
    questions_asked?: string;
    feedback?: string;
    outcome?: string;
  }
) {
  const { data, error } =
    await supabase
      .from("interviews")
      .insert([interview]);

  return { data, error };
}

export async function getInterviews(
  applicationId: string
) {
  const { data, error } =
    await supabase
      .from("interviews")
      .select("*")
      .eq("application_id", applicationId);

  return { data, error };
}

export async function updateInterview(
  interviewId: string,
  updates: {
    round_name?: string;
    interview_date?: string;
    preparation_notes?: string;
    questions_asked?: string;
    feedback?: string;
    outcome?: string;
  }
) {
  const { data, error } =
    await supabase
      .from("interviews")
      .update(updates)
      .eq("id", interviewId);

  return { data, error };
}

export async function deleteInterview(
  interviewId: string
) {
  const { data, error } =
    await supabase
      .from("interviews")
      .delete()
      .eq("id", interviewId);

  return { data, error };
}