import { Card, Header, ScrollToTop } from "components";
import fsPromises from "fs/promises";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import path from "path";
import { useState } from "react";
// import { cars as data } from "services/database.json";
import { Car, CarData } from "shared/interfaces";
import { CardsContainer, HomeContainer } from "styles/home";
import Theme from "styles/theme";

const Home = ({ cars }: CarData) => {
  const router = useRouter();
  const [carsList, setCarsList] = useState<Car[]>(cars);

  console.log(cars);

  const onClickCard = (car: Car) => {};

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
  const filePath = path.join(process.cwd(), "src/services/database.json");
  const jsonData = await fsPromises.readFile(filePath);
  const carsData = JSON.parse(jsonData.toString());

  return {
    props: carsData,
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

export default Home;
