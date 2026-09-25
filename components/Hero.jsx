import { church } from "@/data/church";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Photo
        src={church.hero.image}
        alt={church.hero.imageAlt}
        label="congregation or church exterior"
        className="hero-bg"
        priority
      />
      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-inner">
        <p className="hero-welcome anim" style={{ "--d": "0ms" }}>
          <span lang="om">{church.welcomeOromo}</span>
          <span className="hero-welcome-en">{church.welcomeEnglish}</span>
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="anim" style={{ "--d": "120ms" }}>Oromo Evangelical</span>
          <span className="anim" style={{ "--d": "240ms" }}>Church of Atlanta</span>
        </h1>
        <p className="hero-tag anim" style={{ "--d": "420ms" }}>“{church.tagline}”</p>
        <div className="hero-actions anim" style={{ "--d": "560ms" }}>
          <a className="btn btn-gold btn-lg" href="#visit">Plan your visit</a>
          <a className="btn btn-outline-light btn-lg" href="#sermons">Watch sermons</a>
        </div>
      </div>
    </section>
  );
}
