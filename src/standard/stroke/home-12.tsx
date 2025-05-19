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
        d="m3.2 11.74 1.3.26.4 7.605A2 2 0 0 0 6.897 21.5H17.2a2 2 0 0 0 1.99-1.79L20 12l.836-.209a1.537 1.537 0 0 0 .509-2.75l-8.198-5.738a2 2 0 0 0-2.294 0L2.636 9.055A1.492 1.492 0 0 0 3.2 11.74"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 16.5c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
      />
    </svg>
  );
};
export default Home_12;
