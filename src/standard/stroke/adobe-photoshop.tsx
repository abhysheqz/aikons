import React from "react";
const AdobePhotoshop: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 16v-4m0 0V8H9a2 2 0 1 1 0 4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.466 11.223C17.292 10.527 16.478 10 15.5 10c-1.105 0-2 .672-2 1.5 0 2.308 4 .692 4 3 0 .828-.895 1.5-2 1.5-.982 0-1.798-.53-1.968-1.23"
      />
    </svg>
  );
};
export default AdobePhotoshop;
