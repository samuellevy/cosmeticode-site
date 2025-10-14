import styled from "styled-components";

export const Container = styled.div`
  max-width: 88rem;
  height: 50rem;
  position: relative;
  margin-inline: auto;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-end: 6rem;

  padding: 0 1rem;

  @media (max-width: 768px) {
    height: 33rem;
  }

  figure {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    inset: 0;
    z-index: -20;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      z-index: -10;
      object-fit: cover;
      object-position: center;
      opacity: 50%;
    }
  }
`;

export const Content = styled.div`
  max-width: 35.0625rem;

  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 9rem;
    align-items: flex-start;
    width: 100%;
    padding: 1.5rem;
  }

  > h1 {
    font-weight: 700;
    letter-spacing: -0.1125rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme["font-size"][80]};
    line-height: ${({ theme }) => theme["line-height"].compact};

    @media (max-width: 768px) {
      text-align: left;
      font-size: ${({ theme }) => theme["font-size"][70]};
    }
  }

  > p {
    font-weight: 500;
    letter-spacing: -0.06rem;
    text-align: center;
    color: ${({ theme }) => theme.colors["primary-light"]};
    font-size: ${({ theme }) => theme["font-size"][60]};
    line-height: ${({ theme }) => theme["line-height"].compact};

    > br {
      display: none;
      @media (max-width: 768px) {
        display: initial;
      }
    }

    @media (max-width: 768px) {
      text-align: left;
      font-size: ${({ theme }) => theme["font-size"][50]};
    }
  }
`;
