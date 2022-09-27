import Image from "next/future/image";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const DetailsWrapper = styled.div`
  width: 90vw;
  margin-top: 150px;

  @media screen and (max-width: 425px) {
    margin-top: 120px;
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
`;

export const DetailsBrandImageContainer = styled.div`
  display: flex;
  margin-right: 40px;

  @media screen and (max-width: 425px) {
    margin-right: 20px;
  }
`;

export const DetailsBrandImage = styled(Image)`
  width: 91px;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 867px) {
    width: 60px;
  }
`;

export const DetailsCarName = styled.h1`
  font: normal normal bold 50px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media screen and (max-width: 867px) {
    font-size: 38px;
  }
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const DetailsPriceContainer = styled.div`
  width: 85vw;
  height: 50px;
  display: flex;
  padding-left: 130px;
  margin-top: -65px;
  justify-content: space-between;

  @media screen and (max-width: 867px) {
    margin-top: -35px;
    padding-left: 100px;
  }
  @media screen and (max-width: 425px) {
    margin-top: -35px;
    padding-left: 80px;
  }
  @media screen and (max-width: 370px) {
    margin-top: -5px;
    padding-left: 80px;
  }
`;

export const DetailsColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsCarPrice = styled.h2`
  font: normal normal 300 40px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media screen and (max-width: 867px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;

export const DetailsCarColorId = styled.p`
  font: normal normal bold 50px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media screen and (max-width: 867px) {
    font-size: 38px;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
`;

export const DetailsCarColor = styled.p`
  font: normal normal 300 30px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};

  @media screen and (max-width: 867px) {
    font-size: 24px;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const DetailsCarImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15vw;

  @media screen and (max-width: 867px) {
    gap: 10vw;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 20px;
  }
`;

export const BackToCatalogButton = styled.button`
  width: 177px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 5px 20px #0000001a;
  border: 1px solid #313136;
  border-radius: 25px;
  cursor: pointer;

  font: normal normal 300 16px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }

  svg {
    margin-right: 12px;
    font-size: 24px;
  }

  @media screen and (max-width: 867px) {
    width: 135px;

    svg {
      margin-right: 5px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const DetailsCarImage = styled(Image)`
  width: 40vw;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 425px) {
    width: 75vw;
  }
`;

export const DetailsCarBookNowContainer = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const DetailsCarBookNowButton = styled.button`
  width: 177px;
  height: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #313136;
  box-shadow: 0px 5px 20px #0000001a;
  border-radius: 25px;

  font: normal normal 300 16px ${(props) => props.theme.font};
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }

  svg {
    margin-left: 20px;
    font-size: 24px;
  }

  @media screen and (max-width: 867px) {
    width: 160px;
    height: 45px;

    svg {
      margin-right: 5px;
      font-size: 18px;
    }
  }
`;

export const DetailsCarCarousel = styled.div`
  width: 90vw;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    height: 50vh;
  }
`;
