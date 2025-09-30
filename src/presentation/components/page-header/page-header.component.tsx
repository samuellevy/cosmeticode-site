import type { FC } from 'react'
import { Container, Title } from './page-header.component.style'

type PageHeaderProps = {
    title: string
    caption: string
}

export const PageHeader: FC<PageHeaderProps> = ({ title, caption }) => {
    return (
        <Container>
            <img alt="" src="/header-page-background.png" />

            <Title>
                {title} <span>{caption}</span>
            </Title>
        </Container>
    )
}
