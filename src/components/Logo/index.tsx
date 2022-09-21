import { useRouter } from "next/router";
import { FirstLogo, LogoContainer, SecondLogo } from "./styles";

const Logo = () => {
  const router = useRouter();
  return (
    <LogoContainer onClick={() => router.push("/")}>
      <FirstLogo>Exotic</FirstLogo>
      <SecondLogo>Cars</SecondLogo>
    </LogoContainer>
  );
};

export default Logo;
