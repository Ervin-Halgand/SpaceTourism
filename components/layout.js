import Header from "./Header/Header";
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;