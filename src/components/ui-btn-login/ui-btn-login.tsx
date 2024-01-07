"use client";

import { signIn, useSession, signOut } from "next-auth/react";

function UiBtnLogin() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <button
      onClick={() =>
        session ? signOut() : signIn("google", { callbackUrl: "/" })
      }
    >
      {session ? "LogOut" : "Login"}
    </button>
  );
}

export default UiBtnLogin;
