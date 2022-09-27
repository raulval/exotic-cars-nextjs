import Image from "next/future/image";
import styled from "styled-components";

interface CarouselProps {
  active: boolean;
  position?: string;
}

export const CarouselContainer = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) {
    height: 55%;
    flex-direction: column;
    /* gap: 50px; */
  }
`;

export const CarouselButton = styled.button`
  width: 42px;
  height: 42px;
  background-color: #313136;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }

  svg {
    font-size: 24px;
  }
`;

export const CarouselWrapper = styled.div`
  width: 80vw;
  height: 25vh;
  position: relative;
  display: flex;
  padding: 0 10%;

  @media screen and (max-width: 867px) {
    gap: 25px;
    padding: 0 25px;
  }

  @media screen and (max-width: 425px) {
    height: 15vh;
    margin-top: 10px;
  }
`;

export const CarouselContent = styled.div`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CarouselCard = styled.div`
  position: absolute;
  left: 40%;
  z-index: 0;
  width: ${(props: CarouselProps) => (props.active ? "309px" : "232px")};
  height: ${(props: CarouselProps) => (props.active ? "239px" : "180px")};

  background: ${(props: CarouselProps) =>
    props.active
      ? "linear-gradient(52deg, #A1A7F4 0%, #E6D3F1 100%)"
      : "#cecece"};
  box-shadow: 0px 8px 20px #0000001a;
  border-radius: 8px;
  opacity: 0.8;
  transition: all 0.2s;

  display: flex;
  align-items: center;

  transform: ${(props: CarouselProps) =>
    props.position === "left"
      ? "translateX(-125%)"
      : props.position === "right"
      ? "translateX(150%)"
      : "translateX(0)"};

  @media screen and (max-width: 1138px) {
    width: ${(props: CarouselProps) => (props.active ? "224px" : "152px")};
    height: ${(props: CarouselProps) => (props.active ? "168px" : "114px")};
    left: 38%;
    transform: ${(props: CarouselProps) =>
      props.position === "left"
        ? "translateX(-135%)"
        : props.position === "right"
        ? "translateX(180%)"
        : "translateX(0)"};
  }
  @media screen and (max-width: 867px) {
    width: ${(props: CarouselProps) => (props.active ? "184px" : "148px")};
    height: ${(props: CarouselProps) => (props.active ? "138px" : "111px")};
    left: 34%;
    bottom: 20%;
    transform: ${(props: CarouselProps) =>
      props.position === "left"
        ? "translateX(-125%)"
        : props.position === "right"
        ? "translateX(155%)"
        : "translateX(0)"};
  }
  @media screen and (max-width: 425px) {
    width: ${(props: CarouselProps) => (props.active ? "152px" : "104px")};
    height: ${(props: CarouselProps) => (props.active ? "114px" : "78px")};
    left: 25%;
    top: 0;
    transform: ${(props: CarouselProps) =>
      props.position === "left"
        ? "translateX(-115%)"
        : props.position === "right"
        ? "translateX(172%)"
        : "translateX(0)"};
  }
`;

export const CarouselCarImage = styled(Image)`
  width: ${(props: CarouselProps) => (props.active ? "350px" : "275px")};
  height: auto;
  transition: all 0.2s;

  @media screen and (max-width: 1138px) {
    width: ${(props: CarouselProps) => (props.active ? "270px" : "190px")};
    height: auto;
  }
  @media screen and (max-width: 867px) {
    width: ${(props: CarouselProps) => (props.active ? "224px" : "168px")};
    height: auto;
  }
  @media screen and (max-width: 425px) {
    width: ${(props: CarouselProps) => (props.active ? "190px" : "120px")};
    height: auto;
  }
`;
