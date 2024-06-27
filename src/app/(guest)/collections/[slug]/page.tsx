import CollectionsPage from "~/collections/collections";
import { sendRequest } from "~/utils/api";

const CollectionsAll = async ({ params }: { params: { slug: string } }) => {
  if (params.slug === "all" || params.slug === "tat-ca-san-pham-huy-thanh") {
    const res = await sendRequest<IBackendRes<IResPaginate<IProduct>>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product`,
      method: "GET",
      queryParams: {
        currentPage: 1,
        pageSize: 100,
        populate: "featured_image,image",
        fields: "featured_image.src,image.src",
      },
    });
    const productItem = res?.data?.result ?? [];
    return (
      <>
        <CollectionsPage productItem={productItem} />
      </>
    );
  }

  const res = await sendRequest<IBackendRes<IResPaginate<IProduct>>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/collection/name`,
    method: "POST",
    queryParams: {
      name: params.slug,
      populate: "product",
    },
    nextOption: { cache: "no-store" },
  });

  if (res && res.data) {
    //@ts-ignore
    const fetchCollection = res?.data[0]?.product;
    return (
      <>
        <CollectionsPage productItem={fetchCollection} />
      </>
    );
  }
};
export default CollectionsAll;
