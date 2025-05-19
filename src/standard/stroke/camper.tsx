import React from "react";
const Camper: React.FC<
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
      <circle
        cx={17}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7h5l-1.447-2.894A2 2 0 0 0 18.763 3H4a2 2 0 0 0-2 2v9M5 7h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19h6m4 0a3 3 0 0 0 3-3v-3l-3.406-5.11A2 2 0 0 0 16.93 7H15a1 1 0 0 0-1 1v5m-9 6H3a1 1 0 0 1-1-1v-5h19.415"
      />
    </svg>
  );
};
export default Camper;
