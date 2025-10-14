import styled, { createGlobalStyle } from "styled-components";

interface DesktopOnlyProps {
  display?: "block" | "flex";
}

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        border: 0 solid;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: "Noto Sans", sans-serif;
        -webkit-font-smoothing: antialiased;

        color: ${({ theme }) => theme.colors.white};
    }

    body {
        min-height: 100dvh;

        background-color: ${({ theme }) => theme.colors["neutral-60"]};
    }

    button {
        cursor: pointer;
        transition: background-color 0.3s ease-out;

        &:disabled {
            cursor: not-allowed;
            opacity: 50%;
        }
    }

    ul, li {
        list-style: none;
    }

    hr {
        border-bottom-width: 1px;
        border-color: rgba(255, 255, 255, 0.20);
    }

    h1, h2, h3 {
        font-size: inherit;
        font-weight: inherit;
    }
`;

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const DesktopOnly = styled.div<DesktopOnlyProps>`
  display: ${({ display = "block" }) => display};

  @media (max-width: 768px) {
    display: none;
  }
`;
