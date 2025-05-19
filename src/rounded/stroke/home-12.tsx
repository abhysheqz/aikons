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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.164 11.35.836.209.457 4.542c.258 2.566.387 3.849 1.244 4.624s2.147.775 4.726.775h3.146c2.58 0 3.87 0 4.726-.775.857-.775.986-2.058 1.244-4.625L20 11.56l.836-.21a1.537 1.537 0 0 0 .509-2.75l-8.198-5.737a2 2 0 0 0-2.294 0L2.655 8.6a1.537 1.537 0 0 0 .51 2.75"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 16c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
      />
    </svg>
  );
};
export default Home_12;
