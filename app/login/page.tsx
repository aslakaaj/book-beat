import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login() {
  return (
    <form
      action={async () => {
        "use server";

        const supabase = createClient();
        const { error, data } = await supabase.auth.signInWithOAuth({
          provider: "google",
        });

        if (error) {
          console.log(error);
        }else {
          return redirect(data.url);
        }
      }}
    >
      <button type="submit">Sign In With Google</button>
    </form>
  );
}
