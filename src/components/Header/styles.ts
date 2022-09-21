import { IoCalendar, IoSearch } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";

interface HeaderProps {
  extended: boolean;
}

export const HeaderContainer = styled.header`
  width: 100vw;
  height: ${(props: HeaderProps) => (props.extended ? "100vh" : "83px")};
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 112px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 10px 30px #0000001a;

  @media screen and (max-width: 1139px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    height: 83px;
  }
  @media screen and (max-width: 664px) {
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 867px) {
    display: none;
  }
  @media screen and (max-width: 664px) {
    display: ${(props: HeaderProps) => (props.extended ? "none" : "flex")};
  }
`;

export const SearchContainer = styled.div`
  display: ${(props: HeaderProps) => (props.extended ? "none" : "flex")};
  align-items: center;

  @media screen and (max-width: 664px) {
    display: none;
  }
`;

export const SearchWrapper = styled.form`
  width: 545px;
  height: 36px;
  display: flex;
  align-items: center;

  background-color: rgb(243, 241, 252, 0.6);
  border-radius: 18px;

  @media screen and (max-width: 664px) {
    width: 80vw;
    height: auto;
    flex-direction: column;
  }
`;

export const PinIcon = styled(MdLocationPin)`
  width: 18px;
  height: 18px;
  margin-left: 27px;
  opacity: 0.4;

  @media screen and (max-width: 664px) {
    margin-left: 12px;
  }
`;

export const SearchCityInput = styled.input`
  width: 151px;
  height: 20px;
  border: none;
  outline: none;
  margin-right: 30px;
  background-color: transparent;
  padding: 0 6px;
  font: normal normal 600 14px ${(props) => props.theme.font};
  color: #656469;

  @media screen and (max-width: 664px) {
    width: 120px;
    margin-right: 10px;
  }
`;

export const CalendarIcon = styled(IoCalendar)`
  width: 18px;
  height: 18px;
  opacity: 0.4;
`;

export const StartDateInput = styled.input`
  width: 125px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0 8px;
  padding-top: 2px;
  font: normal normal 600 14px ${(props) => props.theme.font};
  color: #656469;
`;

export const FinalDateInput = styled.input`
  width: 125px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0 8px;
  padding-top: 2px;
  font: normal normal 600 14px ${(props) => props.theme.font};
  color: #656469;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 18px;
  padding: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 3px 15px #00000014;
  transition: all 0.2s;

  &:hover {
    scale: 1.2;
  }
`;

export const SearchButtonIcon = styled(IoSearch)`
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.colors.primary.main};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media screen and (max-width: 867px) {
    display: none;
  }
`;

export const SignUpButton = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  font: normal normal bold 16px ${(props) => props.theme.font};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;

export const SignInButton = styled.button`
  width: 84px;
  height: 36px;

  border: none;
  outline: none;
  cursor: pointer;

  font: normal normal bold 16px ${(props) => props.theme.font};
  background-color: #ffffff;
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.main};
  border-radius: 13px;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;

export const HamburgerMenu = styled.button`
  position: absolute;
  right: 50px;
  top: 10px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 867px) {
    display: none;
  }
`;

export const HeaderExtendedContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1138px) {
    display: none;
  }
`;

export const SearchContainerExtended = styled.div`
  padding-top: 150px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 664px) {
    display: none;
  }
`;

export const SearchCityContainerExtended = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const SearchStartDateContainerExtended = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const SearchFinalDateContainerExtended = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const SignUpButtonExtended = styled.a`
  padding-top: 50px;
  color: ${(props) => props.theme.colors.primary.main};
  font: normal normal bold 16px ${(props) => props.theme.font};
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;

export const SignInButtonExtended = styled.button`
  width: 84px;
  height: 36px;

  border: none;
  outline: none;
  cursor: pointer;

  margin-top: 20px;

  font: normal normal bold 16px ${(props) => props.theme.font};
  background-color: #ffffff;
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.main};
  border-radius: 13px;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;
