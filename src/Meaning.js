import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let example = props.meaning.example;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example">{example ? `Example: ${example}` : null}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
