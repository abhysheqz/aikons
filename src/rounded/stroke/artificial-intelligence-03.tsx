import React from "react";
const ArtificialIntelligence_03: React.FC<
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
        d="M16 22v-.5c0-1.105.932-2 1.922-2.489.963-.476 1.772-1.26 1.875-2.18L20 15l2-1-2.5-3.75A8.25 8.25 0 0 0 8 2.665M6.5 16.996V22m0-5.004a8.27 8.27 0 0 1-3-3.911m3 3.911c.75.53 1.594.937 2.5 1.194"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.75 3.25 6 5.5h4M3.5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M2.75 8.75H10m-6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      />
    </svg>
  );
};
export default ArtificialIntelligence_03;
