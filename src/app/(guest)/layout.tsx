import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import TemporaryCartDrawer from "~/cart-drawer/cart.drawer";
import AppFooter from "~/footer/app.footer";
import DeliveryFooter from "~/footer/delivery.footer";
import AppHeader from "~/header/app.header";
import PopupPreviewViewProduct from "~/popup-preview/popup.preview";

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
      <PopupPreviewViewProduct />
      <TemporaryCartDrawer />
      <AppFooter />
    </>
  );
}
