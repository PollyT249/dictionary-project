import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let example = props.meaning.example;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <p className="Meaning-example">
        <em>{example ? `Example: ${example}` : null}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
