// ストロークだけのアニメーション

import { useEffect } from "react";
// import title from "../public/mask-svg.svg";
import Vivus from "vivus";

export default function Home() {
  useEffect(() => {
    var svganim = new Vivus("mask", {
      type: "oneByOne",
      duration: 500,
      animTimingFunction: Vivus.EASE_OUT,
      start: "autostart",
    });
    svganim.reverseStack = true;
  }, []);
  return (
    <>
      <style jsx>
        {`
          .cls-1 {
            fill: none;
            stroke: #f00;
            stroke-weight: 10;
          }
        `}
      </style>
      <svg
        id="mask"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="739"
        height="258.9"
        viewBox="0 0 739 258.9"
        style={{ enableBackground: "new 0 0 739 258.9;" }}
        xmlSpace="preserve"
      >
        <path
          className="cls-1"
          stroke-width="20"
          d="m0,42.23S96.73,10.17,223.23,10.17s131.46,46.16,208.35,46.16,163.7-46.16,163.7-46.16"
        />
      </svg>
    </>
  );
}
