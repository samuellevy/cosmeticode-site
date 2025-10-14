import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 39.5rem;
  height: 100%;
  max-height: 29.375rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  letter-spacing: -0.06rem;
  color: ${({ theme }) => theme.colors["secondary-medium"]};
  font-size: ${({ theme }) => theme["font-size"][60]};
  line-height: ${({ theme }) => theme["line-height"].compact};
`;

export const Description = styled.p`
  max-width: 26rem;
  margin-block: 1.75rem 2.5rem;

  font-weight: 500;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.colors["primary-light"]};
  font-size: ${({ theme }) => theme["font-size"][50]};
  line-height: ${({ theme }) => theme["line-height"].spaced};
`;

export const Banner = styled.img`
  width: 100%;
  max-width: 39.5rem;
  max-height: 20.25rem;
  border-radius: 1.25rem;

  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height:13rem;
  }
`;
