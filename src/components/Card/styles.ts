import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 287px;
  height: 223px;

  background-color: ${(props) => props.theme.colors.card.background};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
    scale: 1.1;

    .book-now {
      opacity: 1;
      color: white;
      font: normal normal 600 17px ${(props) => props.theme.font};
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBrandModelContainer = styled.div`
  padding: 23px 0 0 17px;
  display: flex;
  flex-direction: column;
`;

export const CardBrand = styled.p`
  font: normal normal bold 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
`;

export const CardModel = styled.p`
  font: normal normal 300 17px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-transform: uppercase;
`;

export const CardIcon = styled(BsThreeDots)`
  width: 30px;
  height: 30px;
  margin: 20px 16px 0 0;
  color: ${(props) => props.theme.colors.primary.text};
  opacity: 0.25;
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0 15px 0;
`;

export const CardImage = styled(Image)`
  /* width: 85%; */
  object-fit: cover;
`;

export const CardPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 16px;

  .book-now {
    opacity: 0;
    margin: 8px 0 0 16px;
  }
`;

export const CardPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardPriceCurrency = styled.p`
  font: normal normal bold 14px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
  text-align: top;
`;

export const CardPrice = styled.p`
  font: normal normal bold 24px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
`;

export const CardPricePeriod = styled.p`
  padding-top: 14px;
  font: normal normal 400 14px ${(props) => props.theme.font};
  color: ${(props) => props.theme.colors.primary.text};
`;
