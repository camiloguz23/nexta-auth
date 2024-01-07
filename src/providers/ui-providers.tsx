"use client";
import { SessionProvider } from "next-auth/react";

interface Prop {
  children: React.ReactNode;
}

function UiProviders({ children }: Prop) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

export default UiProviders;
