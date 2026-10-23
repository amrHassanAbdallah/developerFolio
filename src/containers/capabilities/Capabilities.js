import React from "react";
import {Link} from "react-router-dom";
import {capabilities} from "../../portfolio";
import "./Capabilities.scss";

export default function Capabilities() {
  return (
    <section className="container capabilities" aria-labelledby="capabilities-heading">
      <h2 className="section-heading" id="capabilities-heading">{capabilities.title}</h2>
      <div className="capabilities-grid">
        {capabilities.items.map(item => (
          <article className="capability" key={item.title}>
            <h3>{item.title}</h3>
            <p className="subTitle">{item.description}</p>
            <Link to={item.to}>{item.evidence} <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
