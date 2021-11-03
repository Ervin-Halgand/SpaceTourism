import content from '../data/destination.json';
import style from '../pagesStyles/destination.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Destination = () => {
  const [activePlanete, setActivePlanete] = useState("Moon");
  const [animate, setAnimate] = useState(false);
  const animateChangingData = (name) => {
    setAnimate(true);
    setTimeout(() => { setActivePlanete(name); setAnimate(false); }, 500);
  }
  return (
    <>
      <div className={style.main__background} alt="background"></div>
      <div className={style.content}>
        <h1 className={style.heading}>
          <span className={style.heading__number}>01</span>
          <span className={style.heading__text}>Pick your destination</span>
        </h1>
        <section className={style.content__left}>
          <div className={style.heading__image__handler} style={{ opacity: animate && "0" }}>
            {content.map((item, i) => <Image
              className={item.name !== activePlanete ? style.opacity__0 : ""}
              key={i}
              src={item.images.webp}
              alt="planete"
              width={445}
              height={445}
              priority={true}
            />)}
          </div>
        </section>
        <section className={style.content__right}>
          <div className={style.content__right__selector}>{content.map((item, i) => <button key={i} onClick={() => animateChangingData(item.name)}
            style={{ color: item.name == activePlanete && "white" }}>{item.name}<div className={style.content__right__selector__active} style={{ opacity: item.name == activePlanete && "1" }}></div></button>)}</div>
          <section className={style.content__right__info}>
            <h3 className={style.content__right__title} style={{ opacity: animate && "0" }}>{content[content.findIndex(item => item.name === activePlanete)].name}</h3>
            <p className={style.content__right__desc} style={{ opacity: animate && "0" }}>
              {content[content.findIndex(item => item.name === activePlanete)].description}
            </p>
            <div className={style.content__right__dsc__hr}></div>
            <div className={style.section__right__stats}>
              <div>
                <div className={style.section__right__stats__title}>AVG. DISTANCE</div>
                <div className={style.section__right__stats__desc} style={{ opacity: animate && "0" }}>{content[content.findIndex(item => item.name === activePlanete)].distance}</div>
              </div>
              <div>
                <div className={style.section__right__stats__title}>Est. travel time</div>
                <div className={style.section__right__stats__desc} style={{ opacity: animate && "0" }}>{content[content.findIndex(item => item.name === activePlanete)].travel}</div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default Destination;