import { Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary, Heading } from "../../Helper/Helper";
import { forgotPassword, reset } from "../../Redux/Slices/auth/AuthSlice";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });
  const { isError, isSuccess, isLodaing, message } = useSelector(
    (state) => state.auth
  );

  const hadelSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/check-email");
    }
    // dispatch(reset());
  }, [isSuccess, isLodaing, dispatch, message]);

  return (
    <ForgotPasswordStyled>
      <Container>
        <Heading m="1rem auto" fz="3rem" ta="center" fw="700" p="0 2rem 0 0">
          BoxByld
        </Heading>
        <div className="data">
          <h2>Forgot Password </h2>
          <form onSubmit={hadelSubmit}>
            <TextField
              type="email"
              fullWidth
              label="Enter your Mail"
              name="email"
              id="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <ButtonPrimary type="submit" fullWidth variant="contained">
              {isLodaing ? "lodaing..." : " Submit"}
            </ButtonPrimary>
          </form>
          <Link to="/login">Go to the Login Page</Link>
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
    a {
      text-align: center;
      display: inline-block;
      width: 100%;
      color: #6eb5ca;
      font-weight: bold;
    }
  }
`;

export default ForgotPassword;
