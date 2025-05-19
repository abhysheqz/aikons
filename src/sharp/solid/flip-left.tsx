import React from "react";
const FlipLeft: React.FC<
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
        d="M1.25 3.225c0-.539.438-.975.977-.975H5.16V4.2H3.205v1.95H1.25zm7.818.975H7.114V2.25h1.954zM1.25 11.025V8.101h1.955v2.924zm0 4.874v-2.924h1.955v2.924zm0 4.876V17.85h1.955v1.946l1.949-.01.01 1.949-2.931.016a.98.98 0 0 1-.983-.975m7.818.975H7.114V19.8h1.954z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.773 2.251c.54 0 .978.437.978.975v17.54a.976.976 0 0 1-.977.976l-10.75.007V2.251z"
      />
    </svg>
  );
};
export default FlipLeft;
