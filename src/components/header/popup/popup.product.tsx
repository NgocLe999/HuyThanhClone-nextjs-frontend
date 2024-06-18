import { Container } from "@mui/material";
import "~/header/popup/popup.scss";

const popupData = [
  {
    title: "TRANG SỨC",
    categories: [
      "Bông Tai",
      "Nhẫn Nữ",
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
      "Nhẫn Cưới Đá Kim Cương Thiên Nhiên",
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
const PopupProduct = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyItems: "space-between",
        width: "100%",
        height: "100%",
        marginBottom: "40px",
        marginTop: "40px",
        gap: "40px",
      }}
    >
      {popupData.map((item: any, index: number) => {
        return (
          <div className="popup-categories" key={index}>
            <h4>{item.title}</h4>
            {item.categories.map((category: any, index: number) => {
              return (
                <span className="category" key={index}>
                  {category}
                </span>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};
export default PopupProduct;
