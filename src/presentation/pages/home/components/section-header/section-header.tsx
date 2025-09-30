import type { FC, PropsWithChildren } from 'react'
import { Actions, Container, Content, Title } from './section-header.style'

type SectionHeaderProps = PropsWithChildren<{
    title: string
    caption: string
}>

export const SectionHeader: FC<SectionHeaderProps> = ({
    children,
    title,
    caption,
}) => {
    return (
        <Container>
            <Content>
                <Title>
                    {title} <span>{caption}</span>
                </Title>

                {children && <Actions>{children}</Actions>}
            </Content>

            <hr />
        </Container>
    )
}
