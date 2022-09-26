import { Header } from "components";
import fsPromises from "fs/promises";
import { NextPage } from "next";
import { useRouter } from "next/router";
import path from "path";
import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Car, CarColor } from "shared/interfaces";
import {
  BackToCatalogButton,
  DetailsBrandImage,
  DetailsBrandImageContainer,
  DetailsCarBookNowButton,
  DetailsCarBookNowContainer,
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

interface LocationState {
  car: Car;
}

export async function getStaticProps(context: ContextProps) {
  const { params } = context;
  const filePath = path.join(process.cwd(), "src/services/database.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const car: Car = data.cars.find(
    (car: Car) => car.id.toString() === params.carId
  );

  return {
    props: car,
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "src/services/database.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const paths = data.cars.map((car: Car) => {
    return {
      params: {
        carId: `${car.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

const Details: NextPage<Car> = (car) => {
  const router = useRouter();
  const [selectedCarColor, setSelectedCarColor] = useState<CarColor>(
    car.color[0]
  );

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
      </DetailsWrapper>
    </DetailsContainer>
  );
};

export default Details;
