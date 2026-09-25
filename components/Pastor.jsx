import { church } from "@/data/church";
import Photo from "./Photo";
import Val from "./Val";

export default function Pastor() {
  const p = church.pastor;
  return (
    <section id="pastor" className="section pastor" aria-labelledby="pastor-title">
      <div className="wrap pastor-grid">
        <Photo
          src={p.image}
          alt={p.name.startsWith("[") ? "Portrait of our pastor" : p.name}
          label="pastor portrait"
          className="arch pastor-photo"
          sizes="(max-width: 860px) 90vw, 40vw"
        />
        <div className="pastor-text">
          <h2 id="pastor-title" className="pastor-heading">About our pastor</h2>
          <p className="pastor-name"><Val>{p.name}</Val></p>
          <p className="pastor-role"><Val>{p.role}</Val></p>
          {p.bio.map((para, i) => (
            <p key={i} className="pastor-bio"><Val>{para}</Val></p>
          ))}
          <a href="#contact" className="btn btn-outline-dark">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
