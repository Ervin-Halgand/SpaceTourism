import destination from "../pagesStyles/destination.module.css"
import style from "../pagesStyles/technology.module.css"
import { useState } from "react"
import Image from 'next/image'

const Technology = ({ content }) => {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      if (active === 2)
        animateChangingData(0);
      else
        animateChangingData(active + 1);
    }
    if (touchStart - touchEnd < 75) {
      if (active === 0)
        animateChangingData(2);
      else
        animateChangingData(active - 1);
    }
  }

  const animateChangingData = (index) => {
    setAnimate(true);
    setTimeout(() => { setActive(index); setAnimate(false); }, 500);
  }
  return (
    <>
      <div className={style.main__background} alt="background"></div>
      <div className={style.content}>
        <h1 className={destination.heading}>
          <span className={destination.heading__number}>03</span>
          <span className={destination.heading__text}>SPACE LAUNCH 101</span>
        </h1>
        <section className={style.content__left}>
          <div className={style.content__left__selector}>
            {[1, 2, 3].map(item =>
              <button key={item} onClick={() => animateChangingData(item - 1)} className={(item - 1) === active ? style.content__left__selector__active : ""}>{item}</button>)}
          </div>
          <div className={style.content__left__info__handler}>
            <div className={style.content__left__info}>
              THE TERMINOLOGY…
            </div>
            <div className={style.content__left__name} style={{ opacity: animate && "0" }}>
              {content[active].name}
            </div>
            <p className={style.content__left__desc} style={{ opacity: animate && "0" }}>
              {content[active].description}
            </p>
          </div>
        </section>
        <section className={style.content__right} style={{ opacity: animate && "0" }}
          onTouchStart={e => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={e => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => handleTouchEnd()}>
          {content.map((item, i) => <Image
            className={`${i !== active ? style.opacity__0 : ""} ${style.content__right__portrait}`}
            key={i}
            src={item.images.portrait}
            alt="project"
            layout="fill"
            priority={true}
          />)}
          {content.map((item, i) => <Image
            className={`${i !== active ? style.opacity__0 : ""} ${style.content__right__landscape}`}
            key={i}
            src={item.images.landscape}
            alt="project"
            layout="fill"
            priority={true}
          />)}
        </section>
      </div>
    </>
  )
}


export default Technology;

export async function getStaticProps() {
  const content = await import('../lib/data/technology.json');
  return { props: { content: content.default } }
}