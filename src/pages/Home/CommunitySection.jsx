   {/* ================Community Section============== */}
import React from "react";
import "./CommunitySection.css";
import StarIcon from "../../assets/Community/star.svg";
import MichaelPhoto from "../../assets/Community/michael.svg";
import DavidPhoto from "../../assets/Community/david.svg";
import MarkPhoto from "../../assets/Community/mark.svg";

const testimonials = [
  {
    photo: MichaelPhoto,
    name: "Michael Elon",
    role: "Ally Participant",
    quote:
      "This platform gave me the confidence and tools I needed to be a better ally. The scenarios are incredibly realistic and helpful.",
  },
  {
    photo: DavidPhoto,
    name: "David Jide",
    role: "Workshop Facilitator",
    quote:
      "An essential resource for men who want to make a real difference. The structured approach makes learning accessible.",
  },
  {
    photo: MarkPhoto,
    name: "Mark Jeff",
    role: "Community Leader",
    quote:
      "The practical skills I learned here have transformed how I support women in my community. Highly recommend!",
  },
];

const CommunitySection = () => {
  return (
    <section className="community">
      <div className="community-container">
        {/* ================Heading============== */}
        <div className="community-top">
          <h2>What Our Community Says</h2>
          <p>Real stories from men making a difference.</p>
        </div>

        {/* =================Testimonials============ */}
        <div className="community-testimonials">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={t.photo} alt={t.name} className="testimonial-photo" />
              <h3>{t.name}</h3>
              <span className="testimonial-role">{t.role}</span>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={StarIcon} alt="star" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;