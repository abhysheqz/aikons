import React from "react";
const Astronaut_01: React.FC<
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
        cx={12}
        cy={11}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 18A9 9 0 1 0 3 11v9M18.5 17.5l-4.379-4.379M18 5 14.12 8.879"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 18H3v4h18c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C18.396 18 17.93 18 17 18Z"
      />
    </svg>
  );
};
export default Astronaut_01;
