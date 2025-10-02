import styled from 'styled-components'

export const Container = styled.div`
    /* Box Model */
    margin-inline: auto;
    max-width: 80rem;
    margin-block-end: 7rem;
`

export const Content = styled.div`
    /* Box Model */
    padding-block-start: 12.94rem;
    height: 46.125rem;
    /* Visual */
    position: relative;
`

export const Mockup = styled.img`
    /* Box Model */
    width: 43.125rem;
    height: 43.125rem;
    /* Layout */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
`
