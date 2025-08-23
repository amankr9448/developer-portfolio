import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AiOutlineFolder } from "react-icons/ai";
import "./Achievement.css";

function AchievementCard({
  id,
  title,
  details,
  date,
  field,
  image,
  link,
  linkText,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      color: theme.tertiary,
      borderRadius: "16px",
      boxShadow: "0 6px 24px rgba(0,0,0,.07)",
      padding: "1.5rem",
      marginBottom: "1.5rem",
      marginLeft: "1.5rem",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      position: "relative",
      transition:
        "background-color 200ms ease-in-out, box-shadow 200ms ease-in-out",
      "&:hover": {
        backgroundColor: theme.primary50,
        boxShadow: "0 10px 34px rgba(0,0,0,.12)",
      },
    },
    imgContainer: {
      width: "23%",
      marginLeft: "1rem",
      display: "flex",
      justifyContent: "center",
    },
    imgStyle: {
      width: 150,
      height: 130,
      borderRadius: 10,
      objectFit: "contain",
      backgroundColor: "#fff",
    },
    contentContainer: {
      width: "65%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // changed from space-around
      alignItems: "flex-start",
    },
    details2: {
      display: "flex",
      alignItems: "center",
      gap: "1.2rem",
      fontSize: "1rem",
      marginTop: "10px",
      position: "static", // Removed absolute to avoid overlap
    },
    detailsDate: {
      margin: 0,
      fontWeight: 600,
      letterSpacing: "1px",
    },
    field: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    certificateLink: {
      color: theme.tertiary,
      fontWeight: 600,
      textDecoration: "underline",
      marginTop: 10,
      marginBottom: 2,
      display: "inline-block",
      cursor: "pointer",
      transition: "color 0.3s ease",
      "&:hover": {
        color: theme.primary,
        textDecoration: "underline",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div className={classes.achievementCard}>
        <div className={classes.contentContainer}>
          <h2>{title}</h2>
          <p>{details}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.certificateLink}
              aria-label={`${linkText || "View Certificate"} for ${title}`}
            >
              {linkText || "View Certificate"}
            </a>
          )}
          <div className={classes.details2}>
            <h5 className={classes.detailsDate}>{date}</h5>
            <div className={classes.field}>
              <AiOutlineFolder />
              <span>{field}</span>
            </div>
          </div>
        </div>
        <div className={classes.imgContainer}>
          {image ? (
            <img
              src={image}
              alt={`${title} badge`}
              className={classes.imgStyle}
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <div className="image-placeholder">Image Not Available</div>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
