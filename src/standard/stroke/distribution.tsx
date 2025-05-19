import React from "react";
const Distribution: React.FC<
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
        d="M19.5 6h-15m15 0v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V6m15 0-1.447-2.894A2 2 0 0 0 16.263 2H7.737a2 2 0 0 0-1.789 1.106L4.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.5 9h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 22H12m8.5 0H12m0 0v-2.5"
      />
    </svg>
  );
};
export default Distribution;
