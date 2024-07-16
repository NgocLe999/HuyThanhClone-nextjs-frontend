import { AnyAaaaRecord } from "dns";
import CollectionsPage from "~/collections/collections";
import { sendRequest } from "~/utils/api";

const CollectionsAll = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (params.slug === "all" || params.slug === "tat-ca-san-pham-huy-thanh") {
    const priceFilter = Number(searchParams?.price);
    console.log("check priceFilter", priceFilter);
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

    if (priceFilter && priceFilter !== 0) {
      const productItem = filterPrice(res?.data?.result, priceFilter);
      if (productItem) {
        return (
          <>
            <CollectionsPage productItem={productItem} />
          </>
        );
      }
    }
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
    // console.log("check data",res?.data[0]?.product);
    //@ts-ignore
    const fetchCollection = res?.data[0]?.product;
    return (
      <>
        <CollectionsPage productItem={fetchCollection} />
      </>
    );
  }
};

export const filterPrice = (data: any, priceFilter: number) => {
  if (priceFilter < 1000000) {
    const productItem = data?.filter(
      (item: IProduct) => item.price < priceFilter
    );
    console.log(">>>>>check productItem:", productItem);
    return productItem;
  }

  if (priceFilter > 1000000 && priceFilter < 3000000) {
    const productItem = data
      ?.filter((item: IProduct) => item.price > 1000000)
      .filter((item: IProduct) => item.price < 3000000);
    console.log(">>>>>check productItem:", productItem);
    return productItem;
  }

  if (priceFilter > 3000000 && priceFilter < 5000000) {
    const productItem = data
      ?.filter((item: IProduct) => item.price > 3000000)
      .filter((item: IProduct) => item.price < 5000000);
    console.log(">>>>>check productItem:", productItem);
    return productItem;
  }

  if (priceFilter > 5000000 && priceFilter < 7000000) {
    const productItem = data
      ?.filter((item: IProduct) => item.price > 5000000)
      .filter((item: IProduct) => item.price < 7000000);
    console.log(">>>>>check productItem:", productItem);
    return productItem;
  }

  if (priceFilter > 7000000 && priceFilter < 10000000) {
    const productItem = data
      ?.filter((item: IProduct) => item.price > 7000000)
      .filter((item: IProduct) => item.price < 10000000);
    console.log(">>>>>check productItem:", productItem);
    return productItem;
  }

  if (priceFilter > 10000000) {
    const productItem = data?.filter((item: IProduct) => item.price > 10000000);
    return productItem;
  }
};
export default CollectionsAll;
