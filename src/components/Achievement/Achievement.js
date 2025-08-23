import React, { useContext } from "react";
import "./Achievement.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";

function Achievement() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {achievementData.achievements.length > 0 && (
        <section
          className="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <h1
              style={{
                color: theme.primary,
                fontFamily: "var(--primaryFont)",
                fontSize: "3.5rem", // or match the font-size of other section titles
                marginBottom: "1.5rem",
              }}
            >
              Achievements
            </h1>

            <p style={{ fontFamily: "Noto Sans TC, sans-serif" }}>
              {achievementData.bio}
            </p>
          </div>

          <div className="achievement-cards">
            {achievementData.achievements.map(
              ({ id, title, details, date, field, image, link, linkText }) => (
                <AchievementCard
                  key={id}
                  id={id}
                  title={title}
                  details={details}
                  date={date}
                  field={field}
                  image={image}
                  link={link}
                  linkText={linkText}
                />
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default Achievement;
