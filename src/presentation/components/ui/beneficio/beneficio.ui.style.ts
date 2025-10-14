import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-block: 1rem 1rem;
`;

export const Caption = styled.div`
  color: ${({ theme }) => theme.colors["primary-light"]};
  text-align: center;

  font-size: ${({ theme }) => theme["font-size"][60]};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme["line-height"].compact};
  letter-spacing: -0.06rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors["primary-pure"]};
  text-align: center;

  font-size: ${({ theme }) => theme["font-size"][80]};
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme }) => theme["line-height"].compact};
  letter-spacing: -0.1125rem;

  margin-block: 1rem 2.5rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme["font-size"][70]};
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors["primary-light"]};
  text-align: center;

  font-size: ${({ theme }) => theme["font-size"][60]};
  font-style: normal;
  font-weight: 500;
  line-height: ${({ theme }) => theme["line-height"].spaced};
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme["font-size"][50]};
  }
`;
