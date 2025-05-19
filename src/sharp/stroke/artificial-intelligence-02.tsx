import React from "react";
const ArtificialIntelligence_02: React.FC<
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
        strokeWidth={1.5}
        d="M8.515 18.21C5.032 17.217 2.5 14.052 2.5 10.315 2.5 5.781 6.023 2 10.645 2c4.62 0 8.369 3.727 8.369 8.26l2.434 3.668c.035.05.081.097.028.125l-1.968.941-1.017 3.496-3 1.037V22m-9.48 0v-4.811"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M14.007 6.25v6.58M7.66 10.468l1.666-3.985 1.571 3.985m-3.237 0-.953 2.277m.953-2.277h3.237m0 0 .898 2.277"
      />
    </svg>
  );
};
export default ArtificialIntelligence_02;
