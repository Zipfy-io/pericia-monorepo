import React from "react";

interface LogoProps {
  fill1: string;
  fill2: string;
  width?: string;
  height?: string;
  viewBox?: string;
  // Add any other SVG props you want to use here
}

function Logo(props: LogoProps) {
  const { fill1, fill2, width, height, viewBox } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 150 150"}
      width={width}
      height={height}
    >
      <path
        fill={fill1}
        d="M94.97 59.65v31.03c0 2.24-1.82 4.06-4.06 4.06H65.69v13.66h32.69c5.66 0 10.24-4.59 10.24-10.24V53c0-5.82-4.72-10.54-10.54-10.54H52.72c-5.82 0-10.54 4.72-10.54 10.54v70.89H27.47v-15.23h9.46V95l-15.77-.26c-4.05 0-7.34 3.29-7.34 7.34v28.35c0 3.93 3.19 7.12 7.12 7.12h28.54c3.51 0 6.36-2.85 6.36-6.36V59.65c0-2.24 1.82-4.06 4.06-4.06h31.03c2.24 0 4.06 1.82 4.06 4.06z"
        className="b"
      ></path>
      <path
        fill={fill2}
        d="M119.23 13.57H32.37c-10.25 0-18.56 8.31-18.56 18.56v52.01h13.66V36.33c0-5.03 4.08-9.1 9.1-9.1h78.46c5.03 0 9.1 4.08 9.1 9.1v78.46c0 5.03-4.08 9.1-9.1 9.1H65.71v13.66h53.53c10.25 0 18.56-8.31 18.56-18.56V32.13c0-10.25-8.31-18.56-18.56-18.56z"
        className="b"
      ></path>
    </svg>
  );
}

export default React.memo(Logo);
