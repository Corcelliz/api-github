import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  min-width: 256px;
  max-height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.background};
  overflow-y: hidden;
`;

export const Main = styled.section`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.gray800};
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;
