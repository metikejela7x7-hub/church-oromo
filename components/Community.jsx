import { community } from "@/data/church";
import Photo from "./Photo";

export default function Community() {
  return (
    <section id="community" className="section community" aria-labelledby="community-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="community-title" className="h2">Our community</h2>
          <p>Church is more than Sunday morning. It is the people you do life with all week.</p>
        </div>

        <ul className="community-grid">
          {community.map((c, i) => (
            <li className={"community-card c" + i} key={c.title}>
              <Photo
                src={c.image}
                alt={c.title}
                label={c.title.toLowerCase()}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
              <div className="community-cap">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
