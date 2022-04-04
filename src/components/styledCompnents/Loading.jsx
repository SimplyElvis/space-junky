import styled from "styled-components";
import loading from "../../images/loading.gif";

const LoadingWrapper = styled.section`
  height: 300px;
  width: 100%;
  display: grid;
  place-items: center;
  opacity: 0.5;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={loading} alt="loading" />
    </LoadingWrapper>
  );
};

export default Loading;
