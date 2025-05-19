import React from "react";
const Calculator_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 7.5h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 2.726c0-.539.436-.976.974-.976h16.552c.538 0 .974.437.974.976v18.548c0 .539-.436.976-.974.976H3.724a.975.975 0 0 1-.974-.976zm16.553.976V9.25H4.696V3.702zM6.25 13.25h2.026v1.5H6.25zm4.737 0h2.026v1.5h-2.026zm4.737 0h2.026v1.5h-2.026zm-7.448 4H6.25v1.5h2.026zm4.737 0h-2.026v1.5h2.026zm4.737 0h-2.026v1.5h2.026z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calculator_01;
