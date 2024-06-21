import { Metadata } from "next";
import AppFooter from "~/footer/app.footer";
import DeliveryFooter from "~/footer/delivery.footer";
import AppHeader from "~/header/app.header";

export const metadata: Metadata = {
  title: "Huy Thanh Jewerly",
  description: "Huy Thanh Jewerly",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
