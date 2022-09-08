import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import { MailOutline, Lock } from "@mui/icons-material";
import { Box } from "@mui/system";
import * as yup from "yup";
import { useFormik } from "formik";
import { ButtonPrimary, InputStyled } from "../../Helper/Helper";

//start valdation
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
    .max(320, " The maximum accepted numbers of characters is 320"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .min(8, "Must Contain 8 Characters"),
});

//start lofin form
const LoginForm = () => {
  //start forimk valus

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item mb={3} xs={12}>
            <Box className="inputConatiner">
              <MailOutline />
              <InputStyled
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </Grid>
          <Grid item mb={1} xs={12}>
            <Box className="inputConatiner">
              <Lock />
              <InputStyled
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remamber me"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <a href=""> forget password</a>
          </Grid>
        </Grid>
        <ButtonPrimary type="submit" fullWidth variant="contained" m="4rem 0">
          Login
        </ButtonPrimary>
      </form>
    </>
  );
};

export default LoginForm;
