import { supabase } from "@/lib/supabase";
import { RegisterFormData } from "@/types/register";

export async function registerTeam(form: RegisterFormData) {
  console.log("STEP 1 - Users");

  // =========================
  // USERS
  // =========================
  const { data: user, error: userError } = await supabase
    .from("users")
    .insert({
      full_name: form.leaderName,
      email: form.email,
      phone: form.phone,
      college: form.college,
      department: form.department,
      year: form.year,
      github: form.github,
    })
    .select()
    .single();

  console.log("USER:", user);
  console.log("USER ERROR:", userError);

  if (userError) throw userError;

  console.log("STEP 2 - Teams");

  // =========================
  // TEAMS
  // =========================
  const { data: team, error: teamError } = await supabase
    .from("teams")
    .insert({
      team_name: form.teamName,
      leader_id: user.id,
      team_size: Number(form.teamSize),
      status: "Pending",
    })
    .select()
    .single();

  console.log("TEAM:", team);
  console.log("TEAM ERROR:", teamError);

  if (teamError) throw teamError;

  console.log("STEP 3 - Registrations");

  // =========================
  // GENERATE REGISTRATION ID
  // Example: STP-2026-384521
  // =========================
  const registrationNumber =
    "STP-" +
    new Date().getFullYear() +
    "-" +
    Date.now().toString().slice(-6);

  // =========================
  // REGISTRATIONS
  // =========================
  const { data: registration, error: registrationError } =
    await supabase
      .from("registrations")
      .insert({
        registration_id: registrationNumber,
        team_id: team.id,
        hackathon_id: "578ec523-bbda-4720-9193-d77bc1dab088",
        registration_status: "Pending",
        payment_status: "Pending",
      })
      .select()
      .single();

  console.log("REGISTRATION:", registration);
  console.log("REGISTRATION ERROR:", registrationError);

  if (registrationError) throw registrationError;

  console.log("STEP 4 - Project");

  // =========================
  // PROJECT SUBMISSION
  // =========================
  const { error: projectError } = await supabase
    .from("project_submissions")
    .insert({
      registration_id: registration.id,
      project_name: form.projectName,
      problem_statement: form.problemStatement,
      solution: form.solution,
      innovation_domain: form.domain,
      technology_stack: form.techStack,
      github_link: form.github,
    });

  console.log("PROJECT ERROR:", projectError);

  if (projectError) throw projectError;

  // =========================
  // SEND CONFIRMATION EMAIL
  // =========================
  try {
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        leaderName: form.leaderName,
        teamName: form.teamName,
        registrationId: registrationNumber,
      }),
    });
  } catch (err) {
    console.error("Email sending failed:", err);
  }

  return {
    success: true,
    registrationId: registrationNumber,
  };
}