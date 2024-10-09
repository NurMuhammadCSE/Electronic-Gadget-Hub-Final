/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

export function Providers({ children, session }: { children: React.ReactNode; session: any }) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Toaster />
          <Provider store={store}>
            {children}
          </Provider>
        </NextThemesProvider>
      </SessionProvider>
    </NextUIProvider>
  );
}
