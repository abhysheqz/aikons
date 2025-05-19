import React from "react";
const Home_12: React.FC<
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
        strokeWidth={1.5}
        d="m3.164 11.35.836.209L5 21.5h14l1-9.941.836-.21a1.537 1.537 0 0 0 .509-2.75l-8.198-5.737a2 2 0 0 0-2.294 0L2.655 8.6a1.537 1.537 0 0 0 .51 2.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 16c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
      />
    </svg>
  );
};
export default Home_12;
