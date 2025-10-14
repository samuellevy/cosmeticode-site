import styled, { type DefaultTheme } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

type SpacingProps = {
  $spacing: number;
  $perView?: number;
};

export const Content = styled.div<SpacingProps>`
  overflow: hidden;

  > div {
    display: flex;
    margin-inline-start: ${({ $spacing }) => `-${$spacing}rem`};

    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

export const Item = styled.div<SpacingProps>`
  min-width: 0px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: ${({ $perView }) => `calc(100% / ${$perView})`};
  padding-left: ${({ $spacing }) => `${$spacing}rem`};

  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    margin-right: 13px;
  }

  &:last-child {
    padding-left: ${({ $spacing }) => `${$spacing}rem`};
  }
`;

type ActionsProps = {
  $actionsMarginTop?: number;
};

export const Actions = styled.div<ActionsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-block-start: ${({ $actionsMarginTop }) => ($actionsMarginTop ? `${$actionsMarginTop}rem` : "2rem")};

  @media (max-width: 768px) {
    padding-left: 0;
    width: 92vw;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  background: rgba(88, 88, 88, 0.5);
  backdrop-filter: blur(14px);
  padding: 0.87rem;
`;

export const Figure = styled.figure`
  display: flex;
  width: 100%;
  height: 100%;
   max-height: 40px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Dots = styled.div`
  display: flex;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2.5rem;
  background: rgba(88, 88, 88, 0.5);
  backdrop-filter: blur(14px);
`;

type DotButtonProps = {
  $isActive: boolean;
  $variant: "primary" | "secondary";
};

const variantStyles = (theme: DefaultTheme) => {
  return {
    primary: theme.colors["primary-pure"],
    secondary: theme.colors["secondary-medium"],
  };
};

export const DotButton = styled.button<DotButtonProps>`
  width: 0.5rem;
  height: 0.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;

  background-color: ${({ theme, $isActive, $variant }) =>
    $isActive ? variantStyles(theme)[$variant] : theme.colors["neutral-40"]};
`;
