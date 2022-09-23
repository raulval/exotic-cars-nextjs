import {
  CardBrand,
  CardBrandModelContainer,
  CardHeader,
  CardIcon,
  CardImage,
  CardImageContainer,
  CardModel,
  CardPrice,
  CardPriceContainer,
  CardPriceCurrency,
  CardPricePeriod,
  CardPriceWrapper,
  CardWrapper,
} from "./styles";

import { Car } from "shared/interfaces";

interface CardProps {
  car: Car;
  onClick: () => void;
}

const Card = ({ car, onClick }: CardProps) => {
  return (
    <CardWrapper onClick={onClick}>
      <CardHeader>
        <CardBrandModelContainer>
          <CardBrand>{car.brand}</CardBrand>
          <CardModel>{car.model}</CardModel>
        </CardBrandModelContainer>
        <CardIcon />
      </CardHeader>
      <CardImageContainer>
        <CardImage src={"/" + car.homeImage} width={220} height={70} />
      </CardImageContainer>
      <CardPriceContainer>
        <p className="book-now">Book Now</p>
        <CardPriceWrapper>
          <CardPriceCurrency>$</CardPriceCurrency>
          <CardPrice>{car.price}</CardPrice>
          <CardPricePeriod>/day</CardPricePeriod>
        </CardPriceWrapper>
      </CardPriceContainer>
    </CardWrapper>
  );
};

export default Card;
