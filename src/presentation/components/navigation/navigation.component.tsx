import { NavLink } from 'react-router'
import { ButtonUi } from '../ui/button/button.ui'
import { Actions, Container, Content, Menu } from './navigation.component.style'

export const Navigation = () => {
    return (
        <Container>
            <Content>
                <Menu>
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="/the-app">O App</NavLink>
                    <NavLink to="/our-mission">Nossa Missão</NavLink>
                    <NavLink to="/plans">Planos</NavLink>
                </Menu>

                <img alt="" src="/cosmeticode-logo.png" />

                <Actions>
                    <a href="/" rel="noopener noreferrer" target="_blank">
                        Entrar
                    </a>

                    <ButtonUi $variant="primary">Experimente grátis</ButtonUi>
                </Actions>
            </Content>
        </Container>
    )
}
