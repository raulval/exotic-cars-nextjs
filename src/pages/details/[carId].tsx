import { Header } from "components";
import Carousel from "components/Carousel";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Car, CarColor } from "shared/interfaces";
import { getDataFromJson } from "shared/utils";
import {
  BackToCatalogButton,
  DetailsBrandImage,
  DetailsBrandImageContainer,
  DetailsCarBookNowButton,
  DetailsCarBookNowContainer,
  DetailsCarCarousel,
  DetailsCarColor,
  DetailsCarColorId,
  DetailsCarImage,
  DetailsCarImageContainer,
  DetailsCarName,
  DetailsCarPrice,
  DetailsColorContainer,
  DetailsContainer,
  DetailsHeader,
  DetailsPriceContainer,
  DetailsWrapper,
} from "styles/details";

interface ContextProps {
  params: {
    carId: string;
  };
}

const Details: NextPage<Car> = (car) => {
  const router = useRouter();
  const [selectedCarColor, setSelectedCarColor] = useState<CarColor>(
    car.color[0]
  );

  const handleClickCard = (selectedCar: CarColor) => {
    setSelectedCarColor(selectedCar);
  };

  return (
    <DetailsContainer>
      <Header />
      <DetailsWrapper>
        <DetailsHeader>
          <DetailsBrandImageContainer>
            <DetailsBrandImage
              src={car.brandImage}
              alt={`${car.brand} Logo`}
              width={91}
              height={100}
            />
          </DetailsBrandImageContainer>
          <DetailsCarName>
            {car.brand} {car.model}
          </DetailsCarName>
        </DetailsHeader>
        <DetailsPriceContainer>
          <DetailsCarPrice>${car.price}/day</DetailsCarPrice>
          <DetailsColorContainer>
            <DetailsCarColorId>0{selectedCarColor.id}</DetailsCarColorId>
            <DetailsCarColor>
              {selectedCarColor.name.charAt(0).toUpperCase() +
                selectedCarColor.name.slice(1)}
            </DetailsCarColor>
          </DetailsColorContainer>
        </DetailsPriceContainer>

        <DetailsCarImageContainer>
          <BackToCatalogButton onClick={() => router.push("/")}>
            <HiOutlineArrowLeft /> Back to catalog
          </BackToCatalogButton>
          <DetailsCarImage
            src={selectedCarColor.image}
            alt={`${selectedCarColor.name} ${car.brand} ${car.model}`}
            width={550}
            height={300}
          />
        </DetailsCarImageContainer>

        <DetailsCarBookNowContainer>
          <DetailsCarBookNowButton>
            Book now <HiOutlineArrowRight />
          </DetailsCarBookNowButton>
        </DetailsCarBookNowContainer>

        <DetailsCarCarousel>
          {car.color.length > 1 && (
            <Carousel carData={car.color} onClick={handleClickCard} />
          )}
        </DetailsCarCarousel>
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export async function getStaticProps(context: ContextProps) {
  const { params } = context;
  const data = await getDataFromJson();

  const car: Car = data.cars.find(
    (car: Car) => car.id.toString() === params.carId
  );

  return {
    props: car,
  };
}

export async function getStaticPaths() {
  const data = await getDataFromJson();

  const paths = data.cars.map((car: Car) => {
    return {
      params: {
        carId: `${car.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default Details;
