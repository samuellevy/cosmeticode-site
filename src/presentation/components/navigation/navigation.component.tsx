import { NavLink } from "react-router";
import { ButtonUi } from "../ui/button/button.ui";
import {
  Actions,
  CloseButton,
  Container,
  Content,
  FigureLogo,
  HamburgerMenuButtonBox,
  HamburguerMenuBox,
  HamburguerMenuBoxList,
  MenuBox,
} from "./navigation.component.style";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);

  // const handleNavigateButton = (path: string) => {
  //   navigate(path);
  //   setIsHamburgerMenuActive(false);
  // };

  const handleCloseHamburguerMenu = () => {
    setIsHamburgerMenuActive(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToSignUp = () => {
    window.location.href = "https://app.cosmeticode.com/sign-up";
  };

  return (
    <>
      <Container>
        <Content>
          <MenuBox>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/the-app">O App</NavLink>
            <NavLink to="/our-mission">Nossa Missão</NavLink>
            <NavLink to="/plans">Planos</NavLink>
          </MenuBox>

          <FigureLogo>
            <img alt="" src="/cosmeticode-logo.png" />
          </FigureLogo>

          <HamburgerMenuButtonBox onClick={() => setIsHamburgerMenuActive(true)}>
            <Menu size={18} />
          </HamburgerMenuButtonBox>

          <Actions>
            <a href="/" rel="noopener noreferrer" target="_blank">
              Entrar
            </a>

            <ButtonUi $variant="primary" onClick={() => handleGoToSignUp()}>
              Experimente grátis
            </ButtonUi>
          </Actions>
        </Content>
      </Container>

      <HamburguerMenuBox active={isHamburgerMenuActive}>
        <CloseButton onClick={() => setIsHamburgerMenuActive(false)}>
          <X size={18} />
        </CloseButton>
        <HamburguerMenuBoxList>
          <NavLink to="/" onClick={() => handleCloseHamburguerMenu()}>
            Início
          </NavLink>
          <NavLink to="/the-app" onClick={() => handleCloseHamburguerMenu()}>
            O App
          </NavLink>
          <NavLink to="/our-mission" onClick={() => handleCloseHamburguerMenu()}>
            Nossa Missão
          </NavLink>
          <NavLink to="/plans" onClick={() => handleCloseHamburguerMenu()}>
            Planos
          </NavLink>
          <NavLink to="https://app.cosmeticode.com/login" onClick={() => handleCloseHamburguerMenu()}>
            Entrar
          </NavLink>
        </HamburguerMenuBoxList>

        <ButtonUi $variant="primary" style={{ width: "100%" }} onClick={() => handleGoToSignUp()}>
          Experimente grátis
        </ButtonUi>
      </HamburguerMenuBox>
    </>
  );
};
