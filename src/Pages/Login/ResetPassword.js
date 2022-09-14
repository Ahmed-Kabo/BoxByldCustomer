import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ButtonPrimary, Heading } from "../../Helper/Helper";
import { resetPassword } from "../../Redux/Slices/auth/AuthSlice";

const validationSchema = yup.object({
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  password_confirmation: yup
    .string("Confirm Your Password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

/* ------ STRAT RESET PASSWORD ACTION ------ */
const ResetPassword = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isError, isSuccess, isLodaing, message } = useSelector(
    (state) => state.auth
  );

  const [error, setError] = useState(false);
  const [data, setData] = useState({
    email: "",
    token: "",
  });

  useEffect(() => {
    const urlParams = Object.fromEntries([...new URLSearchParams(search)]);
    setData({ ...data, email: urlParams.email, token: urlParams.token });
  }, [search]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    if (isSuccess) {
      toast.sucess("The password Changed Succesfully ");
    }
  }, [isError, isSuccess, message]);

  /*---- start formik form ---- */
  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.password === values.password_confirmation) {
        setError(false);
        dispatch(resetPassword({ ...data, ...values }));
        console.log(data);
      } else {
        setError(true);
      }
    },
  });
  /*---- start return ---- */
  if (!search) {
    navigate("/");
  }
  return (
    <ForgotPasswordStyled>
      <Heading m="1rem auto" fz="3rem" ta="center" fw="700" p="0 2rem 0 0">
        BoxByld
      </Heading>
      <Container>
        <div className="data">
          <h2>Reset Password </h2>
          <form onSubmit={formik.handleSubmit}>
            <FormContant>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Enter Your New Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </FormContant>
            <FormContant>
              <TextField
                fullWidth
                id="password_confirmation"
                name="password_confirmation"
                label="Confirm Your Password"
                type="password"
                value={formik.values.password_confirmation}
                onChange={formik.handleChange}
                error={
                  formik.touched.password_confirmation &&
                  Boolean(formik.errors.password_confirmation)
                }
                helperText={
                  formik.touched.password_confirmation &&
                  formik.errors.password_confirmation
                }
              />
            </FormContant>
            {error && (
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Alert severity="error">
                  Confirm Password Does't Match the Password!
                </Alert>
              </Stack>
            )}

            <ButtonPrimary type="submit" fullWidth variant="contained">
              {isLodaing ? "lodaing..." : " Reset Password"}
            </ButtonPrimary>
          </form>
          <Link to="/login" className="login">
            Go to the Login Page
          </Link>
        </div>
      </Container>
    </ForgotPasswordStyled>
  );
};
const ForgotPasswordStyled = styled.div`
  .logo {
    background: #000;
    display: block;
    padding: 1rem 3rem;
    border-radius: 2rem;
    width: 300px;
    margin: 1rem auto;
    text-align: center;
  }
  .data {
    width: 60%;
    margin: 3rem auto;
    @media (max-width: 768px) {
      width: 90%;
    }
    h2 {
      margin: 1rem 0;
      color: #6eb5ca;
    }
    .btn_submit {
      margin: 2rem 0;
    }
    .login {
      color: #6eb5ca;
    }
    a {
      text-align: center;
      display: inline-block;
      width: 100%;
      color: #6eb5ca;
      font-weight: bold;
    }
  }
`;
const FormContant = styled.div`
  margin: 1rem 0;
`;
export default ResetPassword;
