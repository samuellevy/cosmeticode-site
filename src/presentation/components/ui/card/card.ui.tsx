import type { FC } from 'react'
import { Container, Description, Title } from './card.ui.style'

type CardUiProps = {
    title: string
    description: string
}

export const CardUi: FC<CardUiProps> = ({ title, description }) => {
    return (
        <Container>
            <Title>{title}</Title>

            <Description>{description}</Description>
        </Container>
    )
}
