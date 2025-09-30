import styled from 'styled-components'

export const Container = styled.div`
    /* Box Model */
    margin-inline: auto;
    max-width: 80rem;
    padding-block: 6rem 5.63rem;
    margin-block-end: 7.37rem;
    /* Visual */
    position: relative;
    overflow: hidden;
`

export const Background = styled.img`
    /* Layout */
    position: absolute;
    inset: 0;
    /* Visual */
    object-fit: cover;
    z-index: -10;
`

export const Content = styled.div`
    /* Box Model */
    margin-block-start: 3rem;
`
