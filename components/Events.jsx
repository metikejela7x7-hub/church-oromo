import { church, events } from "@/data/church";
import Val from "./Val";

export default function Events() {
  const ask = church.contact.emailHref || "#contact";

  return (
    <section id="events" className="section events" aria-labelledby="events-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="events-title" className="h2">Upcoming events</h2>
          <p className="note">Dates shown are placeholders until the church calendar is confirmed.</p>
        </div>
      </div>

      <div className="events-scroller" tabIndex={0} aria-label="Upcoming events list, scrolls sideways">
        <ol className="events-row">
          {events.map((ev, i) => (
            <li className="event" key={i}>
              <div className="event-date">
                <span className="event-day"><Val>{ev.date}</Val></span>
                <span className="event-time"><Val>{ev.time}</Val></span>
              </div>
              <h3>{ev.title}</h3>
              <p className="event-place"><Val>{ev.place}</Val></p>
              <p className="event-text">{ev.text}</p>
              <a className="text-link" href={ask}>Ask about this event</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
