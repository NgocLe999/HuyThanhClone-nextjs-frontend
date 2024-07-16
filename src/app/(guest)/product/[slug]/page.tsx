import { Container } from "@mui/material";
import ProductDetail from "~/product/product.details";
import { sendRequest } from "~/utils/api";

const ProductDetailService = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const res = await sendRequest<IBackendRes<IProduct>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product/${params.slug}`,
    method: "GET",
  });
  const productDetails = res?.data ?? [];
  //@ts-ignore
  // const productItem = res?.data?.result ?? [];
  // console.log("productItem", productItem);
  return (
    <Container maxWidth="xl" sx={{ marginTop: "35px" }}>
      <ProductDetail productDetails={productDetails} />
    </Container>
  );
};
export default ProductDetailService;
