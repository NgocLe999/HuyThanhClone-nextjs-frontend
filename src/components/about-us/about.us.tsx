"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Image from "next/image";

const AboutUs = (props: any) => {
  const { info } = props;
  return (
    <>
      <Box sx={{ width: "100%", position: "relative", marginBottom: "100px" }}>
        {info.map((item: any, index: number) => {
          if (index === 0) {
            return (
              <>
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    marginBottom: "50px",
                  }}
                  key={`key-${index}`}
                >
                  <Image
                    alt={`banner-${index}`}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`}
                    width={0}
                    height={0}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      top: 0,
                      padding: 5,
                    }}
                  >
                    <Grid item xs={6}></Grid>
                    <Grid
                      sx={{ display: "flex", gap: 1, flexDirection: "column" }}
                      item
                      xs={6}
                    >
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: "25px",
                        }}
                      >
                        {item.title}
                      </span>
                      <div>{item.description.replace("<br>"," ")}</div>
                    </Grid>
                  </Grid>
                </Box>
              </>
            );
          }
          if (index === 2 || index === 4) {
            return (
              <>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    top: 0,
                    padding: "0px 60px",
                  }}
                  key={`key-${index}`}
                >
                  <Grid item xs={6}>
                    <Image
                      alt={`banner-${index}`}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`}
                      width={0}
                      height={0}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                        padding: 0,
                      }}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      padding: 10,
                    }}
                    item
                    xs={6}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </span>
                    <div>{item.description.replace("<br>"," ")}</div>
                  </Grid>
                </Grid>
              </>
            );
          }
          if (index === 1 || index === 3) {
            return (
              <>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    top: 0,
                    padding: "0px 60px",
                  }}
                  key={`key-${index}`}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      padding: 10,
                    }}
                    item
                    xs={6}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </span>
                    <div>{item.description.replace("<br>"," ")}</div>
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      alt={`banner-${index}`}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image}`}
                      width={0}
                      height={0}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                        padding: 0,
                      }}
                    />
                  </Grid>
                </Grid>
              </>
            );
          }
        })}
      </Box>
    </>
  );
};
export default AboutUs;
