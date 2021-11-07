import Header from "../Header/Header";
import Head from 'next/head'
import { useState, useEffect } from "react"
import style from './layout.module.css'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    const router = useRouter();
    /* useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);
    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]); */
    return (
        <>
            <Head>
                <title>Space tourism - {router.pathname.split('/')[1] ? router.pathname.split('/')[1] : "home"}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main 
                className={`${style.content}`}>{children}</main>
            <style jsx global>{`
            html,
            body {
                font-family: Bellefair, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            body::after {
                content: "";
                position: absolute;
                top: 0;
                width: 100vw;
                height: 100vh;
                background-color: #0B0D19;
                z-index: -10;
            }
            button {
                border: none;
                font-family: Bellefair, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                background: transparent;
                cursor: pointer;
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