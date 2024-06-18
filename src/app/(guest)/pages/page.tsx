import AboutUs from "~/about-us/about.us";
import { sendRequest } from "~/utils/api";

const AboutUsPage = async () => {
  const res = await sendRequest<IBackendRes<IAboutUs>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/intro`,
    method: "GET",
  });
  const info = res?.data ?? [];

  return <AboutUs info={info} />;
};
export default AboutUsPage;
