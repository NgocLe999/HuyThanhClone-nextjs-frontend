import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
];

export default function WarrantyPolicy(props: any) {
  const { active } = props;
  return (
    <TableContainer
      component={Container}
      sx={{
        display: `${active === 1 ? "flex" : "none"}`,
        marginTop: 10,
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <h3 style={{ color: "#EC6C61", fontWeight: 700, marginBottom: "20px" }}>
          1. DỊCH VỤ BẢO HÀNH MIỄN PHÍ
        </h3>
        <Table
          sx={{
            minWidth: 650,
            "table,td,th": {
              border: "1px solid #ccc",
              borderCollapse: "collapse",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "#EF8483", fontSize: "15px" }}
                align="center"
              >
                Dessert
              </TableCell>
              <TableCell
                sx={{ color: "#EF8483", fontSize: "15px" }}
                align="center"
              >
                Calories
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ width: "50%" }} scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell sx={{ width: "50%" }} align="center">
                  {row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p style={{ textAlign: "center" }}>Bảng 1.1</p>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <h3 style={{ color: "#EC6C61", fontWeight: 700, marginBottom: "20px" }}>
          2. DỊCH VỤ BẢO HÀNH TÍNH PHÍ
        </h3>
        <Table
          sx={{
            minWidth: 650,
            "table,td,th": {
              border: "1px solid #ccc",
              borderCollapse: "collapse",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "#EF8483", fontSize: "15px" }}
                align="center"
              >
                Dessert
              </TableCell>
              <TableCell
                sx={{ color: "#EF8483", fontSize: "15px" }}
                align="center"
              >
                Calories
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ width: "50%" }} scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell sx={{ width: "50%" }} align="center">
                  {row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p style={{ textAlign: "center" }}>Bảng 2.1</p>
      </Box>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <h3 style={{ color: "#EC6C61", fontWeight: 700 }}>LƯU Ý:</h3>
        <div style={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <span>
            - Đối với các hoạt động bảo hành, Huy Thanh áp dụng bảo hành điện tử
            bằng việc tra cứu thông tin trên hệ thống phần mềm
          </span>
          <span>
            - Các dịch vụ bảo hành, sửa chữa sản phẩm (làm mới, chỉnh size,..)
            có thể giảm về trọng lượng so với ban đầu do bị hao mòn trong thời
            gian sử dụng và quy trình làm mới sản phẩm{" "}
            <strong>(Hạn mức hao mòn: 6%)</strong>
          </span>
          <span>
            - Vàng là kim loại mềm, dễ bị xước và hỏng hình dạng khi đeo trong
            thời gian dài. Vui lòng không đeo trang sức trong lúc hoạt động mạnh
            và bê vác
          </span>
        </div>
        <div style={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <span>Trụ sở: 23/100 Đội Cấn, Ba Đình, Hà Nội, Việt Nam</span>
          <span>Website: https://huythanhjewelry.vn</span>
          <span>FB Page: www.facebook.com/huythanhjewelry</span>
          <span>Hotline giải đáp thắc mắc: 1900 633 428</span>
        </div>
        <span>
          Mọi nhu cầu tư vấn chi tiết về chính sách bảo hành, quý khách vui lòng
          liên hệ 1900 633 428 để được chăm sóc tốt nhất. Trân trọng!
        </span>
      </Box>
    </TableContainer>
  );
}
