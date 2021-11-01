import Link from 'next/link'
import style from "../pagesStyles/home.module.css"

const Home = () => {
  return (
    <>
      <div className={style.main__background} alt="background"></div>
      <div className={style.container}>
        <section className={style.container__left}>
          <h1>SO, YOU WANT TO TRAVEL TO<br></br><span>SPACE</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </section>
        <section className={style.container__right}>
          <Link href="/destination">
            <a>
              <button className={style.container__right__button}>
                Explore
              </button>
            </a>
          </Link>
        </section>
      </div>
    </>
  )
}

export default Home;