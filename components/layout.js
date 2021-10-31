import Header from "./Header/Header";
import Head from 'next/head'
import Image from 'next/image'
import style from "./layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Space</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
            </Head>
            <Image className={style.main__background} src="/assets/home/background-home-desktop.jpg" alt="background" layout="fill" />
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;