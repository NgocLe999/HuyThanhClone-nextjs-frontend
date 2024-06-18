import { Container } from "@mui/material";
import ProgressBarWrapper from "../components/lib/progress.bar";
import ThemeRegistry from "../components/theme-registry/theme.registry";
import "./styles/global.scss";
import { Metadata } from "next";
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
        <ThemeRegistry>
          <ProgressBarWrapper>
            {children}
            {/* 
            <NextAuthSession>
              <TrackContextProvider>
                <ToastProvider>{children}</ToastProvider>
              </TrackContextProvider>s
            </NextAuthSession>
           */}
          </ProgressBarWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
//Supported Pattern: Passing Server Components to Client Components as Props
