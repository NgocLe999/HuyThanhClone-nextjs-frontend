import CollectionsPage from "~/collections/collections";
import { sendRequest } from "~/utils/api";

const CollectionsAll = async ({ params }: { params: { slug: string } }) => {
  console.log("check slug", params.slug);
  if (params.slug === "all") {
    const res = await sendRequest<IBackendRes<IProduct>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product`,
      method: "GET",
      queryParams: {
        currentPage: 1,
        pageSize: 100,
        populate: "featured_image,image",
        fields: "featured_image.src,image.src",
      },
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_FAKE}`,
      },
    });
    //@ts-ignore
    const productItem = res?.data?.result ?? [];
    // console.log("check res", res.data ?? []);
 

    return (
      <>
        <CollectionsPage productItem={productItem} />
      </>
    );
  }
};
export default CollectionsAll;
