import type { ComponentProps, FC } from 'react'
import { Container } from './button.ui.style'

type ButtonUiProps = ComponentProps<'button'> & {
    $variant?: 'default' | 'primary' | 'secondary' | 'neutral'
}

export const ButtonUi: FC<ButtonUiProps> = ({
    $variant = 'default',
    ...props
}) => {
    return <Container $variant={$variant} {...props} />
}
