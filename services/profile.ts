import { supabase } from "@/lib/supabase";

export async function createProfile(
  userId: string,
  email: string
) {
  const { data, error } =
    await supabase
      .from("profiles")
      .insert([
        {
          id: userId,
          email: email,
        },
      ]);

  return { data, error };
}

export async function getProfile(
  userId: string
) {
  const { data, error } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

  return { data, error };
}

export async function updateProfile(
  userId: string,
  updates: {
    full_name?: string;
    phone?: string;
    university?: string;
    degree?: string;
    graduation_year?: number;
    preferred_role?: string;
    preferred_location?: string;
  }
) {
  const { data, error } =
    await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId);

  return { data, error };
}