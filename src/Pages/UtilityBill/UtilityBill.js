import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import TableHeading from "../../components/HeaderTable/TableHeading";
import HeaderPage from "../../components/pageHeader/HeaderPage";
import { ButtonPrimary, Heading, Paragraph } from "../../Helper/Helper";

import UtilityBillTable from "./UtilityBillTable";

const UtilityBill = () => {
  const [Files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <HeaderPage
        title="Utility Bill"
        second="Please Upload Utility Bill Pictures"
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <ButtonPrimary br="0px" w="150px">
            Upload
          </ButtonPrimary>
        </div>
        <ul>{files}</ul>
      </HeaderPage>

      <TableHeading>YOUR UPLOADS</TableHeading>

      <UtilityBillTable />
    </>
  );
};

export default UtilityBill;
