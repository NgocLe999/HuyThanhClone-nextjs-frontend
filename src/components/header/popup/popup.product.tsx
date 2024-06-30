import { Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toNamespacedPath } from "path";
import "~/header/popup/popup.scss";

const popupData = [
  {
    title: "TRANG SỨC",
    categories: [
      "Bông Tai",
      "Mặt Dây Chuyền",
      "Bộ Trang Sức",
      "Dây Chuyền",
      "Lắc Tay",
      "Lắc Chân",
      "Charm vàng 14k",
    ],
  },
  {
    title: "TRANG SỨC CÔ DÂU",
    categories: ["Bông Tai Cô Dâu", "Dây Chuyền Cô Dâu", "Bộ Trang Sức Cô Dâu"],
  },
  {
    title: "NHẪN CƯỚI",
    categories: [
      "Nhẫn Cưới đá CZ",
      "Nhẫn cưới Kim Cương Lab-Grown",
      "Nhẫn Cưới Kim Cương Thiên Nhiên",
      "Nhẫn Cưới Moissanite",
      "Nhẫn Cưới Plati",
    ],
  },
  {
    title: "NHẪN CẦU HÔN",
    categories: [
      "Nhẫn Cầu Hôn Kim Cương",
      "Nhẫn Cầu Hôn Đá Moissanite",
      "Nhẫn Cầu Hôn Đá CZ",
      "Nhẫn Cầu Hôn Kim Cương Lab-Grown",
    ],
  },
  {
    title: "Quà Tặng",
    categories: ["Quà Sinh Nhật", "Lễ Kỉ Niệm", "Mẹ Và Bé", "Quà Cưới"],
  },
  {
    title: "VÀNG 24K",
    categories: ["Vòng Cổ", "Vòng Tay", "Vàng Miếng"],
  },
];

const convertString = (string: string) => {
  // Convert the stringing to lowercase
  return string
    .normalize("NFD") // Normalize to decompose special characters
    .replace(/Đ/g, "D") // Replace 'Đ' with 'D'
    .replace(/đ/g, "d")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase(); // Convert to lowercase
};
const PopupProduct = () => {
  const router = useRouter();
  // const handleClick = (name: string) => {
  //   router.push(`/collections/${name}`);
  // };

  return (
    <Container
      sx={{
        display: "flex",
        justifyItems: "space-between",
        minHeight: "100%",
        marginBottom: "40px",
        gap: "40px",
        minWidth: "100%",
        position: "absolute",
        top: 0,
      }}
    >
      {popupData.map((item: any, index: number) => {
        return (
          <div className="popup-categories" key={index}>
            <h4>{item.title}</h4>

            {item.categories.map((category: any, index: number) => {
              return (
                <Link
                  key={index}
                  style={{ cursor: "pointer" }}
                  href={`/collections/${convertString(category)}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};
export default PopupProduct;
