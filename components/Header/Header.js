import style from "./header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react';
import useWindowDimensions from "./useWindowDimensions";


const Header = () => {
    const router = useRouter();
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const { width, height } = useWindowDimensions();
    useEffect(() => {
        if (router.query)
        router.replace('/');
    }, [])
    useEffect(() => {
        if (!navRef || !width) return;
        Array.from(navRef.current.children).forEach(element => {
            if (!element.className.includes("is__active")) return;
            if (width < 480) {
                //timeOut to prevent html not finish loaded
                setTimeout(() => {
                    navRef.current.children[navRef.current.children.length - 1].style.top = `${element.offsetTop - 4}px`;
                    navRef.current.children[navRef.current.children.length - 1].style.left = "inherit";
                    navRef.current.children[navRef.current.children.length - 1].style.right = "0";
                    navRef.current.children[navRef.current.children.length - 1].style.width = "4px";
                }, 100);
            } else {
                //timeOut to prevent html not finish loaded
                setTimeout(() => {
                    navRef.current.children[navRef.current.children.length - 1].style.right = "inherit";
                    navRef.current.children[navRef.current.children.length - 1].style.left = `${element.offsetLeft}px`;
                    navRef.current.children[navRef.current.children.length - 1].style.width = `${element.offsetWidth}px`
                    navRef.current.children[navRef.current.children.length - 1].style.top = "inherit"
                }, 100);

            }
        });
    }, [navRef, router, width, height])

    return (
        <header className={style.header}>
            <Image
                className={style.logo}
                src="/assets/shared/logo.svg"
                width="48"
                height="48"
                alt="logo"
            />
            <div className={style.spacer}></div>
            <button className={style.hamburger__handler} onClick={() => setIsOpen(!isOpen)}>
                <div style={{ opacity: isOpen ? "0" : "1", visibility: isOpen ? "hidden" : "visible" }}>
                    <Image
                        src="/assets/shared/icon-hamburger.svg"
                        width="24"
                        height="21"
                        alt="logo"
                    />
                </div>
                <div style={{ opacity: isOpen ? "1" : "0", visibility: isOpen ? "visible" : "hidden" }}>
                    <Image
                        src="/assets/shared/icon-close.svg"
                        width="19"
                        height="19"
                        alt="logo"
                    />
                </div>
            </button>
            <nav className={style.nav} ref={navRef} style={{ transform: (isOpen && width < 480) && "translate3d(0,0,0)" }}>
                <Link href="/">
                    <a className={router.pathname === "/" ? style.is__active : ""}><span>00</span>home</a>
                </Link>
                <Link href="/destination">
                    <a className={router.pathname === "/destination" ? style.is__active : ""}><span>01</span>destination</a>
                </Link>
                <Link href="/crew">
                    <a className={router.pathname === "/crew" ? style.is__active : ""}><span>02</span>crew</a>
                </Link>
                <Link href="/technology">
                    <a className={router.pathname === "/technology" ? style.is__active : ""}><span>03</span>technology</a>
                </Link>
                <span className={style.nav__indicator}></span>
            </nav>
        </header>
    )
}

export default Header;