import Header from "components/Header";
import type { NextPage } from "next";
import { HomeContainer } from "styles/home";

const Home: NextPage = () => {
  const handleClickSearch = () => {};

  return (
    <HomeContainer>
      <Header onClickSearch={handleClickSearch} />
      <h1>Home Page</h1>
    </HomeContainer>
  );
};

export default Home;
