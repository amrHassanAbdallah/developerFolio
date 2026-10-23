import React from "react";
import {clientFeedback} from "../../portfolio";
import "./ClientFeedback.scss";

export default function ClientFeedback() {
  return (
    <section className="container client-feedback" aria-labelledby="client-feedback-heading">
      <h2 className="section-heading" id="client-feedback-heading">{clientFeedback.title}</h2>
      <p className="subTitle client-feedback-intro">{clientFeedback.subtitle}</p>
      <div className="client-feedback-grid">
        {clientFeedback.reviews.map(review => (
          <figure className="client-review" key={review.id}>
            <p className="subTitle client-review-context">{review.context}</p>
            <blockquote cite={review.sourceUrl}>
              <p>{review.quote}</p>
            </blockquote>
            <figcaption>
              <span className="client-review-author">{review.reviewer}</span>
              <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">
                {review.sourceLabel} <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
