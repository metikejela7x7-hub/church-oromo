import { church } from "@/data/church";
import Val from "./Val";
import Woven from "./Woven";

export default function ThisSunday() {
  const s = church.services[0];
  const loc = church.location;

  return (
    <section id="visit" className="sunday" aria-labelledby="sunday-title">
      <div className="wrap">
        <div className="sunday-card">
          <Woven tone="light" />
          <div className="sunday-grid">
            <h2 id="sunday-title" className="sunday-title">This Sunday</h2>

            <div className="sunday-item">
              <h3>Worship</h3>
              <p className="sunday-big">{s.day}</p>
              <p><Val>{s.time}</Val></p>
            </div>

            <div className="sunday-item">
              <h3>Location</h3>
              <p className="sunday-big">{loc.venue}</p>
              <p><Val>{loc.address}</Val></p>
            </div>

            <a className="btn btn-dark sunday-btn" href={loc.mapsUrl} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
