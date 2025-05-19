import React from "react";
const Brochure: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 3.5h-9a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 6.5H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2.5M5.5 6.5H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2.5M15 8H9m6 4H9m6 4H9"
      />
    </svg>
  );
};
export default Brochure;
