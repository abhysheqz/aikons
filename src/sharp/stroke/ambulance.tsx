import React from "react";
const Ambulance: React.FC<
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
        d="M11 17.5h4m-1.5-10h5L22 12v5.5h-3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 17.5H2v-13h11.5v13H9M8 7.5v5m2.5-2.5h-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 14.5h1.987"
      />
    </svg>
  );
};
export default Ambulance;
