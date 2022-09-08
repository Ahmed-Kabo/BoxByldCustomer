import { Grid } from "@mui/material";
import LoginImage from "../../Assets/login.png";
import { Heading, ImageController, Paragraph } from "../../Helper/Helper";
import LoginForm from "./LoginForm";
import { FormStyled, LoginContainer } from "./LoginStyled";
const Login = () => {
  return (
    <>
      <LoginContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <ImageController src={LoginImage} alt="login" of="conatien" />
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <Heading
              ta="left"
              fz="3rem"
              color="var(--dark)"
              fx="bold"
              m="1rem 0"
            >
              BoxByld Customer
            </Heading>
            <Paragraph
              ta="left"
              color="var(--gray)"
              m="1rem 0"
              fw="600"
              ls="2px"
              fz=".9rem"
            >
              Welcome to BoxByld Please Login To Dashbord
            </Paragraph>

            <FormStyled>
              <LoginForm />
            </FormStyled>
          </Grid>
        </Grid>
      </LoginContainer>
    </>
  );
};

export default Login;
