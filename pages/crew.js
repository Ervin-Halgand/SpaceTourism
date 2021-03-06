import destination from "../pagesStyles/destination.module.css"
import style from "../pagesStyles/crew.module.css"
import { useState } from "react"

const Crew = ({ content }) => {
  const [activeName, setActiveName] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      if (activeName === 3)
        animateChangingData(0);
      else
        animateChangingData(activeName + 1);
    }
    if (touchStart - touchEnd < 50) {
      if (activeName === 0)
        animateChangingData(3);
      else
        animateChangingData(activeName - 1);
    }
  }
  const animateChangingData = (i) => {
    setAnimate(true);
    setTimeout(() => { setActiveName(i); setAnimate(false); }, 500);
  }

  return (
    <>
      <div className={style.main__background} alt="background"></div>
      <div className={style.content}>
        <div style={{ position: "relative" }}>
          <h1 className={`${destination.heading} ${style.heading}`}>
            <span className={destination.heading__number}>02</span>
            <span className={destination.heading__text}>Meet your crew</span>
          </h1>
          <div className={style.content__main}>
            <section className={style.content__left}>
              <div style={{ opacity: animate && "0" }} className={style.content__left__role}>{content[activeName].role}</div>
              <div style={{ opacity: animate && "0" }} className={style.content__left__name}>{content[activeName].name}</div>
              <p style={{ opacity: animate && "0" }} className={style.content__left__desc}>{content[activeName].bio}</p>
              <div className={style.content__left__selector}>{content.map((item, i) =>
                <button className={`${style.content__left__selector__button} ${i === activeName && style.content__left__selector__button__active}`} key={i} onClick={() => animateChangingData(i)}></button>
              )}</div>
            </section>
            <section
              onTouchStart={e => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={e => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={() => handleTouchEnd()}
              style={{ opacity: animate && "0" }} className={`${style.content__right} ${style.content__right__image}`}>
              <img src={content[activeName].images.webp} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
export default Crew;

export async function getStaticProps() {
  const content = await import('../lib/data/crew.json');
  return { props: { content: content.default } }
}