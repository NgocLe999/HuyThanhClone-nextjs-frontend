import { Box } from "@mui/material";

const PopupNews = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "100%",
        width: "500px",
        padding: "8px 22px",
      }}
    >
      <span>Tin khuyến mãi</span>
      <span>Blog trang sức</span>
      <span>Tuyển dụng</span>
    </Box>
  );
};
export default PopupNews;
