import styled from "styled-components";

export interface HamburguerMenuBoxProps {
  active?: boolean;
}

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 2.2rem;

  @media (max-width: 768px) {
    padding: 0 1.8rem;
    top: 1.5rem;
  }
`;

export const Content = styled.div`
  /* Box Model */
  position: relative;
  width: 100%;
  max-width: 84rem;
  margin-inline: auto;
  padding: 0.75rem;
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Visual */
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(90, 90, 90, 0.3);
  box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(22px);

  @media (max-width: 768px) {
    margin-inline: none;
  }
`;

export const FigureLogo = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;

  @media (max-width: 768px) {
    width: 45%;
    img {
      width: 100%;
    }
  }
`;

export const MenuBox = styled.menu`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  > a {
    display: flex;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.04rem;
    text-decoration: none;

    color: ${({ theme }) => theme.colors["primary-light"]};
    font-size: ${({ theme }) => theme["font-size"][30]};
    line-height: ${({ theme }) => theme["line-height"].compact};

    &.active {
      font-weight: 700;

      color: ${({ theme }) => theme.colors["primary-pure"]};
    }
  }
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  > a {
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1.5rem;
    letter-spacing: -0.04rem;
    text-decoration: none;

    color: ${({ theme }) => theme.colors["primary-light"]};
    font-size: ${({ theme }) => theme["font-size"][30]};
    line-height: ${({ theme }) => theme["line-height"].compact};
  }
`;

export const HamburgerMenuButtonBox = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors["primary-pure"]};
    color: #000;
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors["primary-medium"]};
    }
  }
`;

export const HamburguerMenuBox = styled.menu<HamburguerMenuBoxProps>`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: -10px;
    width: 100%;
    height: 100vh;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.85);
    /* border-radius: 0 0 1rem 1rem; */
    backdrop-filter: blur(22px);
    box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.25);
    z-index: 999;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    /* display: ${(props) => (props.active ? "flex" : "none")}; */
    /* transform: ${(props) => (props.active ? "translateX(0)" : "translateX(-100vw)")}; */

    right: ${(props) => (props.active ? "0%" : "-100%")};
    /* right: 100px; */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors["primary-pure"]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 1.8rem;
  border-radius: 2rem;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HamburguerMenuBoxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  width: 100%;

  > a {
    display: flex;
    padding: 1rem 1.5rem;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.05); */
    font-weight: 500;
    letter-spacing: -0.04rem;
    text-decoration: none;

    color: ${({ theme }) => theme.colors["primary-light"]};
    font-size: ${({ theme }) => theme["font-size"][50]};
    line-height: ${({ theme }) => theme["line-height"].spaced};

    &.active {
      font-weight: 700;

      color: ${({ theme }) => theme.colors["primary-pure"]};
    }
  }
`;
