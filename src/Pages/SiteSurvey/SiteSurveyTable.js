import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import styled from "styled-components";
import IMAGE_PDF from "../../Assets/pdf.svg";
import {
  ButtonPrimary,
  TableCellStyle,
  TableRowStyle,
} from "../../Helper/Helper";

const SiteSurveyTable = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        {/* <TableHeadStyled>
          <TableRowStyle>
            <TableCellStyle>Dessert (100g serving)</TableCellStyle>
            <TableCellStyle>Calories</TableCellStyle>
            <TableCellStyle>Fat&nbsp;(g)</TableCellStyle>
            <TableCellStyle>Carbs&nbsp;(g)</TableCellStyle>
            <TableCellStyle>Protein&nbsp;(g)</TableCellStyle>
          </TableRowStyle>
        </TableHeadStyled> */}
        <TableBody sx={{ boxShadow: "none" }}>
          {rows.map((row) => (
            <TableRowStyle key={row.name}>
              <TableCellStyle>
                <div className="image">
                  <img src={IMAGE_PDF} alt="pdf" />
                  {row.name}
                </div>
              </TableCellStyle>
              <TableCellStyle align="center">{row.calories}</TableCellStyle>
              <TableCellStyle align="center">
                <ButtonPrimary
                  br="0px"
                  bg="transparent"
                  c="#333"
                  m=".2rem 0"
                  bs="0px 0px 0px 2px #333"
                >
                  SEND TO PM
                </ButtonPrimary>
              </TableCellStyle>
            </TableRowStyle>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SiteSurveyTable;
