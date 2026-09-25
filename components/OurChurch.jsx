import { aboutImage } from "@/data/church";
import Photo from "./Photo";

export default function OurChurch() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="about-text">
          <h2 id="about-title" className="h2">Our church</h2>
          <p className="lead">
            A family of Oromo believers in Atlanta, gathered around Jesus Christ.
          </p>
          <div className="about-body">
            <p>
              OECA is a home for Oromo families, elders, young people and anyone looking for a
              place to belong. We worship together, open the Scriptures together, pray for one
              another and share life as a community.
            </p>
            <p>
              Following Christ means serving the people around us, in our church and across
              Atlanta. Whether you grew up in the church or you are visiting one for the first
              time, there is a seat here for you.
            </p>
          </div>
          <a href="#worship" className="text-link">What a Sunday looks like</a>
        </div>

        <Photo
          src={aboutImage.image}
          alt={aboutImage.alt}
          label="members talking after the service"
          className="about-photo"
          sizes="(max-width: 860px) 100vw, 45vw"
        />
      </div>
    </section>
  );
}
