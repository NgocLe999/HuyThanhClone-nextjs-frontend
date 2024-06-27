import { Container } from "@mui/material";
import ProgressBarWrapper from "../components/lib/progress.bar";
import ThemeRegistry from "../components/theme-registry/theme.registry";
import "./styles/global.scss";
import { Metadata } from "next";
import ThemeProvider from "./theme-provider";
import PopupPreviewViewProduct from "~/popup-preview/popup.preview";
import { Suspense } from "react";
import Loading from "./(guest)/loading";

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
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <ThemeRegistry>
            <ProgressBarWrapper>
              <ThemeProvider>
                {children}
                {/* 
            <NextAuthSession>
              <TrackContextProvider>
                <ToastProvider>{children}</ToastProvider>
              </TrackContextProvider>s
            </NextAuthSession>
           */}{" "}
                <PopupPreviewViewProduct />
              </ThemeProvider>
            </ProgressBarWrapper>
          </ThemeRegistry>
        </Suspense>
      </body>
    </html>
  );
}
//Supported Pattern: Passing Server Components to Client Components as Props
