import React from "react";

export default function Base(props) {
  return (
    <div class="content-block">
      <section class="card">
        <div class="card-header">
          <h3>{props.input}</h3>
        </div>
      </section>
    </div>
  );
}
