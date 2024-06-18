import AppFooter from "~/footer/app.footer";
import DeliveryFooter from "~/footer/delivery.footer";
import AppHeader from "~/header/app.header";
import HomePage from "~/home-page/home.page";

export default function Home() {
  return (
    <>
      <AppHeader />
      <HomePage />
      <AppFooter />
    </>
  );
}
