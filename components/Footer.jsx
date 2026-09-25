import { church, nav } from "@/data/church";
import Val from "./Val";
import Woven from "./Woven";

export default function Footer() {
  const c = church.contact;
  const loc = church.location;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <Woven tone="dark" />
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="footer-name">{church.name}</p>
          <p className="footer-blessing">
            <span lang="om">{church.blessingOromo}</span>
            <span>{church.blessingEnglish}</span>
          </p>
        </div>

        <div>
          <h2 className="footer-h">Visit</h2>
          <address>
            {loc.venue}<br />
            <Val>{loc.address}</Val><br />
            {loc.city}
          </address>
          <a href={loc.mapsUrl} className="text-link" target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>

        <div>
          <h2 className="footer-h">Service times</h2>
          <ul className="plain">
            {church.services.map((s) => (
              <li key={s.name}>{s.name}, {s.day} <Val>{s.time}</Val></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-h">Contact</h2>
          <ul className="plain">
            <li>{c.phoneHref ? <a href={c.phoneHref}>{c.phone}</a> : <Val>{c.phone}</Val>}</li>
            <li>{c.emailHref ? <a href={c.emailHref}>{c.email}</a> : <Val>{c.email}</Val>}</li>
          </ul>
          <ul className="plain socials">
            <li><a href={church.socials.facebook}>Facebook</a></li>
            <li><a href={church.socials.instagram}>Instagram</a></li>
            <li><a href={church.socials.youtube}>YouTube</a></li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-h">Explore</h2>
          <ul className="plain">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>© {year} {church.name}</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
