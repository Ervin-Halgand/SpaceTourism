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
                <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
            </Head>
            <Image className={style.main__background} src="/assets/home/background-home-desktop.jpg" alt="background" layout="fill" />
            <Header />
            <main>{children}</main>
            <style jsx global>{`
            html,
            body {
                font-family: Bellefair, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            button {
                border: none;
                font-family: Bellefair, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            a {
                text-decoration: none;
            }
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
      `}</style>
        </>
    )
}

export default Layout;