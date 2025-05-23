import React from "react";
const Dress_07: React.FC<
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
        d="M13.715 12.15c-.998-.477-1.715.336-1.715.336s-.716-.813-1.714-.336C9.076 12.73 8.99 14.996 12 16c3.01-1.005 2.923-3.27 1.714-3.85M6.5 8l-2 1.5L2 6l3.5-3.5 3-.5L12 5l3.5-3 3 .5L22 6l-2.5 3.5-2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.5c.242.364.455.815.639 1.29.79 2.048.586 4.31.054 6.439l-1.467 5.433c-.13.481.114.98.583 1.148C7.045 21.249 9.523 22 12 22a17.7 17.7 0 0 0 6.25-1.178c.444-.173.66-.652.537-1.111l-1.48-5.482c-.532-2.13-.736-4.39.054-6.438.184-.476.397-.927.639-1.29"
      />
    </svg>
  );
};
export default Dress_07;
