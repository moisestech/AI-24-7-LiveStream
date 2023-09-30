import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/layout'
import { ThemeProvider } from "../components/theme/theme";

//Styles
import '../components/_setup/reset.css'
import '../components/_setup/fonts.scss'
import '../components/_setup/style.scss'

//Component Styles
import '../components/header/header.scss'
import '../components/header/header.burger.scss'
import '../components/layout/layout.scss'

//Stage
import '../components/stage/stage.scss'

//pages
import '../components/pages/page.scss'

// MODULES
import "../components/modules/moduleText/moduleText.scss"

const App = ({ Component, pageProps, router, videos }) => {
    return (
        <ThemeProvider {...pageProps}>
            <Layout {...pageProps}>
                <AnimatePresence mode="wait">
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    )
}
export default App
