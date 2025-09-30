import { RouterProvider } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { router } from './main/router/router'
import { GlobalStyle } from './presentation/styles/global.style'
import { theme } from './presentation/styles/themes/default.theme'

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalStyle />
        </ThemeProvider>
    )
}
