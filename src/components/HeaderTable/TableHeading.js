import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const TableHeading = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "3rem auto ",
        position: "relative",
        minHeight: "2rem",
        overflow: "hidden",
        // top: 0,
        // left: 0,
      }}
    >
      <TableHeadingStyle>{props.children}</TableHeadingStyle>
      <Dash />
    </Box>
  );
};

const TableHeadingStyle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  text-transform: capitalize;
  background: #fff;
  z-index: 2;
  padding: 2rem 3rem;
  text-transform: uppercase;
  color: #333;
`;
const Dash = styled.span`
  display: block;
  width: 100%;
  margin: auto;
  background: #000;
  height: 0.02rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default TableHeading;
