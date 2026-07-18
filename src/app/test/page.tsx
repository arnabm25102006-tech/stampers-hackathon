import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("users")
    .select("*");

  return (
    <pre style={{ color: "white" }}>
      {JSON.stringify({ data, error }, null, 2)}
    </pre>
  );
}