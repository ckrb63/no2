import { Link } from "react-router-dom";
import styled from "styled-components";

const TabWrapper = styled.div`
  margin: 1rem;
  margin-top: 2rem;
  text-align: left;
  margin-left: 8rem;
`;

const Tab = styled.span`
  border-radius: 10%;
  box-shadow: 2px 3px 5px 0px grey;
  padding: 0.3rem;
  margin: 0.2rem;
  &:hover {
    cursor: pointer;
  }
  background: ${(props) => (props.active ? "white" : "black")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active ? "black" : "white")};
`;

function BooklogNavi({ isOpen }) {
  return (
    <TabWrapper>
      <Tab active={isOpen}>
        <StyledLink to="/booklogs/list/true" active={isOpen}>
            공개
        </StyledLink>
      </Tab>
    </TabWrapper>
  );
}

export default BooklogNavi;
