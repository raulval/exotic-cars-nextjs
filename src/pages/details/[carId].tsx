import { Header } from "components";
import fsPromises from "fs/promises";
import { NextPage } from "next";
import path from "path";
import { Car } from "shared/interfaces";

interface ContextProps {
  params: {
    carId: string;
  };
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
  console.log(car);

  return (
    <div>
      <Header />
      <h1>Details</h1>
    </div>
  );
};

export default Details;
