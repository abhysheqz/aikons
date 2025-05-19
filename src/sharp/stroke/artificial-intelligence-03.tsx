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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2.733 3.25 3.17 2.25h3.902m-6.34-2.25c0 .414-.328.75-.732.75a.74.74 0 0 1-.732-.75c0-.414.328-.75.732-.75s.732.336.732.75ZM2.733 8.75h7.072m-6.34 0c0 .414-.328.75-.732.75a.74.74 0 0 1-.732-.75c0-.414.328-.75.732-.75s.732.336.732.75Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.809 21.949V19.43l3.07-.877.87-3.602 2.196-.906c.034-.014.059-.046.053-.083a.2.2 0 0 0-.024-.064l-1.263-1.625-1.42-2.032C19.29 5.72 15.855 2 11.282 2a7.9 7.9 0 0 0-3.363.739M6.463 22v-5.012m2.474 1.195c-2.576-.74-4.601-2.705-5.473-5.2"
      />
    </svg>
  );
};
export default ArtificialIntelligence_03;
