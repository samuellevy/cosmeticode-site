import { Outlet } from 'react-router'
import { Footer } from '@/presentation/components/footer/footer.component'
import { Navigation } from '@/presentation/components/navigation/navigation.component'
import { Container } from './root.layout.style'

export const RootLayout = () => {
    return (
        <Container>
            <Navigation />
            <Outlet />
            <Footer />
        </Container>
    )
}
