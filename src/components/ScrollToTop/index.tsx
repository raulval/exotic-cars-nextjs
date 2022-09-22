import { useEffect, useState } from "react";
import {
  ScrollToTopButton,
  ScrollToTopContainer,
  ScrollToTopIcon,
} from "./styles";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopContainer>
      {" "}
      {showTopBtn && (
        <ScrollToTopButton onClick={goToTop}>
          <ScrollToTopIcon />
        </ScrollToTopButton>
      )}{" "}
    </ScrollToTopContainer>
  );
};
export default ScrollToTop;
