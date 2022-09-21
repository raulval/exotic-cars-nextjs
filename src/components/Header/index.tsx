import Logo from "components/Logo";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ButtonsContainer,
  CalendarIcon,
  FinalDateInput,
  HamburgerMenu,
  HeaderContainer,
  HeaderExtendedContainer,
  LogoContainer,
  PinIcon,
  SearchButton,
  SearchButtonIcon,
  SearchCityContainerExtended,
  SearchCityInput,
  SearchContainer,
  SearchContainerExtended,
  SearchFinalDateContainerExtended,
  SearchStartDateContainerExtended,
  SearchWrapper,
  SignInButton,
  SignInButtonExtended,
  SignUpButton,
  SignUpButtonExtended,
  StartDateInput,
} from "./styles";

interface HeaderProps {
  onClickSearch?: (
    e: any,
    city: string,
    startDate: string,
    finalDate: string
  ) => void;
}

const Header = (props: HeaderProps) => {
  const date = new Date().toISOString().substring(0, 10);
  const router = useRouter();
  const [extendHeader, setExtendHeader] = useState(false);
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  return (
    <HeaderContainer extended={extendHeader}>
      <LogoContainer onClick={() => router.push("/")} extended={extendHeader}>
        <Logo />
      </LogoContainer>
      <SearchContainer extended={extendHeader}>
        <SearchWrapper>
          <PinIcon />
          <SearchCityInput
            type="text"
            placeholder="Your location"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
          <CalendarIcon />
          <StartDateInput
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            min={date}
            placeholder="Start date"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            required
          />
          <CalendarIcon />
          <FinalDateInput
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            min={date}
            placeholder="Final date"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            required
          />
          <SearchButton
            onClick={(e) => props.onClickSearch!(e, city, startDate, finalDate)}
          >
            <SearchButtonIcon />
          </SearchButton>
        </SearchWrapper>
      </SearchContainer>
      <ButtonsContainer>
        <SignUpButton href="#">Sign up</SignUpButton>
        <SignInButton onClick={() => null}>Sign in</SignInButton>
      </ButtonsContainer>
      {extendHeader && (
        <HeaderExtendedContainer>
          <SearchContainerExtended>
            <SearchWrapper>
              <SearchCityContainerExtended>
                <PinIcon />
                <SearchCityInput
                  type="text"
                  placeholder="Your location"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </SearchCityContainerExtended>
              <SearchStartDateContainerExtended>
                <CalendarIcon />
                <StartDateInput
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  min={date}
                  placeholder={date}
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate ? startDate : date}
                />
              </SearchStartDateContainerExtended>
              <SearchFinalDateContainerExtended>
                <CalendarIcon />
                <FinalDateInput
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  min={date}
                  placeholder="Final date"
                  onChange={(e) => setFinalDate(e.target.value)}
                  value={finalDate}
                />
              </SearchFinalDateContainerExtended>
              <SearchButton
                onClick={(e) =>
                  props.onClickSearch!(e, city, startDate, finalDate)
                }
              >
                <SearchButtonIcon />
              </SearchButton>
            </SearchWrapper>
          </SearchContainerExtended>
          <SignUpButtonExtended href="#">Sign up</SignUpButtonExtended>
          <SignInButtonExtended onClick={() => null}>
            Sign in
          </SignInButtonExtended>
        </HeaderExtendedContainer>
      )}
      <HamburgerMenu
        onClick={() => {
          setExtendHeader((curr) => !curr);
        }}
      >
        {extendHeader ? <>&#10005;</> : <> &#8801;</>}
      </HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;
