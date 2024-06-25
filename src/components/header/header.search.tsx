"use client";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCallback, useEffect, useRef, useState } from "react";
import _, { debounce } from "lodash";
import { sendRequest } from "~/utils/api";
import { useRouter } from "next/navigation";

const HeaderSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);
  const router = useRouter();
  const [displaySearch, setDisplaySearch] = useState("none");

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query) {
        const res = await sendRequest<IBackendRes<IResPaginate<IProduct>>>({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product`,
          method: "GET",
          queryParams: {
            currentPage: 1,
            pageSize: 10,
            populate: "featured_image",
            fields: "featured_image",
            name: `/${query}/i`,
          },
          nextOption: { cache: "no-store" },
        });
        //@ts-ignore
        setResults(res?.data?.result);
        console.log("call api");
        setDisplaySearch("flex");
      } else {
        setResults([]);
      }
    }, 500),
    []
  );
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  const handleChange = (value: string) => {
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSearch = (id: string) => {
    router.push(`/product/${id}`);
    setDisplaySearch("none");
    setResults([]);
  };
  return (
    <Box
      component="form"
      sx={{
        p: "2px 2px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
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
        sx={{ ml: 1, flex: 1, borderBottom: "1px solid #ccc", zIndex: 4 }}
        placeholder="Bạn cần tìm gì?"
        inputProps={{ "aria-label": "Bạn cần tìm gì?" }}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 50,
          zIndex: 99999999999999,
          borderRadius: "5px",
          backgroundColor: "#fff",
          display: `${displaySearch}`,
          gap: "5px",
          flexDirection: "column",
        }}
      >
        {results.map((result: IProduct, index: number) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#F2F3F5;",
                  borderRadius: "5px",
                },
                cursor: "pointer",
              }}
              key={`search-${index}`}
              onClick={() => handleSearch(result._id)}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${result.featured_image.src}`}
                style={{
                  width: "8%",
                  // height: "8%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <div>{result.name}</div>
              <div style={{ fontWeight: 500 }}>{`${result.price.toLocaleString(
                "en-US",
                {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }
              )}đ`}</div>
            </Box>
          );
        })}
      </Box>
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
