import {
  Button,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${(props) => props.fz};
  line-height: ${(props) => props.lh};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  text-transform: ${(props) => props.tt};
  text-align: ${(props) => props.ta};
  display: ${(props) => props.d};
  border-bottom: ${(props) => props.bb};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.fz};
  line-height: ${(props) => props.lh};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  text-transform: ${(props) => props.tt};
  text-align: ${(props) => props.ta};
  letter-spacing: ${(props) => props.ls};
`;

export const ImageController = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  object-fit: ${(props) => props.of};
  object-position: ${(props) => props.op};
  filter: drop-shadow(${(props) => props.ds});
  margin: ${(props) => props.m};
  border-radius: ${(props) => props.br};
`;

export const ButtonPrimary = styled(Button)`
  && {
    background: ${(props) => (props.bg ? props.bg : "var(--mainColor)")};
    color: ${(props) => (props.c ? props.c : "var(--lightColor)")};
    border-radius: ${(props) => (props.br ? props.br : "1rem")};
    /* display: block; */
    padding: 0.6rem 1rem;
    /* min-width: 200px; */
    /* background: ; */

    width: ${(props) => props.w};
    text-transform: capitalize;
    letter-spacing: 2px;
    margin: ${(props) => (props.m ? props.m : "1rem 0")};
    transition: all 0.3s;
    box-shadow: ${(props) => props.bs};
    font-size: 0.9rem;
    font-weight: ${(props) => props.fw};

    &:hover {
      background: var(--lightColor);
      color: var(--mainColor);
      box-shadow: 0px 0px 0px 2px var(--mainColor);
    }
    &.taskBtn {
      width: 265px;
      display: block;
      margin: 1rem auto;
    }
  }
`;

export const InputStyled = styled(TextField)`
  && {
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    label {
      color: var(--lightGray);
      &:focus {
        background: #000;
      }
    }
    .MuiInputLabel-shrink {
      color: var(--mainColor);
      background: var(--lightColor);
    }
  }
`;

export const TableRowStyle = styled(TableRow)`
  && {
    border: none;
  }
`;
export const TableCellStyle = styled(TableCell)`
  && {
    /* background: #000; */
    border: none;
    font-size: 1rem;
    color: var(--gray);
    .image {
      display: flex;
      align-items: center;
    }
  }
`;
export const TableHeadStyled = styled(TableHead)`
  box-shadow: none;
  border-radius: 0;
`;
