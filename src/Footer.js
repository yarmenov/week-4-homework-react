import { React } from "react";

export default function Footer() {
  return (
    <p className="credits">
      This project was coded by {""}
      <a
        href="https://www.shecodes.io/graduates/71751-yana-armenova"
        rel="noreferrer"
        target="_blank"
      >
        Yana Armenova
      </a>{" "}
      and is
      <a
        href="https://github.com/yarmenov/week-4-homework-react.git"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        on GitHub
      </a>{" "}
      and
      <a
        href="https://dancing-halva-6d84d2.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        {""} hosted on Netlify
      </a>
    </p>
  );
}
