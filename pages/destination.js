import style from '../pagesStyles/destination.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Destination = ({ content }) => {
  const [activePlanete, setActivePlanete] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      if (activePlanete === 3)
        animateChangingData(0);
      else
        animateChangingData(activePlanete + 1);
    }
    if (touchStart - touchEnd < 75) {
      if (activePlanete === 0)
        animateChangingData(3);
      else
        animateChangingData(activePlanete - 1);
    }
  }
  const animateChangingData = (index) => {
    setAnimate(true);
    setTimeout(() => { setActivePlanete(index); setAnimate(false); }, 500);
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
          <div className={style.heading__image__handler} style={{ opacity: animate && "0" }}
            onTouchStart={e => setTouchStart(e.targetTouches[0].clientX)}
            onTouchMove={e => setTouchEnd(e.targetTouches[0].clientX)}
            onTouchEnd={() => handleTouchEnd()}>
            {content.map((item, i) => <Image
              className={i !== activePlanete ? style.opacity__0 : ""}
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
          <div className={style.content__right__selector}>{content.map((item, i) => <button key={i} onClick={() => animateChangingData(i)}
            style={{ color: i == activePlanete && "white" }}>{item.name}<div className={style.content__right__selector__active} style={{ opacity: i == activePlanete && "1" }}></div></button>)}</div>
          <section className={style.content__right__info}>
            <h3 className={style.content__right__title} style={{ opacity: animate && "0" }}>{content[activePlanete].name}</h3>
            <p className={style.content__right__desc} style={{ opacity: animate && "0" }}>
              {content[activePlanete].description}
            </p>
            <div className={style.content__right__dsc__hr}></div>
            <div className={style.section__right__stats}>
              <div>
                <div className={style.section__right__stats__title}>AVG. DISTANCE</div>
                <div className={style.section__right__stats__desc} style={{ opacity: animate && "0" }}>{content[activePlanete].distance}</div>
              </div>
              <div>
                <div className={style.section__right__stats__title}>Est. travel time</div>
                <div className={style.section__right__stats__desc} style={{ opacity: animate && "0" }}>{content[activePlanete].travel}</div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}

export default Destination;

export async function getStaticProps() {
  const content = await import('../lib/data/destination.json');
  return { props: { content: content.default } }
}