import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
`;

export const FirstLogo = styled.p`
  font: normal normal 600 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 1139px) {
    font-size: 16px;
  }
`;

export const SecondLogo = styled.p`
  padding: 9px 0 0 5px;
  font: normal normal normal 16px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
  letter-spacing: 0.64px;

  @media (max-width: 1139px) {
    font-size: 14px;
    padding: 4px 0 0 3px;
  }
`;
