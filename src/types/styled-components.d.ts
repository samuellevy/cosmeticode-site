import 'styled-components'
import type { theme } from '@/presentation/styles/themes/default.theme'

type Theme = typeof theme

declare module 'styled-components' {
    interface DefaultTheme extends Theme {}
}
