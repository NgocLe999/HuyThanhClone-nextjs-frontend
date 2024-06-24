"use client";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

const HeaderSearch = () => {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    if (reload) {
      /* Call API here */
      console.log("call api");
    }
  }, [reload]);

  const callApi = () => {
    setReload(true);
  };
  function handleChange() {
    debouncedCallApi();
  }

  const [debouncedCallApi] = useState(() => _.debounce(callApi, 1000)); // Lazay initialvalue

  return (
    <Box
      component="form"
      sx={{
        p: "2px 2px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#333333" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, borderBottom: "1px solid #ccc" }}
        placeholder="Bạn cần tìm gì?"
        inputProps={{ "aria-label": "Bạn cần tìm gì?" }}
        onChange={handleChange}
      />
      <IconButton
        type="button"
        sx={{ p: "6px", color: "#333333", backgroundColor: "#f1f1f1" }}
        aria-label="search"
      >
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default HeaderSearch;
