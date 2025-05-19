import React from "react";
const Moon_01: React.FC<
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
        d="m16.678 3.44.71-.744a10.8 10.8 0 0 1 3.956 3.985l-.763.617-.04.044a2.75 2.75 0 1 1-3.884-3.884zM22.75 12c0-1.385-.262-2.71-.74-3.928l-.396.32a4.25 4.25 0 1 1-5.983-6.028l.34-.356c-1.229-.49-2.57-.758-3.971-.758C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12M10 7a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2zm-4 7a1 1 0 0 1 1-1h.006a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m6.75 2a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M14 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moon_01;
