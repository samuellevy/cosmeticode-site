import styled from "styled-components";

export const Container = styled.div`
  margin-block: 6rem;
  margin-inline: auto;
  max-width: 66.5rem;

  display: flex;
  gap: 5.44rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  > h2 {
    max-width: 21.5625rem;
    font-weight: 700;
    letter-spacing: -0.1125rem;
    color: ${({ theme }) => theme.colors["primary-pure"]};
    font-size: ${({ theme }) => theme["font-size"][80]};
    line-height: ${({ theme }) => theme["line-height"].compact};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme["font-size"][70]};
    }
  }

  > p {
    max-width: 39.5rem;
    letter-spacing: -0.06rem;
    color: ${({ theme }) => theme.colors["primary-light"]};
    font-size: ${({ theme }) => theme["font-size"][60]};
    line-height: ${({ theme }) => theme["line-height"].spaced};

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme["font-size"][50]};
      text-align: left;
    }
  }
`;
