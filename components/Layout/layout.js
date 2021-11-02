import Header from "../Header/Header";
import Head from 'next/head'
import { useState, useEffect } from "react"
import style from './layout.module.css'

const Layout = ({ children }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);
    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);
    return (
        <>
            <Head>
                <title>Space</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main onTransitionEnd={() => {
                if (transitionStage === "fadeOut") {
                    setDisplayChildren(children);
                    setTransitionStage("fadeIn");
                }
            }}
                className={`${style.content} ${style[transitionStage]}`}>{displayChildren}</main>
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