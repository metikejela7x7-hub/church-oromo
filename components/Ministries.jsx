import { church, ministries } from "@/data/church";

export default function Ministries() {
  const contact = church.contact.emailHref || "#contact";
  return (
    <section id="ministries" className="section ministries" aria-labelledby="ministries-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="ministries-title" className="h2">Ministries</h2>
          <p>There is a place for everyone to belong and to serve.</p>
        </div>

        <ul className="ministry-grid">
          {ministries.map((m) => (
            <li className="ministry" key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.text}</p>
              <a href={contact} className="text-link">
                Get involved<span className="sr-only"> with {m.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
