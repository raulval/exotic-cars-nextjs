import { MdKeyboardArrowUp } from "react-icons/md";
import styled from "styled-components";

export const ScrollToTopContainer = styled.div`
  position: relative;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 80px;
  z-index: 20;

  background-color: #e6d3f1;
  /* border: 2px solid #fff; */
  border: none;
  border-radius: 50%;
  box-shadow: 0px 8px 15px #00000026;
  width: 73px;
  height: 73px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    animation: none;
    background-color: #a1a7f4;
    color: #fff;
  }
`;

export const ScrollToTopIcon = styled(MdKeyboardArrowUp)`
  font-size: 70px;
`;
