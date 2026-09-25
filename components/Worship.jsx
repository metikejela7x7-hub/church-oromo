import { expectations, worshipImage } from "@/data/church";
import Photo from "./Photo";

export default function Worship() {
  return (
    <section id="worship" className="section worship" aria-labelledby="worship-title">
      <div className="wrap worship-grid">
        <Photo
          src={worshipImage.image}
          alt={worshipImage.alt}
          label="worship service"
          className="arch worship-photo"
          sizes="(max-width: 860px) 100vw, 40vw"
        />

        <div>
          <h2 id="worship-title" className="h2">What to expect on Sunday</h2>
          <p className="worship-intro">
            If it is your first time with us, here is what a Sunday looks like. You don't need
            to know anyone or bring anything.
          </p>
          <dl className="expect-list">
            {expectations.map((e) => (
              <div className="expect" key={e.title}>
                <dt>{e.title}</dt>
                <dd>{e.text}</dd>
              </div>
            ))}
          </dl>
          <a href="#visit" className="btn btn-gold">Plan your visit</a>
        </div>
      </div>
    </section>
  );
}
