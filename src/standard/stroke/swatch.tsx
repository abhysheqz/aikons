import React from "react";
const Swatch: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 22h11.846c1.19 0 2.154-.895 2.154-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 16.444V3.111C13 2.497 12.508 2 11.9 2H3.1C2.492 2 2 2.497 2 3.111v13.333C2 19.513 4.462 22 7.5 22s5.5-2.487 5.5-5.556Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 17.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h11M2 13h11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.11 4c.51.454 1.086 1.022 1.778 1.703C19.963 7.746 21 8.767 21 10.036s-1.037 2.29-3.112 4.333l-7.04 6.932A6 6 0 0 1 10 22"
      />
    </svg>
  );
};
export default Swatch;
