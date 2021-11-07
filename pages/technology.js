import destination from "../pagesStyles/destination.module.css"
import style from "../pagesStyles/technology.module.css"
import content from '../lib/data/technology.json'
import { useState } from "react"
import Image from 'next/image'
import useWindowDimensions from "../components/Header/useWindowDimensions"

const Technology = () => {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

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
        <section className={style.content__right} style={{ opacity: animate && "0" }}>
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