import { Card, Header, ScrollToTop } from "components";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Car, CarData } from "shared/interfaces";
import { getDataFromJson } from "shared/utils";
import { CardsContainer, HomeContainer } from "styles/home";
import Theme from "styles/theme";

const Home: NextPage<CarData> = ({ cars }) => {
  const router = useRouter();
  const [carsList, setCarsList] = useState<Car[]>(cars);

  const onClickCard = (car: Car) => {
    router.push(`/details/${car.id}`);
  };

  const handleClickSearch = (
    e: any,
    city: string,
    startDate: string,
    finalDate: string
  ) => {
    e.preventDefault();
    startDate = new Date(startDate).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });

    if (city && startDate && finalDate) {
      const filteredCars = carsList.filter((car) => {
        return car.city === city && startDate >= car.availableAt;
      });

      setCarsList(filteredCars);
    }
  };

  return (
    <HomeContainer>
      <Header onClickSearch={handleClickSearch} />
      <ScrollToTop />
      <CardsContainer>
        {carsList.length > 0 ? (
          carsList.map((car: Car) => {
            return (
              <Card key={car.id} onClick={() => onClickCard(car)} car={car} />
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>No cars avaliable</p>
            <br />
            <a
              onClick={() => window.location.reload()}
              style={{
                cursor: "pointer",
                color: `${Theme.colors.primary.main}`,
              }}
            >
              Refresh page
            </a>
          </div>
        )}
      </CardsContainer>
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const carsData = await getDataFromJson();

  return {
    props: carsData,
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

export default Home;
