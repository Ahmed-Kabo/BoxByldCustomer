import styled from "styled-components";
import { Heading, Paragraph } from "../../Helper/Helper";

const HeaderPage = (props) => {
  return (
    <SiteSurveyStyled>
      <Heading
        fz="2.1rem"
        fw="bold"
        color="#333"
        m=".5rem 0 1rem 0"
        p="0 0 1rem"
        tt="uppercase"
        d="inline-block"
        bb=".5px solid #333"
      >
        {props.title}
      </Heading>
      <Paragraph fz="14px" color="#888" m="1rem 0">
        {props.second}
      </Paragraph>
      {props.children}
    </SiteSurveyStyled>
  );
};

const SiteSurveyStyled = styled.div`
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    li {
      margin: 0 1rem;
      color: #999;
    }
  }
`;

export default HeaderPage;
