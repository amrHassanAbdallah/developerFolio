import React, {useState} from "react";
import "./ExperienceCard.scss";

function BulletList({items}) {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <ul className="experience-bullets">
      {items.map(item => (
        <li key={item} className="subTitle">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceCard({cardInfo, isDark}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = cardInfo.companylogo && !logoFailed;

  return (
    <article
      id={cardInfo.id ? `experience-${cardInfo.id}` : undefined}
      tabIndex={-1}
      className={isDark ? "experience-card dark-mode" : "experience-card"}
    >
      <header className="experience-row-header">
        {showLogo ? (
          <img
            className="experience-logo"
            src={cardInfo.companylogo}
            alt={`${cardInfo.company} logo`}
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="experience-logo experience-company-initials" aria-hidden="true">
            {cardInfo.company.charAt(0)}
          </span>
        )}
        <div className="experience-heading-text">
          <div className="experience-company-line">
            <h3 className="experience-company">{cardInfo.company}</h3>
            {cardInfo.current && <span className="experience-current">Current role</span>}
          </div>
          <p className="subTitle experience-role">{cardInfo.role}</p>
        </div>
        {cardInfo.date && (
          <p className="subTitle experience-date mono">{cardInfo.date}</p>
        )}
      </header>

      <BulletList items={cardInfo.bullets} />

      {cardInfo.caseStudy && (
        <details id={`case-study-${cardInfo.caseStudy.id}`} className="experience-more experience-case-study">
          <summary tabIndex={0}>{cardInfo.caseStudy.title}</summary>
          <div className="case-study-content">
            {cardInfo.caseStudy.sections.map(section => (
              <section key={section.heading}>
                <h4>{section.heading}</h4>
                <p className="subTitle">{section.text}</p>
              </section>
            ))}
          </div>
        </details>
      )}

      {cardInfo.moreBullets && cardInfo.moreBullets.length > 0 && (
        <details className="experience-more">
          <summary>More at {cardInfo.company}</summary>
          <BulletList items={cardInfo.moreBullets} />
        </details>
      )}
    </article>
  );
}
