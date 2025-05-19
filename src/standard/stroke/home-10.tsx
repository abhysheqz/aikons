import React from "react";
const Home_10: React.FC<
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
        d="M3 20v-9.935a2 2 0 0 1 .762-1.57l7-5.519a2 2 0 0 1 2.476 0l7 5.518A2 2 0 0 1 21 10.065V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"
      />
      <circle
        cx={12}
        cy={15.5}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Home_10;
