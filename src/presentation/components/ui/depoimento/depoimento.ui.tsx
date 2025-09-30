import type { FC } from 'react'
import {
    Avatar,
    Body,
    Container,
    Description,
    Header,
    Position,
    Title,
} from './depoimento.ui.style'

type DepoimentoUiProps = {
    avatar_url: string
    name: string
    position: string
    content: string
}

export const DepoimentoUi: FC<DepoimentoUiProps> = ({
    avatar_url,
    name,
    position,
    content,
}) => {
    return (
        <Container>
            <Header>
                <Avatar alt="" src={avatar_url} />
                <Title>{name}</Title>
                <Position>{position}</Position>
            </Header>

            <Body>
                <Description>{content}</Description>
                <img alt="" src="/icons/quote.svg" />
            </Body>
        </Container>
    )
}
