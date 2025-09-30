import styled from 'styled-components'

type ContainerProps = {
    $marginBottom: number
}

export const Container = styled.div<ContainerProps>`
    max-width: 80rem;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-block: ${({ $marginBottom }) => `${$marginBottom}rem`};

    > img {
        position: absolute;
        height: 14.77613rem;
        width: 14.77613rem;
        opacity: 0.1;
        z-index: -10;
        top: 5.5rem;
        left: 50%;
        transform: translateX(-50%);

        &:nth-child(1) {
            transform: scaleX(-1);
            margin-inline-start: -15.17613rem; 
        }

        &:nth-child(2) {
            margin-inline-start: 7.788065rem; 
        }
    }
`

type MockupProps = {
    $backgroundImage: string
}

export const Mockup = styled.div<MockupProps>`
    width: 30rem; 
    height: 45rem;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        width: 51.375rem; 
        height: 45rem;
        background-image: url(${(props) => props.$backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        transform: translate(-119px);
    }
`

export const Content = styled.div`
    display: flex;
    max-width: 36.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;

    > h2 {
        color: var(--Neutral-White, #FFF);

        /* Size 80/Bold Compact */
        font-family: "Noto Sans";
        font-size: 2.8125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; /* 3.09375rem */
        letter-spacing: -0.1125rem;
    }

    > p {
        color: var(--Primary-Light, #EEE4DF);

        /* Size 60/Medium Compact */
        font-family: "Noto Sans";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 1.65rem */
        letter-spacing: -0.06rem;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`
