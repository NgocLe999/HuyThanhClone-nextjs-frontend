
import ProgressBarWrapper from "../components/lib/progress.bar";
import ThemeRegistry from "../components/theme-registry/theme.registry";
import "./styles/global.scss";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./(guest)/loading";
import StoreProvider from "./storeProvider";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Huy Thanh Jewerly | Trang Chủ",
  description: "Huy Thanh Jewerly",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Suspense fallback={<Loading />}>
            <ThemeRegistry>
              <ProgressBarWrapper>
                {children}
                {/* 
            <NextAuthSession>
              <TrackContextProvider>
                // <ToastProvider>{children}</ToastProvider>
              </TrackContextProvider>s
            </NextAuthSession>
           */}
              </ProgressBarWrapper>
            </ThemeRegistry>
          </Suspense>
        </body>
      </html>
    </StoreProvider>
  );
}
//Supported Pattern: Passing Server Components to Client Components as Props
