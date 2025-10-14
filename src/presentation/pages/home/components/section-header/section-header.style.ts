import styled from "styled-components";

export const Container = styled.div`
  > hr {
    margin: 2.5rem;
  }

  @media (max-width: 768px) {
    > hr {
      margin: 1.5rem 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 700;
  letter-spacing: -0.06rem;
  color: ${({ theme }) => theme.colors["primary-light"]};
  font-size: ${({ theme }) => theme["font-size"][60]};
  line-height: ${({ theme }) => theme["line-height"].compact};

  > span {
    letter-spacing: -0.1125rem;
    color: ${({ theme }) => theme.colors["primary-pure"]};
    font-size: ${({ theme }) => theme["font-size"][80]};
    line-height: ${({ theme }) => theme["line-height"].compact};
  }
`;

export const Actions = styled.div``;
