import { church, sermons } from "@/data/church";
import Val from "./Val";
import Photo from "./Photo";

function SermonCard({ s, big }) {
  const link = s.url || church.socials.youtube;
  return (
    <article className={"sermon" + (big ? " sermon-big" : "")}>
      <a href={link} className="sermon-thumb" target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
        <Photo src={s.thumb} alt="" label="sermon thumbnail" sizes={big ? "(max-width: 860px) 100vw, 60vw" : "(max-width: 860px) 100vw, 30vw"} />
        <span className="play" />
      </a>
      <div className="sermon-body">
        <h3><Val>{s.title}</Val></h3>
        <p className="sermon-meta">
          <span><Val>{s.speaker}</Val></span>
          <span><Val>{s.date}</Val></span>
        </p>
        <a href={link} className="btn btn-dark btn-sm" target="_blank" rel="noopener noreferrer">
          Watch<span className="sr-only"> sermon</span>
        </a>
      </div>
    </article>
  );
}

export default function Sermons() {
  const [first, ...rest] = sermons;
  return (
    <section id="sermons" className="section sermons" aria-labelledby="sermons-title">
      <div className="wrap">
        <div className="section-head section-head-row">
          <h2 id="sermons-title" className="h2">Sermons</h2>
          <a href={church.socials.youtube} className="text-link" target="_blank" rel="noopener noreferrer">
            All sermons on YouTube
          </a>
        </div>

        <div className="sermons-grid">
          <SermonCard s={first} big />
          <div className="sermons-list">
            {rest.map((s, i) => (
              <SermonCard s={s} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
