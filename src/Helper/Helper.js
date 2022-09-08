import { Button, TextField } from "@mui/material";
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
    background: var(--mainColor);
    color: var(--lightColor);
    border-radius: 1rem;
    /* display: block; */
    padding: 0.6rem 1rem;
    /* min-width: 200px; */
    text-transform: capitalize;
    letter-spacing: 2px;
    margin: ${(props) => (props.m ? props.m : "1rem 0")};
    transition: all 0.3s;
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
