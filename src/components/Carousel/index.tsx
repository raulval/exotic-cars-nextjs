import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { CarColor } from "shared/interfaces";
import {
  CarouselButton,
  CarouselCard,
  CarouselCarImage,
  CarouselContainer,
  CarouselContent,
  CarouselWrapper,
} from "./styles";

interface CarouselProps {
  carData: CarColor[];
  onClick: (selectedCar: CarColor) => void;
}

const Carousel = ({ carData, onClick }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mod = (n: number, m: number) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  const handleNextSlide = () => {
    if (currentSlide === carData.length - 1) {
      setCurrentSlide(0);
      onClick(carData[0]);
    } else {
      setCurrentSlide(currentSlide + 1);
      onClick(carData[currentSlide + 1]);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(carData.length - 1);
      onClick(carData[carData.length - 1]);
    } else {
      setCurrentSlide(currentSlide - 1);
      onClick(carData[currentSlide - 1]);
    }
  };

  const handleCardClick = (selectedCar: CarColor) => {
    onClick(selectedCar);
    setCurrentSlide(selectedCar.id - 1);
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={handlePreviousSlide}>
        <HiOutlineArrowLeft />
      </CarouselButton>

      <CarouselWrapper>
        {carData.map((carColor, index) => {
          let position: string;
          let active: boolean = false;
          const indexLeft = mod(currentSlide - 1, carData.length);
          const indexRight = mod(currentSlide + 1, carData.length);

          if (index === currentSlide) {
            active = true;
          } else if (index === indexLeft) {
            position = "left";
          } else if (index === indexRight) {
            position = "right";
          }

          return (
            <CarouselContent
              key={carColor.id}
              onClick={() => handleCardClick(carColor)}
            >
              <CarouselCard active={active} position={position!}>
                <CarouselCarImage
                  src={carColor.image}
                  alt={`${carColor.name} car`}
                  active={active}
                  width={350}
                  height={130}
                />
              </CarouselCard>
            </CarouselContent>
          );
        })}
      </CarouselWrapper>

      <CarouselButton onClick={handleNextSlide}>
        <HiOutlineArrowRight />
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
