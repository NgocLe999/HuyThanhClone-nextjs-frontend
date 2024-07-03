"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "~/lib/redux/hooks";

const products = [
  {
    name: "Professional plan",
    desc: "Monthly subscription",
    price: "$15.00",
  },
  {
    name: "Dedicated support",
    desc: "Included in the Professional plan",
    price: "Free",
  },
  {
    name: "Hardware",
    desc: "Devices needed for development",
    price: "$69.99",
  },
  {
    name: "Landing page template",
    desc: "License",
    price: "$49.99",
  },
];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  const orderedProduct = useAppSelector((state) => state.cart);
  console.log("check order Product:", orderedProduct);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {orderedProduct.totalPay.toLocaleString()} VNĐ
      </Typography>
      <List disablePadding sx={{ minWidth: 370 }}>
        {orderedProduct.data.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 2 }}>
            <img
              alt=""
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.featured_image.src}`}
              width="60"
              height="60"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                marginRight: "15px",
              }}
            />
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.type}
            />

            <Typography variant="body1" fontWeight="medium">
              {product.price.toLocaleString()} VNĐ
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography
        variant="body1"
        fontWeight="medium"
        sx={{ marginTop: "20px" }}
      >
        <strong>GHI CHÚ: </strong>
        <span>{orderedProduct.note}</span>
      </Typography>
    </React.Fragment>
  );
}
